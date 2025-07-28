import { useState, useMemo } from 'react';
import { tools, toolCategories } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import SearchBar from '@/components/SearchBar';

export default function ToolsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = searchTerm === '' || 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.parameters.some(param => 
          param.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          param.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        tool.examples.some(example => 
          example.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = Object.entries(toolCategories);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-terminal-text mb-2">Tools Reference</h1>
        <p className="text-terminal-muted">
          Complete reference for all available Claude Code tools with parameters, examples, and limitations
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search tools, parameters, or examples..."
        />
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-md text-sm font-mono transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-terminal-accent text-terminal-bg' 
                : 'bg-terminal-surface text-terminal-muted hover:text-terminal-text'
            }`}
          >
            All Tools
          </button>
          {categories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-3 py-1 rounded-md text-sm font-mono transition-colors ${
                selectedCategory === key 
                  ? 'bg-terminal-accent text-terminal-bg' 
                  : 'bg-terminal-surface text-terminal-muted hover:text-terminal-text'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-terminal-muted">
        Showing {filteredTools.length} of {tools.length} tools
        {searchTerm && ` matching "${searchTerm}"`}
        {selectedCategory !== 'all' && ` in ${toolCategories[selectedCategory as keyof typeof toolCategories]}`}
      </div>

      {/* Tools List */}
      <div className="space-y-4">
        {filteredTools.length === 0 ? (
          <div className="terminal-window">
            <div className="p-8 text-center">
              <div className="text-terminal-muted mb-2">No tools found matching your criteria</div>
              <div className="text-sm text-terminal-muted">
                Try adjusting your search term or category filter
              </div>
            </div>
          </div>
        ) : (
          filteredTools.map(tool => (
            <ToolCard key={tool.name} tool={tool} />
          ))
        )}
      </div>

      {/* Usage Tips */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="font-mono text-sm text-terminal-text">Usage Tips</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-terminal-success mb-2">Best Practices</h4>
              <ul className="text-sm text-terminal-muted space-y-1">
                <li>• Always use absolute file paths</li>
                <li>• Read files before editing them</li>
                <li>• Batch tool calls when possible</li>
                <li>• Use specialized tools over Bash when available</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-terminal-warning mb-2">Common Pitfalls</h4>
              <ul className="text-sm text-terminal-muted space-y-1">
                <li>• Don't include line numbers in Edit strings</li>
                <li>• Ensure old_string is unique for Edit</li>
                <li>• Quote paths with spaces in Bash commands</li>
                <li>• Avoid interactive Bash commands</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}