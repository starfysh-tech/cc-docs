import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search tools, parameters, or examples..." }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-terminal-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-terminal-surface border border-terminal-border rounded-lg pl-10 pr-4 py-2 text-terminal-text placeholder-terminal-muted focus:outline-none focus:border-terminal-accent font-mono text-sm"
      />
    </div>
  );
}