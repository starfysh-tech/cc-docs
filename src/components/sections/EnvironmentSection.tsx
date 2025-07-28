import { Server, Cpu, Clock, Shield } from 'lucide-react';

export default function EnvironmentSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-terminal-text mb-2">Runtime Environment</h1>
        <p className="text-terminal-muted">
          Claude Code's operational environment, processing constraints, and runtime boundaries
        </p>
      </div>

      {/* Processing Environment */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Cpu className="w-4 h-4 text-terminal-success" />
          <span className="font-mono text-sm text-terminal-text ml-3">Processing Environment</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Tool Execution</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <div>• Isolated execution environment for tools</div>
                  <div>• Bash commands run with timeout constraints</div>
                  <div>• File operations with security boundaries</div>
                  <div>• Network access through controlled APIs</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Session Management</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <div>• Stateless tool invocations</div>
                  <div>• Context maintained within conversation</div>
                  <div>• No persistent file system access</div>
                  <div>• Memory constraints per operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Constraints */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Clock className="w-4 h-4 text-terminal-warning" />
          <span className="font-mono text-sm text-terminal-text ml-3">Operational Constraints</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Time Limits</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <div>• Bash commands: 2 minute default, 10 minute maximum</div>
                  <div>• Tool operations: Variable timeouts</div>
                  <div>• Session length: Conversation-based</div>
                  <div>• Processing deadlines enforced</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Output Limits</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <div>• Command output: 30,000 character limit</div>
                  <div>• File reading: 2,000 line default limit</div>
                  <div>• Line length: 2,000 character truncation</div>
                  <div>• Response length: Brevity constraints</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Boundaries */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Shield className="w-4 h-4 text-terminal-error" />
          <span className="font-mono text-sm text-terminal-text ml-3">Security Boundaries</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Access Controls</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <div>• Sandboxed execution environment</div>
                  <div>• No persistent system modification</div>
                  <div>• Controlled network access</div>
                  <div>• File system access limitations</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Content Filtering</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <div>• Malicious code detection</div>
                  <div>• Security policy enforcement</div>
                  <div>• Defensive task limitation</div>
                  <div>• Output sanitization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Runtime */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Server className="w-4 h-4 text-terminal-accent" />
          <span className="font-mono text-sm text-terminal-text ml-3">Model Runtime</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="code-block">
              <div className="text-terminal-accent text-sm mb-1">Processing Model</div>
              <div className="text-xs text-terminal-muted">Sonnet 4 (claude-sonnet-4-20250514)</div>
              <div className="text-xs text-terminal-muted">Multi-modal capabilities</div>
            </div>
            <div className="code-block">
              <div className="text-terminal-warning text-sm mb-1">Knowledge Base</div>
              <div className="text-xs text-terminal-muted">Training data cutoff</div>
              <div className="text-xs text-terminal-muted">January 2025 limitation</div>
            </div>
            <div className="code-block">
              <div className="text-terminal-success text-sm mb-1">Capabilities</div>
              <div className="text-xs text-terminal-muted">Text, code, image analysis</div>
              <div className="text-xs text-terminal-muted">Tool orchestration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Runtime Limitations */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Runtime Limitations</span>
        </div>
        <div className="p-4">
          <div className="code-block">
            <div className="text-sm text-terminal-muted space-y-2">
              <div><span className="text-terminal-warning">Processing Constraints:</span></div>
              <ul className="space-y-1 ml-4">
                <li>• Cannot access internal model architecture details</li>
                <li>• No persistent memory across separate sessions</li>
                <li>• Limited to available tool set for operations</li>
                <li>• Cannot modify own behavior or constraints</li>
                <li>• Bound by security and safety policies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-terminal-surface border border-terminal-accent rounded-lg p-4">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-terminal-accent rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <h4 className="font-medium text-terminal-accent">Runtime Context</h4>
            <p className="text-sm text-terminal-muted mt-1">
              This documentation focuses on Claude Code's own operational environment and constraints, 
              not on the user environments where it operates. The runtime is designed for secure, 
              controlled execution of development tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}