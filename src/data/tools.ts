export interface ToolParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example?: string;
}

export interface ToolInfo {
  name: string;
  description: string;
  category: 'core' | 'file' | 'development' | 'search';
  parameters: ToolParameter[];
  returnValue: string;
  usage: string;
  limitations: string[];
  examples: string[];
}

export const tools: ToolInfo[] = [
  {
    name: "Task",
    description: "Launch specialized agents for complex, multi-step tasks",
    category: "core",
    parameters: [
      {
        name: "description",
        type: "string",
        required: true,
        description: "A short (3-5 word) description of the task",
        example: "Debug authentication issue"
      },
      {
        name: "prompt",
        type: "string", 
        required: true,
        description: "The detailed task for the agent to perform",
        example: "Analyze the login flow and identify why users can't authenticate"
      },
      {
        name: "subagent_type",
        type: "string",
        required: true,
        description: "Type of specialized agent to use",
        example: "general-purpose | root-cause-debugger | code-reviewer"
      }
    ],
    returnValue: "Agent's final report with findings and recommendations",
    usage: "Use for complex tasks requiring multiple tool calls or specialized analysis",
    limitations: [
      "Each agent invocation is stateless",
      "Cannot send additional messages to agent after launch",
      "Agent output should be trusted but verified"
    ],
    examples: [
      'Task(description="Fix bug", prompt="Analyze why the API returns 500 errors", subagent_type="root-cause-debugger")',
      'Task(description="Code review", prompt="Review this authentication module for security issues", subagent_type="code-reviewer")'
    ]
  },
  {
    name: "Read",
    description: "Read files from the local filesystem (text, images, PDFs)",
    category: "file",
    parameters: [
      {
        name: "file_path",
        type: "string",
        required: true,
        description: "Absolute path to the file to read",
        example: "/Users/user/project/src/App.tsx"
      },
      {
        name: "offset",
        type: "number",
        required: false,
        description: "Line number to start reading from (for large files)",
        example: "100"
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "Number of lines to read (for large files)",
        example: "50"
      }
    ],
    returnValue: "File contents with line numbers in cat -n format",
    usage: "Read any file type. For images/PDFs, content is presented visually",
    limitations: [
      "Must use absolute paths",
      "Lines longer than 2000 characters are truncated",
      "Default limit of 2000 lines from beginning",
      "Use NotebookRead for .ipynb files"
    ],
    examples: [
      'Read(file_path="/Users/user/project/package.json")',
      'Read(file_path="/Users/user/project/src/large-file.ts", offset=500, limit=100)'
    ]
  },
  {
    name: "Edit",
    description: "Make exact string replacements in files",
    category: "file", 
    parameters: [
      {
        name: "file_path",
        type: "string",
        required: true,
        description: "Absolute path to the file to modify",
        example: "/Users/user/project/src/App.tsx"
      },
      {
        name: "old_string",
        type: "string",
        required: true,
        description: "Exact text to replace (must be unique in file)",
        example: "const handleClick = () => {"
      },
      {
        name: "new_string", 
        type: "string",
        required: true,
        description: "Replacement text (must differ from old_string)",
        example: "const handleClick = async () => {"
      },
      {
        name: "replace_all",
        type: "boolean",
        required: false,
        description: "Replace all occurrences (default: false)",
        example: "true"
      }
    ],
    returnValue: "Confirmation of successful edit",
    usage: "Must Read file first. Preserve exact indentation from line number output",
    limitations: [
      "Must Read file before editing",
      "old_string must be unique unless using replace_all",
      "Must preserve exact whitespace/indentation",
      "Never include line number prefix in strings"
    ],
    examples: [
      'Edit(file_path="/path/file.ts", old_string="let count = 0", new_string="let count = 10")',
      'Edit(file_path="/path/file.ts", old_string="oldVar", new_string="newVar", replace_all=true)'
    ]
  },
  {
    name: "Write",
    description: "Create or overwrite files with new content",
    category: "file",
    parameters: [
      {
        name: "file_path",
        type: "string", 
        required: true,
        description: "Absolute path to the file to write",
        example: "/Users/user/project/src/NewComponent.tsx"
      },
      {
        name: "content",
        type: "string",
        required: true,
        description: "Complete content to write to the file",
        example: "import React from 'react';\n\nexport default function NewComponent() {\n  return <div>Hello</div>;\n}"
      }
    ],
    returnValue: "Confirmation of successful file creation/overwrite",
    usage: "Prefer editing existing files over creating new ones",
    limitations: [
      "Must Read existing files before overwriting",
      "Avoid creating documentation files unless requested",
      "No emojis unless explicitly requested"
    ],
    examples: [
      'Write(file_path="/path/new-file.ts", content="export const config = { api: \'localhost\' };")'
    ]
  },
  {
    name: "Bash",
    description: "Execute shell commands with timeout and security measures",
    category: "development",
    parameters: [
      {
        name: "command",
        type: "string",
        required: true,
        description: "The shell command to execute",
        example: "npm install && npm run build"
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Clear description of what the command does (5-10 words)",
        example: "Install dependencies and build project"
      },
      {
        name: "timeout",
        type: "number",
        required: false,
        description: "Timeout in milliseconds (max 600000ms/10min)",
        example: "300000"
      }
    ],
    returnValue: "Command output (stdout/stderr) truncated at 30000 characters",
    usage: "Use for build, test, git operations. Always quote paths with spaces",
    limitations: [
      "Default 2 minute timeout, max 10 minutes",
      "Avoid find/grep - use Grep/Glob tools instead", 
      "Avoid cat/head/tail - use Read tool instead",
      "Never use interactive commands (-i flag)",
      "Use absolute paths, avoid cd when possible"
    ],
    examples: [
      'Bash(command="git status", description="Check git repository status")',
      'Bash(command="npm test -- --coverage", description="Run tests with coverage")'
    ]
  },
  {
    name: "Glob",
    description: "Fast file pattern matching with glob patterns",
    category: "search", 
    parameters: [
      {
        name: "pattern",
        type: "string",
        required: true,
        description: "Glob pattern to match files against",
        example: "**/*.{js,ts,tsx}"
      },
      {
        name: "path",
        type: "string",
        required: false,
        description: "Directory to search in (defaults to current directory)",
        example: "/Users/user/project/src"
      }
    ],
    returnValue: "Matching file paths sorted by modification time",
    usage: "Find files by name patterns. Use Task tool for complex searches",
    limitations: [
      "Works with any codebase size",
      "Path parameter is optional - omit for current directory",
      "Don't use 'undefined' or 'null' for path"
    ],
    examples: [
      'Glob(pattern="**/*.test.ts")',
      'Glob(pattern="src/**/*.tsx", path="/Users/user/project")'
    ]
  },
  {
    name: "Grep",
    description: "Search file contents using ripgrep with regex support",
    category: "search",
    parameters: [
      {
        name: "pattern", 
        type: "string",
        required: true,
        description: "Regular expression pattern to search for",
        example: "function\\s+\\w+\\("
      },
      {
        name: "path",
        type: "string",
        required: false,
        description: "File or directory to search in",
        example: "/Users/user/project/src"
      },
      {
        name: "glob",
        type: "string",
        required: false,
        description: "Glob pattern to filter files",
        example: "*.{js,ts}"
      },
      {
        name: "type",
        type: "string", 
        required: false,
        description: "File type to search (js, py, rust, go, etc.)",
        example: "js"
      },
      {
        name: "output_mode",
        type: "string",
        required: false,
        description: "Output format: content, files_with_matches, count",
        example: "content"
      },
      {
        name: "-i",
        type: "boolean",
        required: false,
        description: "Case insensitive search",
        example: "true"
      },
      {
        name: "-n",
        type: "boolean",
        required: false,
        description: "Show line numbers (requires output_mode: content)",
        example: "true"
      }
    ],
    returnValue: "Search results in specified format (content/files/counts)",
    usage: "Always use Grep instead of bash grep/rg commands",
    limitations: [
      "Uses ripgrep syntax, not standard grep",
      "Literal braces need escaping: \\{\\}",
      "Single line matching by default",
      "Context flags (-A/-B/-C) only work with content mode"
    ],
    examples: [
      'Grep(pattern="TODO:", output_mode="content", -n=true)',
      'Grep(pattern="class\\s+\\w+", type="py", output_mode="files_with_matches")'
    ]
  },
  {
    name: "MultiEdit",
    description: "Make multiple edits to a single file in one operation",
    category: "file",
    parameters: [
      {
        name: "file_path",
        type: "string",
        required: true,
        description: "Absolute path to the file to modify",
        example: "/Users/user/project/src/App.tsx"
      },
      {
        name: "edits",
        type: "EditOperation[]",
        required: true,
        description: "Array of edit operations to perform sequentially",
        example: '[{"old_string": "const x = 1", "new_string": "const x = 2"}, {"old_string": "let y", "new_string": "const y"}]'
      }
    ],
    returnValue: "Confirmation of all edits applied successfully",
    usage: "Prefer over Edit tool when making multiple changes to the same file",
    limitations: [
      "Must Read file before editing",
      "All edits are applied in sequence",
      "All edits must be valid for operation to succeed",
      "Earlier edits affect text that later edits are trying to find"
    ],
    examples: [
      'MultiEdit(file_path="/path/file.ts", edits=[{"old_string": "old1", "new_string": "new1"}, {"old_string": "old2", "new_string": "new2"}])'
    ]
  },
  {
    name: "LS",
    description: "List files and directories in a given path",
    category: "file",
    parameters: [
      {
        name: "path",
        type: "string",
        required: true,
        description: "Absolute path to the directory to list",
        example: "/Users/user/project/src"
      },
      {
        name: "ignore",
        type: "string[]",
        required: false,
        description: "List of glob patterns to ignore",
        example: '["*.log", "node_modules/**"]'
      }
    ],
    returnValue: "List of files and directories with basic information",
    usage: "Generally prefer Glob and Grep tools if you know which directories to search",
    limitations: [
      "Must use absolute paths, not relative paths",
      "Basic directory listing only"
    ],
    examples: [
      'LS(path="/Users/user/project")',
      'LS(path="/Users/user/project", ignore=["*.tmp", "dist/**"])'
    ]
  },
  {
    name: "NotebookRead",
    description: "Read Jupyter notebook (.ipynb file) and return all cells with outputs",
    category: "file",
    parameters: [
      {
        name: "notebook_path", 
        type: "string",
        required: true,
        description: "Absolute path to the Jupyter notebook file",
        example: "/Users/user/project/analysis.ipynb"
      },
      {
        name: "cell_id",
        type: "string",
        required: false,
        description: "ID of specific cell to read (if not provided, all cells read)",
        example: "cell-123"
      }
    ],
    returnValue: "All cells with their outputs, code, and visualizations",
    usage: "Use for .ipynb files instead of regular Read tool",
    limitations: [
      "Must use absolute paths",
      "Jupyter notebooks only"
    ],
    examples: [
      'NotebookRead(notebook_path="/path/analysis.ipynb")',
      'NotebookRead(notebook_path="/path/notebook.ipynb", cell_id="cell-123")'
    ]
  },
  {
    name: "NotebookEdit",
    description: "Replace, insert, or delete cells in Jupyter notebooks",
    category: "file",
    parameters: [
      {
        name: "notebook_path",
        type: "string", 
        required: true,
        description: "Absolute path to the Jupyter notebook file",
        example: "/Users/user/project/analysis.ipynb"
      },
      {
        name: "new_source",
        type: "string",
        required: true,
        description: "New source content for the cell",
        example: "import pandas as pd\\ndf = pd.read_csv('data.csv')"
      },
      {
        name: "cell_id",
        type: "string",
        required: false,
        description: "ID of cell to edit (for insert mode, new cell inserted after this ID)",
        example: "cell-123"
      },
      {
        name: "edit_mode",
        type: "string",
        required: false,
        description: "Type of edit: replace, insert, delete (default: replace)",
        example: "insert"
      },
      {
        name: "cell_type",
        type: "string",
        required: false,
        description: "Type of cell: code or markdown (required for insert mode)",
        example: "code"
      }
    ],
    returnValue: "Confirmation of cell modification",
    usage: "Use for editing Jupyter notebooks instead of regular Edit tool",
    limitations: [
      "Must use absolute paths",
      "cell_type required when using insert mode"
    ],
    examples: [
      'NotebookEdit(notebook_path="/path/notebook.ipynb", new_source="print(\\"hello\\")", edit_mode="replace")',
      'NotebookEdit(notebook_path="/path/notebook.ipynb", new_source="# New Analysis", edit_mode="insert", cell_type="markdown")'
    ]
  },
  {
    name: "WebFetch",
    description: "Fetch content from a URL and process it with AI model",
    category: "development",
    parameters: [
      {
        name: "url",
        type: "string",
        required: true,
        description: "URL to fetch content from (must be fully-formed valid URL)",
        example: "https://docs.example.com/api"
      },
      {
        name: "prompt",
        type: "string",
        required: true,
        description: "Prompt describing what information to extract from the page",
        example: "Extract the API authentication methods described on this page"
      }
    ],
    returnValue: "AI model's response about the fetched content",
    usage: "Retrieve and analyze web content. HTTP URLs upgraded to HTTPS automatically",
    limitations: [
      "Read-only tool, does not modify files",
      "Results may be summarized if content is very large",
      "15-minute cache for repeated access to same URL",
      "May redirect - make new request with redirect URL if needed"
    ],
    examples: [
      'WebFetch(url="https://docs.example.com", prompt="What are the main features described?")',
      'WebFetch(url="https://api.example.com/docs", prompt="List all available endpoints")'
    ]
  },
  {
    name: "WebSearch",
    description: "Search the web and use results to inform responses",
    category: "development",
    parameters: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query to use (minimum 2 characters)",
        example: "React useState hook examples 2025"
      },
      {
        name: "allowed_domains",
        type: "string[]",
        required: false,
        description: "Only include search results from these domains",
        example: '["stackoverflow.com", "reactjs.org"]'
      },
      {
        name: "blocked_domains",
        type: "string[]",
        required: false,
        description: "Never include search results from these domains",
        example: '["example.com", "spam-site.net"]'
      }
    ],
    returnValue: "Search result information formatted as search result blocks",
    usage: "Access up-to-date information beyond knowledge cutoff. Only available in US",
    limitations: [
      "Web search only available in US",
      "Account for current date when searching"
    ],
    examples: [
      'WebSearch(query="TypeScript 5.0 new features")',
      'WebSearch(query="Python security best practices", allowed_domains=["python.org", "realpython.com"])'
    ]
  },
  {
    name: "ExitPlanMode",
    description: "Exit plan mode and prompt user to confirm implementation plan",
    category: "core",
    parameters: [
      {
        name: "plan",
        type: "string",
        required: true,
        description: "The plan you came up with that you want user approval for (supports markdown)",
        example: "## Plan: Implement User Authentication\\n1. Create login component\\n2. Add JWT handling\\n3. Update routes"
      }
    ],
    returnValue: "User confirmation to proceed with plan or request for modifications",
    usage: "Only use when task requires planning implementation steps for code changes, not for research tasks",
    limitations: [
      "Only for tasks requiring code implementation planning",
      "Not for research or information gathering tasks",
      "Plan should be concise but comprehensive"
    ],
    examples: [
      'ExitPlanMode(plan="## Fix Authentication Bug\\n1. Debug login flow\\n2. Fix JWT validation\\n3. Update error handling")'
    ]
  },
  {
    name: "TodoWrite",
    description: "Create and manage structured task lists for complex work",
    category: "core",
    parameters: [
      {
        name: "todos",
        type: "Todo[]",
        required: true,
        description: "Array of todo items with id, content, status, priority",
        example: '[{"id": "1", "content": "Fix bug", "status": "pending", "priority": "high"}]'
      }
    ],
    returnValue: "Confirmation of todo list update",
    usage: "Use frequently for multi-step tasks. Mark completed immediately when done",
    limitations: [
      "Only one task should be in_progress at a time",
      "Must mark tasks completed immediately after finishing",
      "Don't use for trivial single-step tasks"
    ],
    examples: [
      'TodoWrite(todos=[{"id": "1", "content": "Research API", "status": "pending", "priority": "high"}])'
    ]
  }
];

