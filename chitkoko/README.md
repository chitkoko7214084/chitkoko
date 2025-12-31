# ChitKoKo Portfolio

A modern, responsive portfolio website built with Vue.js, Vite, and Tailwind CSS. Features a clean single-page design showcasing skills, education, work experience, and projects.

## ✨ Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔥 Firebase integration (Firestore, Storage, Auth, Analytics)
- ⚡ Lightning-fast with Vite
- 🧪 Comprehensive test suite with 30+ tests
- 🔒 Secure environment variable configuration
- 📄 Resume PDF download

## 🚀 Quick Start

### Prerequisites

- Node.js v20.18.0 or higher
- npm v10.8.2 or higher
- Firebase account (for backend services)

### Installation

```bash
# Clone the repository
git clone https://github.com/chitkoko7214084/chitkoko.git
cd chitkoko/chitkoko

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Firebase credentials

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## 📚 Documentation

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Complete setup guide for contributors
- **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** - Firebase configuration instructions

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3.5.22
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.4.19
- **Testing**: Vitest 2.1.8 + @vue/test-utils
- **Backend**: Firebase 11.1.0

## 🧪 Testing

```bash
# Run all tests
npm test -- --run

# Run with coverage
npm run test:coverage
```

All 30 tests passing ✅ with coverage for:
- Component rendering
- Navigation functionality
- Content verification
- Security (gitignore configuration)

## 📦 Project Structure

```
src/
├── App.vue              # Main portfolio component
├── main.js              # App entry point
├── assets/              # Images, resume, styles
├── firebase/            # Firebase configuration
└── __tests__/           # Test files
```

## 🤝 Contributing

Want to fork this portfolio? Check out **[CONTRIBUTING.md](./CONTRIBUTING.md)** for:
- Complete development environment setup
- Step-by-step Firebase configuration
- Code style guidelines
- Testing practices
- Contribution workflow

## 🔐 Security

- Environment variables stored in `.env` (not committed)
- Firebase credentials secured via environment variables
- `.gitignore` properly configured for sensitive files

## 📄 License

Open source - free to fork and modify for your own portfolio!

## 📧 Contact

**Chit Ko Ko**
- GitHub: [@chitkoko7214084](https://github.com/chitkoko7214084)
- Portfolio: [Live Site](https://chitkoko.web.app) _(update with your URL)_

---

Made with ❤️ using Vue.js and Vite
