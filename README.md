# Claude Code Documentation

Interactive documentation app showcasing Claude Code's complete capabilities, tools, and behavioral patterns.

**🌐 [Live Demo](https://starfysh-tech.github.io/cc-docs/)**

## Overview

This React application provides comprehensive documentation of Claude Code based on direct observation of its actual implementation, rather than external system prompts. It serves as a reference for developers to understand how to work effectively with Claude Code.

## Features

- **Complete Tool Reference** - All available tools with parameters, examples, and limitations
- **Behavioral Patterns** - Communication style, task management, and decision-making patterns
- **Environment Context** - Runtime information and integration details
- **Search & Filter** - Quick access to specific tools and capabilities
- **Terminal UI** - CLI-inspired design matching Claude Code's context

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Documentation Sections

### Tools Reference
Complete documentation of all Claude Code tools including:
- Task (agent launcher)
- File operations (Read, Edit, Write)
- Development tools (Bash, Git workflows)
- Search tools (Glob, Grep)
- Task management (TodoWrite)

### Behavioral Patterns
Observed patterns in:
- Communication style and brevity
- Task planning and management
- Tool usage strategies
- Security boundaries

### Environment Context
Information Claude Code has access to:
- Working directory and git status
- Platform and OS details
- CLAUDE.md integration
- Hooks system

### Limitations
Clear documentation of:
- Security restrictions (defensive tasks only)
- Technical constraints (timeouts, file limits)
- Knowledge boundaries (January 2025 cutoff)
- Areas where assistance is refused

## Accuracy Note

This documentation focuses exclusively on factually observable Claude Code behaviors. Where information is uncertain or unavailable, limitations are explicitly noted rather than guessed.

## Deployment

The app is automatically deployed to GitHub Pages when you run:

```bash
npm run deploy
```

This command builds the application and pushes it to the `gh-pages` branch, making it available at: https://starfysh-tech.github.io/cc-docs/

## Technology Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- Lucide React for icons
- GitHub Pages for hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Deploy with `npm run deploy` to test on GitHub Pages
6. Submit a pull request