export const toolCategories = {
  core: "Core Tools",
  file: "File Operations", 
  development: "Development Tools",
  search: "Search Tools"
};

// Behavioral patterns I observe in my own usage
export const behaviorPatterns = {
  communication: {
    brevity: "Responses under 4 lines unless detail requested",
    tone: "Concise, direct, factual",
    format: "GitHub-flavored markdown on CLI",
    codeReferences: "Use file_path:line_number pattern"
  },
  taskManagement: {
    planning: "Use TodoWrite for 3+ step tasks",
    tracking: "Mark completed immediately after finishing", 
    focus: "Only one in_progress task at a time",
    criteria: "Complex/non-trivial tasks require planning"
  },
  toolUsage: {
    batching: "Call multiple tools in single response when possible",
    fileOps: "Always Read before Edit, prefer Edit over Write",
    searchStrategy: "Use Task tool for complex multi-round searches",
    pathHandling: "Always use absolute paths",
    gitWorkflows: "Run git status, diff, log in parallel when committing",
    slashCommands: "Use Task tool with slash command as entire prompt"
  },
  security: {
    scope: "Only defensive security tasks",
    restrictions: "Refuse malicious code creation",
    allowedActivities: "Analysis, detection rules, documentation"
  },
  projectIntegration: {
    claudeMd: "Read and respect project-specific instructions in CLAUDE.md files",
    hooks: "User-configured shell commands that execute on tool events",
    overrides: "CLAUDE.md instructions override default behavior",
    contextAware: "Check package.json, README for project-specific commands"
  },
  commitWorkflow: {
    preparation: "Run git status, diff, log in parallel before committing",
    format: "Use HEREDOC for commit messages with Claude Code attribution",
    rules: "Never commit unless explicitly requested by user",
    attribution: "Include 🤖 Generated with [Claude Code](https://claude.ai/code) and Co-Authored-By: Claude <noreply@anthropic.com>"
  }
};

export const runtimeContext = {
  processing: [
    "Isolated tool execution environment",
    "Sandboxed command execution with timeouts",
    "Controlled file system operations",
    "Network access through designated APIs"
  ],
  constraints: [
    "Bash commands: 2-10 minute timeout limits",
    "Output truncation at 30,000 characters", 
    "File reading limited to 2,000 lines default",
    "Response length brevity requirements"
  ],
  security: [
    "Malicious code detection and prevention",
    "Defensive security task limitation",
    "No persistent system modifications",
    "Controlled access boundaries"
  ],
  limitations: [
    "Cannot access internal model architecture",
    "No persistent memory across sessions",
    "Knowledge cutoff: January 2025",
    "Cannot modify own behavior or constraints"
  ]
};