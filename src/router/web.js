/** @format */

import express from "express";
import homecontroller from "../controller/homeController";
import usercontroller from "../controller/userController";
import doctorController from "../controller/doctorController";
import patientController from "../controller/patientController";
import specialtyController from "../controller/specialtyController";
let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homecontroller.getHomePage);
  router.get("/crud", homecontroller.getCRUD);
  router.post("/post-crud", homecontroller.postCRUD);
  router.get("/get-crud", homecontroller.displayGetCRUD);
  router.get("/edit-crud", homecontroller.getEditCRUD);
  router.post("/put-crud", homecontroller.putCRUD);
  router.get("/delete-crud", homecontroller.deleteCRUD);
  //
  router.post("/api/login", usercontroller.handleLogin);
  router.get("/api/get-all-users", usercontroller.handleGetAllUser);
  router.post("/api/create-new-user", usercontroller.handleCreateNewUser);
  router.put("/api/edit-new-user", usercontroller.handleEditNewUser);
  router.delete("/api/delete-new-user", usercontroller.handleDeleteNewUser);
  router.get("/api/allCodes", usercontroller.getAllCode);
  //
  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);
  router.get("/api/get-all-doctors", doctorController.getAllDoctors);
  router.post("/api/save-infor-doctors", doctorController.postInforDoctor);
  router.get(
    "/api/get-detail-doctors-by-id",
    doctorController.getDetailDoctorsById
  );
  // bulk schedule
  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);

  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.getScheduleByDate
  );
  router.get(
    "/api/get-extrain-info-doctor-byId",
    doctorController.getExtraInfoDoctorById
  );
  router.get(
    "/api/get-profile-doctor-byId",
    doctorController.getProfileDoctorById
  );

  //
  router.post(
    "/api/patient-book-appointment",
    patientController.postBookAppointment
  );
  //
  router.post(
    "/api/verify-book-appointment",
    patientController.postVerifyBookAppointment
  );
  // specialty
  router.post("/api/create-new-specialty", specialtyController.createSpecialty);

  return app.use("/", router);
};

module.exports = initWebRouter;
