# Contributing to ChitKoKo Portfolio

Thank you for your interest in contributing to this project! This guide will help you set up the development environment and understand the project structure.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.18.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v10.8.2 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Firebase Account** (for backend services) - [Sign up](https://firebase.google.com/)

## 🚀 Getting Started

### 1. Fork and Clone the Repository

```bash
# Fork the repository on GitHub first, then clone your fork
git clone https://github.com/YOUR_USERNAME/chitkoko.git

# Navigate to the project directory
cd chitkoko/chitkoko
```

### 2. Install Dependencies

```bash
# Install all required packages
npm install
```

This will install:
- Vue.js 3.5.22 (Frontend framework)
- Vite 5.0.0 (Build tool)
- Tailwind CSS 3.4.19 (Styling)
- Vitest 2.1.8 (Testing framework)
- Firebase 11.1.0 (Backend services)

### 3. Configure Firebase

#### Get Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Click the gear icon (⚙️) → **Project settings**
4. Scroll to **Your apps** section
5. Click **Add app** → Select web (</>)
6. Register your app and copy the configuration

#### Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

**⚠️ Important**: Never commit `.env` to version control. It's already in `.gitignore`.

### 4. Run the Development Server

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`

## 🧪 Testing

### Run All Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test -- --run
```

### Generate Test Coverage Report

```bash
# Run tests with coverage
npm run test:coverage
```

Coverage report will be generated in the `coverage/` directory.

### Test Structure

- `src/__tests__/App.test.js` - Component tests for main App.vue
- `src/__tests__/component.test.js` - Integration tests
- `src/__tests__/gitignore.test.js` - Security tests for .gitignore configuration

## 🏗️ Project Structure

```
chitkoko/
├── src/
│   ├── App.vue              # Main portfolio component
│   ├── main.js              # Application entry point
│   ├── assets/              # Static assets
│   │   ├── style.css        # Tailwind CSS imports
│   │   ├── profile.jpg      # Profile image
│   │   └── ChitKoKoResume_web (1).pdf  # Resume PDF
│   ├── firebase/
│   │   └── firebaseConfig.js  # Firebase initialization
│   └── __tests__/           # Test files
├── public/                  # Public static files
├── .env.example            # Environment variables template
├── .env                    # Your local environment (not in git)
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── vitest.config.js        # Testing configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

## 🎨 Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (utility-first)
- **Testing**: Vitest + @vue/test-utils + happy-dom
- **Backend**: Firebase (Firestore, Storage, Auth, Analytics)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:5173 |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## 📝 Development Guidelines

### Code Style

- Use Vue 3 Composition API syntax
- Follow Tailwind CSS utility-first approach
- Write descriptive component names and comments
- Keep components simple and focused

### Styling with Tailwind

This project uses **Tailwind CSS v3** utility classes. Do not write custom CSS unless absolutely necessary.

**Good:**
```vue
<div class="flex items-center justify-center bg-gray-900 text-white">
```

**Avoid:**
```vue
<div class="custom-container">
<style>
.custom-container { display: flex; ... }
</style>
```

### Writing Tests

- Write tests for new features
- Ensure all tests pass before committing
- Aim for >80% code coverage
- Use descriptive test names

**Example:**
```javascript
it('should display navigation links', () => {
  const wrapper = mount(App);
  expect(wrapper.find('nav').exists()).toBe(true);
});
```

## 🚢 Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` directory.

## 🔥 Deploy to Firebase Hosting

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

Make sure you have Firebase CLI installed:
```bash
npm install -g firebase-tools
firebase login
```

## 🐛 Common Issues

### Issue: Vite command not found
**Solution**: Run `npm install` to ensure all dependencies are installed.

### Issue: Tests failing with module errors
**Solution**: Ensure you're using Node.js v20+ and happy-dom is installed.

### Issue: Firebase not working
**Solution**: Check that your `.env` file exists and has valid Firebase credentials.

### Issue: Styles not applying
**Solution**: Ensure PostCSS and Tailwind CSS are properly installed. Run:
```bash
npm install -D tailwindcss@3.4.19 postcss autoprefixer
```

## 🤝 Contribution Workflow

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch: `git checkout -b feature/your-feature-name`
4. **Make** your changes
5. **Test** your changes: `npm test`
6. **Commit** your changes: `git commit -m "Add feature: description"`
7. **Push** to your fork: `git push origin feature/your-feature-name`
8. **Create** a Pull Request on GitHub

## 📄 License

This project is open source and available for anyone to fork and modify.

## 📧 Contact

If you have questions or need help:
- Create an issue on GitHub
- Contact: chitkoko7214084@github.com

## 🙏 Acknowledgments

Thank you for contributing to this project! Your efforts help make this portfolio better for everyone.

---

**Happy Coding! 🎉**
