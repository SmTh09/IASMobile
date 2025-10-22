// ==========================================
// FIREBASE CONFIGURATION
// ==========================================
// Get these values from: Firebase Console → Project Settings → General → Your apps
// https://console.firebase.google.com/

export const firebaseConfig = {
  apiKey: "AIzaSyCXbTqr4roYoRxziT216QXIC05VfBFMXfg",
  authDomain: "mobileias.firebaseapp.com",
  projectId: "mobileias",
  storageBucket: "mobileias.firebasestorage.app",
  messagingSenderId: "666551926969",
  appId: "1:666551926969:web:62ca334c159d0205cbdb68",
  measurementId: "G-LNH4DSWLES"
};

// Check if Firebase is properly configured
export const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey !== "YOUR_API_KEY_HERE" && 
         firebaseConfig.projectId !== "YOUR_PROJECT_ID" &&
         !firebaseConfig.apiKey.includes("YOUR_") &&
         !firebaseConfig.projectId.includes("YOUR_");
};

// ==========================================
// INSTRUCTIONS:
// ==========================================
// 1. Go to https://console.firebase.google.com/
// 2. Select your project (or create a new one)
// 3. Click the gear icon → Project Settings
// 4. Scroll down to "Your apps" section
// 5. If no app exists, click "Add app" and select Web (</>) 
// 6. Copy the config values and paste them above
// 7. Enable Firestore: Build → Firestore Database → Create database
// 8. Start in "test mode" for development (remember to secure it later!)
