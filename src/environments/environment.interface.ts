export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  measurementId: string;
  appId: string;
}

export interface Environment {
  production: boolean;
  firebaseConfig: FirebaseConfig;
}
