import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

// Firebase configuration
// Đọc từ environment variables hoặc sử dụng giá trị mặc định
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Kiểm tra xem Firebase đã được cấu hình chưa
const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

// Khởi tạo Firebase
let app: FirebaseApp | undefined;
let database: Database | undefined;

try {
  if (isFirebaseConfigured) {
    app = initializeApp(firebaseConfig);
    database = getDatabase(app);
    console.log('✅ Firebase đã được khởi tạo thành công!');
  } else {
    console.warn('⚠️ Firebase chưa được cấu hình. Vui lòng xem file FIREBASE_SETUP.md để setup.');
  }
} catch (error) {
  console.error('❌ Lỗi khi khởi tạo Firebase:', error);
}

export { database, isFirebaseConfigured };
export default app;
