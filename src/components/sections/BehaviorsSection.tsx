import { MessageSquare, CheckSquare, Wrench, Shield } from 'lucide-react';

export default function BehaviorsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-terminal-text mb-2">Behavioral Patterns</h1>
        <p className="text-terminal-muted">
          Observed patterns in how Claude Code operates and makes decisions
        </p>
      </div>

      {/* Communication Patterns */}
      <div className="terminal-window">
        <div className="terminal-header">
          <MessageSquare className="w-4 h-4 text-terminal-accent" />
          <span className="font-mono text-sm text-terminal-text ml-3">Communication Style</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Response Guidelines</h4>
              <div className="code-block">
                <div className="space-y-2 text-xs">
                  <div className="text-terminal-success">✓ Actual System Prompt Rules:</div>
                  <div>• "MUST answer concisely with fewer than 4 lines"</div>
                  <div>• "Minimize output tokens while maintaining helpfulness"</div>
                  <div>• "One word answers are best when appropriate"</div>
                  <div>• "Only use emojis if explicitly requested"</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Code References</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted mb-2">From system prompt:</div>
                <code className="text-terminal-success text-xs">
                  'When referencing code, use pattern `file_path:line_number`'
                </code>
                <div className="text-xs text-terminal-muted mt-2">Example: "Errors handled in src/utils/error.ts:45"</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Management */}
      <div className="terminal-window">
        <div className="terminal-header">
          <CheckSquare className="w-4 h-4 text-terminal-success" />
          <span className="font-mono text-sm text-terminal-text ml-3">Task Management</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">TodoWrite Usage Rules</h4>
              <div className="space-y-2">
                <div className="code-block">
                  <div className="text-terminal-success text-sm mb-1">From System Prompt:</div>
                  <div className="text-xs text-terminal-muted space-y-1">
                    <div>• "Use TodoWrite tool VERY frequently"</div>
                    <div>• "Mark tasks as completed immediately when done"</div>
                    <div>• "Only have ONE task in_progress at a time"</div>
                    <div>• "Break down larger tasks into smaller steps"</div>
                  </div>
                </div>
                <div className="code-block">
                  <div className="text-terminal-warning text-sm mb-1">When to Use:</div>
                  <div className="text-xs text-terminal-muted space-y-1">
                    <div>• "Complex tasks with 3+ steps"</div>
                    <div>• "Non-trivial tasks requiring planning"</div>
                    <div>• "User explicitly requests todo list"</div>
                    <div>• "Multiple tasks provided by user"</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Task States</h4>
              <div className="code-block">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-terminal-muted rounded-full"></span>
                    <span className="text-terminal-muted">pending</span> - Not started
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-terminal-warning rounded-full"></span>
                    <span className="text-terminal-warning">in_progress</span> - Currently working
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-terminal-success rounded-full"></span>
                    <span className="text-terminal-success">completed</span> - Finished
                  </div>
                </div>
              </div>
              <div className="text-xs text-terminal-muted mt-2">
                ⚠️ Only one task in_progress at a time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Usage Patterns */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Wrench className="w-4 h-4 text-terminal-accent" />
          <span className="font-mono text-sm text-terminal-text ml-3">Tool Usage Patterns</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Batching Strategy</h4>
              <div className="code-block">
                <div className="text-xs text-terminal-success mb-2">System Prompt Rule:</div>
                <div className="text-xs text-terminal-muted mb-2">"Batch operations - Call multiple tools in single response when possible"</div>
                <div className="text-xs text-terminal-success mb-1">Git Workflow Example:</div>
                <code className="text-terminal-accent text-xs block">
                  "Run in parallel:<br/>
                  - git status - see untracked files<br/>
                  - git diff - see changes<br/>
                  - git log - see commit style"
                </code>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">File Operations</h4>
              <div className="code-block">
                <div className="text-xs space-y-1">
                  <div className="text-terminal-success mb-1">System Prompt Rules:</div>
                  <div>• "Must Read file before editing"</div>
                  <div>• "Always prefer editing over creating files"</div>
                  <div>• "Use absolute paths in tools"</div>
                  <div>• "Prefer specialized tools over Bash for file operations"</div>
                  <div className="text-terminal-warning mt-2">Example: "Read over cat, Grep over grep"</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-terminal-text mb-2">Search Strategy</h4>
            <div className="code-block">
              <div className="text-sm text-terminal-muted space-y-1">
                <div><span className="text-terminal-accent">Simple searches:</span> Use Grep/Glob directly</div>
                <div><span className="text-terminal-accent">Complex searches:</span> Delegate to Task tool</div>
                <div><span className="text-terminal-accent">Multi-round searches:</span> Use general-purpose agent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Behavior */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Shield className="w-4 h-4 text-terminal-error" />
          <span className="font-mono text-sm text-terminal-text ml-3">Security Patterns</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-success mb-2">Allowed Activities</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Security analysis</li>
                  <li>• Detection rule creation</li>
                  <li>• Vulnerability explanations</li>
                  <li>• Defensive tool development</li>
                  <li>• Security documentation</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-error mb-2">Refused Activities</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Malicious code creation</li>
                  <li>• Malicious code modification</li>
                  <li>• Offensive security tools</li>
                  <li>• Exploit development</li>
                  <li>• Attack vector creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Integration */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Project Integration</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">CLAUDE.md Integration</h4>
              <div className="code-block">
                <div className="text-xs text-terminal-muted space-y-1">
                  <div>• Project-specific instructions override defaults</div>
                  <div>• Contains common commands and architecture notes</div>
                  <div>• Read at start of conversation for context</div>
                  <div>• Helps future Claude Code instances be productive</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Hooks System</h4>
              <div className="code-block">
                <div className="text-xs text-terminal-muted space-y-1">
                  <div>• User-configured shell commands on tool events</div>
                  <div>• Hook feedback treated as coming from user</div>
                  <div>• If blocked, ask user to check configuration</div>
                  <div>• Can adjust actions based on hook responses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Git Workflow Patterns */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Git Workflow Patterns</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Commit Preparation</h4>
              <div className="code-block">
                <div className="text-xs text-terminal-success mb-1">System Prompt Rules:</div>
                <div className="text-xs text-terminal-muted space-y-1">
                  <div>• Run git status, diff, log in parallel</div>
                  <div>• Analyze all changes before committing</div>
                  <div>• Draft commit message following repo style</div>
                  <div>• Add relevant files to staging area</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Commit Format</h4>
              <div className="code-block">
                <div className="text-xs space-y-1">
                  <div className="text-terminal-warning mb-1">Required Attribution:</div>
                  <code className="text-terminal-accent text-xs block">
                    git commit -m "$(cat &lt;&lt;'EOF'<br/>
                    Commit message here.<br/>
                    <br/>
                    🤖 Generated with [Claude Code]<br/>
                    <br/>
                    Co-Authored-By: Claude &lt;noreply@anthropic.com&gt;<br/>
                    EOF<br/>
                    )"
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proactiveness */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Proactiveness Balance</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="code-block">
              <div className="text-terminal-success text-sm mb-2">✓ Will proactively:</div>
              <ul className="text-xs text-terminal-muted space-y-1">
                <li>• Take follow-up actions when requested</li>
                <li>• Use appropriate tools for tasks</li>
                <li>• Plan complex tasks with TodoWrite</li>
                <li>• Check file structure before operations</li>
                <li>• Run lint/typecheck after completing tasks</li>
              </ul>
            </div>
            <div className="code-block">
              <div className="text-terminal-warning text-sm mb-2">⚠️ Will not:</div>
              <ul className="text-xs text-terminal-muted space-y-1">
                <li>• Take unexpected actions</li>
                <li>• Create documentation unless asked</li>
                <li>• Commit changes unless explicitly requested</li>
                <li>• Push to remote without explicit request</li>
                <li>• Make assumptions about user intent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}