import { useState } from 'react';
import Navigation from './components/Navigation';
import OverviewSection from './components/sections/OverviewSection';
import ToolsSection from './components/sections/ToolsSection';
import BehaviorsSection from './components/sections/BehaviorsSection';
import SystemPromptSection from './components/sections/SystemPromptSection';
import EnvironmentSection from './components/sections/EnvironmentSection';
import LimitationsSection from './components/sections/LimitationsSection';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'tools':
        return <ToolsSection />;
      case 'behaviors':
        return <BehaviorsSection />;
      case 'systemprompt':
        return <SystemPromptSection />;
      case 'environment':
        return <EnvironmentSection />;
      case 'limitations':
        return <LimitationsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg flex">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;