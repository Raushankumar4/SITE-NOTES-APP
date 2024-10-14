import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Redux/store/store.js";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import SignIn from "./components/Auth/SignIn.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import ResetPassword from "./components/Auth/ResetPassword.jsx";
import CreateSem from "./components/Teacher/CreateSemester/CreateSem.jsx";
import Profile from "./components/Profile/Profile.jsx";
import SemesterPapers from "./components/AllNotes/SemesterPapers.jsx";
import UpdateNotes from "./components/Teacher/CreateSemester/UpdateNotes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "signUp", element: <SignUp /> },
      { path: "signIn", element: <SignIn /> },
      { path: "teacherLogin", element: <SignIn /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
      { path: "reset-password/:token", element: <ResetPassword /> },
      { path: "profile", element: <Profile /> },
      { path: "create", element: <CreateSem /> },
      { path: "semesterPaper", element: <SemesterPapers /> },
      { path: "updatePaper/:id", element: <UpdateNotes /> },
    ],
  },
]);

const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster />
    </PersistGate>
  </Provider>
);
