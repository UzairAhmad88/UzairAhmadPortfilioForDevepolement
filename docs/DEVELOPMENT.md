# Local Development Guide

## Prerequisites
- **Node.js**: `v20.x` or `v22.x` / `v24.x`
- **npm**: `v10.x` or higher

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git
   cd UzairAhmadPortfilioForDevepolement
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The site will be available locally at `http://localhost:4321`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Astro development server with hot module reloading. |
| `npm run build` | Builds the production static bundle into `dist/`. |
| `npm run preview` | Locally serves the built `dist/` production folder. |
| `npm run check` | Executes Astro and TypeScript diagnostic type checking. |
| `npm run lint` | Runs ESLint across `.astro`, `.ts`, and `.js` files. |
| `npm run format` | Runs Prettier to format the codebase. |
| `npm test` | Runs the automated Node test suite. |

## Development Workflow & Guidelines
1. **Never commit hardcoded secrets or production API keys**.
2. **Always run `npm run check` and `npm run build` before pushing commits**.
3. **Follow Conventional Commits**:
   - `feat:` New features / components
   - `fix:` Bug fixes or corrections
   - `refactor:` Code restructuring without visual/functional changes
   - `docs:` Documentation updates
   - `style:` CSS / styling improvements
   - `perf:` Performance optimizations
   - `test:` Test additions or modifications
   - `chore:` Build scripts or dependency updates
