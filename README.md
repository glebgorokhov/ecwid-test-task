<img src="./public/android-chrome-192x192.png" width="60" />

# Ecwid Test Task - Vue.js E-commerce Application

A modern, full-featured e-commerce application built with Vue.js 3, TypeScript, and Tailwind CSS. This project demonstrates advanced frontend development practices while implementing a complete shopping experience with product browsing, cart management, and checkout flow.

## Getting Started

### Prerequisites

- **Node.js** >= 22.17.0
- **pnpm** >= 10.4.0

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/glebgorokhov/ecwid-test-task.git
   cd ecwid-test-task
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   VITE_API_BASE_URL="https://app.ecwid.com/api/v3"
   VITE_STORE_ID="108362264"
   VITE_API_TOKEN="public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs"
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `pnpm dev`        | Start development server with hot reload   |
| `pnpm build`      | Build for production with type checking    |
| `pnpm build-only` | Build for production without type checking |
| `pnpm preview`    | Preview production build locally           |
| `pnpm type-check` | Run TypeScript type checking               |
| `pnpm lint`       | Run ESLint with auto-fix                   |
| `pnpm format`     | Format code with Prettier                  |

## License

This project is created as a test task for Ecwid and is not intended for commercial use.
