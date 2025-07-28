import { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Settings, AlertCircle } from 'lucide-react';
import { ToolInfo } from '@/data/tools';

interface ToolCardProps {
  tool: ToolInfo;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [expanded, setExpanded] = useState(false);

  const categoryIcons = {
    core: <Settings className="w-4 h-4" />,
    file: <Code className="w-4 h-4" />,
    development: <Code className="w-4 h-4" />,
    search: <Code className="w-4 h-4" />
  };

  return (
    <div className="terminal-window mb-4">
      <div 
        className="terminal-header cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2 flex-1">
          {categoryIcons[tool.category]}
          <span className="font-mono font-medium text-terminal-accent">{tool.name}</span>
          <span className="text-terminal-muted">-</span>
          <span className="text-sm text-terminal-muted">{tool.description}</span>
        </div>
        {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </div>
      
      {expanded && (
        <div className="p-4 space-y-4">
          {/* Parameters */}
          <div>
            <h4 className="font-medium text-terminal-text mb-2">Parameters</h4>
            <div className="space-y-2">
              {tool.parameters.map((param, index) => (
                <div key={index} className="code-block">
                  <div className="flex items-start gap-2">
                    <span className="text-terminal-accent font-mono">{param.name}</span>
                    <span className="text-terminal-muted">:</span>
                    <span className="text-terminal-warning">{param.type}</span>
                    {param.required && (
                      <span className="text-terminal-error text-xs">*required</span>
                    )}
                  </div>
                  <p className="text-sm text-terminal-muted mt-1">{param.description}</p>
                  {param.example && (
                    <div className="mt-2 text-xs text-terminal-text bg-terminal-bg rounded px-2 py-1">
                      Example: <code>{param.example}</code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Return Value */}
          <div>
            <h4 className="font-medium text-terminal-text mb-2">Returns</h4>
            <div className="code-block">
              <code className="text-terminal-success">{tool.returnValue}</code>
            </div>
          </div>

          {/* Usage */}
          <div>
            <h4 className="font-medium text-terminal-text mb-2">Usage</h4>
            <p className="text-terminal-muted text-sm">{tool.usage}</p>
          </div>

          {/* Examples */}
          <div>
            <h4 className="font-medium text-terminal-text mb-2">Examples</h4>
            <div className="space-y-2">
              {tool.examples.map((example, index) => (
                <div key={index} className="code-block">
                  <code className="text-terminal-text text-xs">{example}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          {tool.limitations.length > 0 && (
            <div>
              <h4 className="font-medium text-terminal-warning mb-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                Limitations
              </h4>
              <ul className="space-y-1">
                {tool.limitations.map((limitation, index) => (
                  <li key={index} className="text-sm text-terminal-muted flex items-start gap-2">
                    <span className="text-terminal-warning">•</span>
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}