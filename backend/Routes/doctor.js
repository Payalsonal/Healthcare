import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorProfile
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

router.use("/:doctorID/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["Doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["Doctor"]), deleteDoctor);
router.get('/profile/me', authenticate, restrict(['Doctor']), getDoctorProfile)


export default router;
