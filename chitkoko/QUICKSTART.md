# Quick Start Guide 🚀

Get your portfolio up and running in 5 minutes!

## Step 1: Clone and Install

```bash
# Fork the repo on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/chitkoko.git
cd chitkoko/chitkoko
npm install
```

## Step 2: Get Firebase Credentials

1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Create/select project → Project Settings (⚙️)
3. Scroll to "Your apps" → Add app (web icon)
4. Copy the config values

## Step 3: Configure Environment

```bash
# Copy the template
cp .env.example .env

# Edit .env and paste your Firebase credentials
nano .env  # or use any text editor
```

Your `.env` should look like:
```env
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=yourproject.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=yourproject
VITE_FIREBASE_STORAGE_BUCKET=yourproject.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
VITE_FIREBASE_MEASUREMENT_ID=G-ABCD1234
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` 🎉

## Step 5: Customize Your Portfolio

Edit `src/App.vue` to add your:
- Name and bio
- Skills
- Education
- Work experience
- Projects
- Contact links
- Profile image (`src/assets/profile.jpg`)
- Resume PDF (`src/assets/resume.pdf`)

## Testing Your Changes

```bash
# Run tests
npm test -- --run

# Check coverage
npm run test:coverage
```

## Deploy to Firebase

```bash
# Build
npm run build

# Install Firebase CLI (if needed)
npm install -g firebase-tools

# Login and deploy
firebase login
firebase init hosting
firebase deploy
```

Your site will be live at `https://yourproject.web.app`! 🌐

## Need More Help?

- 📖 Full setup guide: [CONTRIBUTING.md](./CONTRIBUTING.md)
- 🔥 Firebase setup: [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
- 📝 Main README: [README.md](./README.md)

## Common Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm test             # Run tests
npm run test:coverage # Test coverage report
```

That's it! You're ready to build your portfolio. Happy coding! ✨
