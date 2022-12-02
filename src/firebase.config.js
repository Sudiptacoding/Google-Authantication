import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpF2FtvgugCQ5kVxh6t-gos3GQ_v6KPI8",
  authDomain: "sudipta-project-db390.firebaseapp.com",
  projectId: "sudipta-project-db390",
  storageBucket: "sudipta-project-db390.appspot.com",
  messagingSenderId: "586264166574",
  appId: "1:586264166574:web:4bd3fc79186b60e92ead3f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);















//   export default firebaseConfig;