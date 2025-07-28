# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive React documentation application showcasing Claude Code's complete capabilities, tools, and behavioral patterns. Built with TypeScript, Tailwind CSS, and Vite.

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Run linting (ESLint with TypeScript)
npm run lint

# Preview production build
npm run preview
```

## Architecture

React 18 SPA with TypeScript organized into:

- **Components**: Modular UI components in `src/components/`
  - `Navigation.tsx`: Main navigation sidebar
  - `SearchBar.tsx`: Tool search functionality
  - `ToolCard.tsx`: Individual tool documentation display
  - `sections/`: Content sections (Overview, Tools, Behaviors, etc.)

- **Data Layer**: `src/data/tools.ts` contains comprehensive tool definitions with parameters, examples, and limitations

- **Styling**: Tailwind CSS with terminal-inspired theme and custom color palette

- **Build System**: Vite with React plugin, TypeScript support, and path aliases (`@` → `/src`)

## Key Files

- `src/App.tsx`: Main application component with section routing
- `src/data/tools.ts`: Complete Claude Code tool reference data
- `tailwind.config.js`: Custom terminal theme configuration
- `package.json`: Development scripts and dependencies