import { AlertTriangle, XCircle, HelpCircle, Clock } from 'lucide-react';

export default function LimitationsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-terminal-text mb-2">Limitations & Constraints</h1>
        <p className="text-terminal-muted">
          Known limitations and areas where Claude Code cannot provide assistance
        </p>
      </div>

      <div className="bg-terminal-surface border border-terminal-warning rounded-lg p-4">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-terminal-warning mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-terminal-warning">Documentation Scope</h3>
            <p className="text-sm text-terminal-muted mt-1">
              This documentation only covers observable behaviors. Internal implementation details, 
              complete tool schemas, and undocumented features are not included.
            </p>
          </div>
        </div>
      </div>

      {/* Security Constraints */}
      <div className="terminal-window">
        <div className="terminal-header">
          <XCircle className="w-4 h-4 text-terminal-error" />
          <span className="font-mono text-sm text-terminal-text ml-3">Security Restrictions</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-error mb-2">Refused Activities</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Creating malicious code</li>
                  <li>• Modifying code for malicious purposes</li>
                  <li>• Offensive security tool development</li>
                  <li>• Exploit creation or enhancement</li>
                  <li>• Attack vector development</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-success mb-2">Allowed Security Work</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Security analysis and auditing</li>
                  <li>• Detection rule creation</li>
                  <li>• Vulnerability explanations</li>
                  <li>• Defensive tool development</li>
                  <li>• Security documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Limitations */}
      <div className="terminal-window">
        <div className="terminal-header">
          <HelpCircle className="w-4 h-4 text-terminal-warning" />
          <span className="font-mono text-sm text-terminal-text ml-3">Technical Constraints</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Tool Limitations</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Bash commands: 10 minute max timeout</li>
                  <li>• File output: Truncated at 30,000 characters</li>
                  <li>• Read tool: 2,000 line default limit</li>
                  <li>• Line length: Truncated at 2,000 characters</li>
                  <li>• No interactive commands (git -i, etc.)</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Access Restrictions</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Cannot access internal model specifics</li>
                  <li>• Cannot guarantee complete tool schemas</li>
                  <li>• No network access without WebFetch/WebSearch</li>
                  <li>• Cannot modify git configuration</li>
                  <li>• Cannot push to remote without explicit request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Knowledge Limitations */}
      <div className="terminal-window">
        <div className="terminal-header">
          <Clock className="w-4 h-4 text-terminal-warning" />
          <span className="font-mono text-sm text-terminal-text ml-3">Knowledge Constraints</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Temporal Limitations</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-2">
                  <div>
                    <span className="text-terminal-warning">Knowledge Cutoff:</span> January 2025
                  </div>
                  <div>May lack information about:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Recent library updates</li>
                    <li>• New tool releases</li>
                    <li>• Latest best practices</li>
                    <li>• Current framework versions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Uncertainty Areas</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <li>• Complete tool parameter schemas</li>
                  <li>• All possible error conditions</li>
                  <li>• Internal behavior mechanisms</li>
                  <li>• Undocumented features</li>
                  <li>• Future capability changes</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Behavioral Constraints */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Behavioral Boundaries</span>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Proactiveness Limits</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Won't create documentation unless requested</li>
                  <li>• Won't commit changes without explicit ask</li>
                  <li>• Won't make assumptions about user intent</li>
                  <li>• Won't push to remote repositories</li>
                  <li>• Won't modify git configuration</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Communication Constraints</h4>
              <div className="code-block">
                <ul className="text-sm text-terminal-muted space-y-1">
                  <li>• Responses under 4 lines unless asked</li>
                  <li>• No emojis unless explicitly requested</li>
                  <li>• Factual tone without excessive praise</li>
                  <li>• Cannot generate or guess URLs arbitrarily</li>
                  <li>• CLI-optimized formatting only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Conditions */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Common Error Conditions</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Tool Failures</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-2">
                  <div><span className="text-terminal-error">Edit failures:</span> Non-unique old_string</div>
                  <div><span className="text-terminal-error">Bash timeouts:</span> Commands exceeding limits</div>
                  <div><span className="text-terminal-error">File access:</span> Permission or path issues</div>
                  <div><span className="text-terminal-error">Hook blocks:</span> User-configured restrictions</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-terminal-text mb-2">Recovery Strategies</h4>
              <div className="code-block">
                <div className="text-sm text-terminal-muted space-y-1">
                  <li>• Provide larger context for unique matches</li>
                  <li>• Use replace_all for global changes</li>
                  <li>• Break complex commands into smaller parts</li>
                  <li>• Ask user to check hook configuration</li>
                  <li>• Verify file paths and permissions</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Missing Information Notice */}
      <div className="bg-terminal-surface border border-terminal-accent rounded-lg p-4">
        <div className="flex items-start gap-2">
          <HelpCircle className="w-5 h-5 text-terminal-accent mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-terminal-accent">When Information is Missing</h3>
            <p className="text-sm text-terminal-muted mt-1">
              Rather than guessing or making assumptions, Claude Code will explicitly state when information 
              is uncertain, unavailable, or outside its knowledge scope. This ensures accuracy over completeness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}