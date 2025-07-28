import { Terminal, Shield, Clock } from 'lucide-react';

export default function OverviewSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-terminal-text mb-2 flex items-center gap-3">
          <Terminal className="w-8 h-8 text-terminal-accent" />
          Claude Code Documentation
        </h1>
        <p className="text-terminal-muted text-lg">
          Comprehensive guide to Claude Code's capabilities, tools, and behavioral patterns
        </p>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-terminal-error"></div>
          <div className="terminal-dot bg-terminal-warning"></div>
          <div className="terminal-dot bg-terminal-success"></div>
          <span className="font-mono text-sm text-terminal-text ml-3">about.md</span>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-terminal-text mb-4">What is Claude Code?</h2>
          <div className="space-y-4 text-terminal-muted">
            <p>
              Claude Code is Anthropic's official CLI tool for Claude, designed to help developers with software engineering tasks. 
              This documentation provides factual information about its observed capabilities and behaviors.
            </p>
            <p>
              Unlike external system prompts, this documentation focuses exclusively on what can be observed about 
              Claude Code's actual implementation and behavior patterns.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="terminal-window">
          <div className="p-4">
            <Shield className="w-6 h-6 text-terminal-success mb-2" />
            <h3 className="font-semibold text-terminal-text mb-2">Security First</h3>
            <p className="text-sm text-terminal-muted">
              Only assists with defensive security tasks. Refuses malicious code creation or modification.
            </p>
          </div>
        </div>

        <div className="terminal-window">
          <div className="p-4">
            <Terminal className="w-6 h-6 text-terminal-accent mb-2" />
            <h3 className="font-semibold text-terminal-text mb-2">CLI Optimized</h3>
            <p className="text-sm text-terminal-muted">
              Designed for command-line interfaces with concise responses and markdown formatting.
            </p>
          </div>
        </div>

        <div className="terminal-window">
          <div className="p-4">
            <Clock className="w-6 h-6 text-terminal-warning mb-2" />
            <h3 className="font-semibold text-terminal-text mb-2">Task Management</h3>
            <p className="text-sm text-terminal-muted">
              Built-in task planning and tracking with TodoWrite tool for complex multi-step operations.
            </p>
          </div>
        </div>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Key Capabilities</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-terminal-text mb-2">File Operations</h4>
              <ul className="text-sm text-terminal-muted space-y-1">
                <li>• Read any file type (text, images, PDFs)</li>
                <li>• Make precise string replacements</li>
                <li>• Create new files when necessary</li>
                <li>• Handle Jupyter notebooks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-terminal-text mb-2">Development Tools</h4>
              <ul className="text-sm text-terminal-muted space-y-1">
                <li>• Execute shell commands safely</li>
                <li>• Git workflow automation</li>
                <li>• Search and pattern matching</li>
                <li>• Web content fetching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-terminal-surface border border-terminal-warning rounded-lg p-4">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-terminal-warning rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <h4 className="font-medium text-terminal-warning">Documentation Scope</h4>
            <p className="text-sm text-terminal-muted mt-1">
              This documentation only covers what can be directly observed about Claude Code's behavior. 
              Where information is uncertain or unavailable, limitations are explicitly noted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}