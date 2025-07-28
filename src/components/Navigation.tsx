import { Terminal, Wrench, FileText, Brain, AlertTriangle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: Terminal },
  { id: 'tools', label: 'Tools Reference', icon: Wrench },
  { id: 'behaviors', label: 'Behaviors', icon: Brain },
  { id: 'systemprompt', label: 'System Prompt', icon: FileText },
  { id: 'environment', label: 'Runtime', icon: Wrench },
  { id: 'limitations', label: 'Limitations', icon: AlertTriangle },
];

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="w-64 bg-terminal-surface border-r border-terminal-border p-4">
      <div className="terminal-header mb-6">
        <div className="terminal-dot bg-terminal-error"></div>
        <div className="terminal-dot bg-terminal-warning"></div>
        <div className="terminal-dot bg-terminal-success"></div>
        <span className="font-mono text-sm text-terminal-text ml-3">claude-code-docs</span>
      </div>
      
      <div className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon className="w-4 h-4 inline-block mr-2" />
              {item.label}
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-3 bg-terminal-bg rounded-md">
        <div className="text-xs text-terminal-muted">
          <div className="font-mono font-medium text-terminal-text mb-1">Claude Code</div>
          <div>Model: Sonnet 4</div>
          <div>Cutoff: Jan 2025</div>
        </div>
      </div>
    </nav>
  );
}