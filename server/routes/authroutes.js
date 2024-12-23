import { Router } from "express";
import {
  changePassword,
  forgotPassword,
  loginAsAdmin,
  loginUser,
  logOutUser,
  register,
  resetPassword,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { upload } from "../middleware/multer.js";

const router = Router();

// register user
router.route("/register").post(upload.single("profile"), register);
// login user
router.route("/students/login").post(loginUser);
// login as admin
router.route("/teachers/login").post(loginAsAdmin);
// logout
router.route("/logout").get(isAuthenticated, logOutUser);
// change password
router.route("/change-password/:id").put(isAuthenticated, changePassword);

// forgot password
router.route("/forgotPassword").post(forgotPassword);
// reset password
router.route("/resetPassword").post(resetPassword);

export default router;
