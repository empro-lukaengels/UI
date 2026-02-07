# Empro UI

A modern web application built with Angular and Nx, featuring a beautiful landing page with responsive design.

## 🚀 Overview

This is an Nx monorepo workspace containing a sophisticated Angular application with a professionally designed landing page. The project leverages modern web technologies and best practices to deliver a fast, secure, and visually appealing user experience.

## 📋 Features

- **Modern Angular Architecture** - Built with the latest Angular standalone components
- **Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **SCSS Styling** - Custom SCSS with variables, animations, and clean architecture
- **Nx Monorepo** - Scalable workspace with powerful build and development tools
- **End-to-End Testing** - Cypress integration for comprehensive E2E testing
- **TypeScript** - Full type safety throughout the application
- **ESLint & Prettier** - Code quality and formatting enforcement

## 🏗️ Project Structure

```
ui/
├── apps/
│   ├── empro-ui/              # Main Angular application
│   │   ├── src/
│   │   │   ├── app/           # Application components
│   │   │   │   ├── app.ts     # Root component
│   │   │   │   ├── app.html   # Landing page template
│   │   │   │   └── app.scss   # Application styles
│   │   │   └── index.html     # Entry HTML file
│   │   └── project.json       # Project configuration
│   └── empro-ui-e2e/          # E2E tests with Cypress
├── nx.json                    # Nx workspace configuration
├── package.json               # Dependencies and scripts
└── tsconfig.base.json         # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: Angular (Latest)
- **Build Tool**: Nx
- **Styling**: SCSS
- **Testing**: Jest (Unit) + Cypress (E2E)
- **Language**: TypeScript
- **Package Manager**: Yarn

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Yarn** (v1.22 or higher)
- **Git**

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ui
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

### Development Server

Run the development server:

```bash
yarn nx serve empro-ui
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Build

Build the project for production:

```bash
yarn nx build empro-ui
```

The build artifacts will be stored in the `dist/` directory, optimized for production deployment.

### Testing

#### Unit Tests

Run unit tests with Jest:

```bash
yarn nx test empro-ui
```

#### E2E Tests

Run end-to-end tests with Cypress:

```bash
yarn nx e2e empro-ui-e2e
```

### Linting

Check code quality with ESLint:

```bash
yarn nx lint empro-ui
```

## 🎨 Landing Page Sections

The application features a comprehensive landing page with the following sections:

1. **Header** - Sticky navigation with branding and menu links
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **Features Section** - Showcases key product features with icon cards
4. **About Section** - Company information with impressive statistics
5. **Footer** - Contact information and quick links

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Available Nx Commands

```bash
# Serve the application
nx serve empro-ui

# Build for production
nx build empro-ui --configuration=production

# Run tests
nx test empro-ui

# Run E2E tests
nx e2e empro-ui-e2e

# Lint the code
nx lint empro-ui

# View dependency graph
nx graph
```

## 📊 Project Graph

Visualize the project dependencies:

```bash
yarn nx graph
```

This will open an interactive graph showing how different parts of the workspace are connected.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses:

- **ESLint** for code quality
- **Prettier** for code formatting
- **TypeScript** strict mode

Please ensure your code passes all linting checks before submitting a PR.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Nx](https://nx.dev)
- Powered by [Angular](https://angular.dev)
- Styled with SCSS

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using Angular and Nx**
