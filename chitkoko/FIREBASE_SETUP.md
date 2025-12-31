# Firebase Setup Instructions

## Getting Your Firebase API Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click the gear icon (⚙️) → **Project settings**
4. Scroll down to **Your apps** section
5. Click **Add app** and select the web icon (</>)
6. Register your app and copy the configuration

## Setting Up Environment Variables

1. Copy `.env.example` to create a new `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-actual-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
   VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Important**: Never commit `.env` to version control. It's already in `.gitignore`

## Using Firebase in Your App

Import Firebase services in your components:

```javascript
import { db, storage, auth } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

// Example: Fetch data from Firestore
const querySnapshot = await getDocs(collection(db, 'your-collection'));
querySnapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});
```

## Firebase Services Available

- **Firestore** (`db`) - NoSQL database
- **Storage** (`storage`) - File storage
- **Auth** (`auth`) - Authentication
- **Analytics** (`analytics`) - User analytics

## Deployment

When deploying to Firebase Hosting:

```bash
npm run build
firebase deploy
```

Make sure to set environment variables in your hosting provider's dashboard for production.
