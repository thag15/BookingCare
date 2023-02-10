/** @format */
require("dotenv").config();
const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";
let sendSimpleEmail = async (dataSend) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Booking Care 👻" <thag15072@gmail.com>',
    to: dataSend.receivers,
    subject: "Thông tin đặt lịch khám bệnh",
    html: getBodyHTML(dataSend),
  });
};

let getBodyHTML = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3>Xin chào ${dataSend.patientName}</h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám online trên booking care</p>
    <span>Thông tin đặt lịch khám:</span>
    <span>thời gian ${dataSend.time}</span>
    <p>bác sĩ ${dataSend.doctorName}</p>
    <p>Néu cac thong tin trén la ding sy that, vui long click vao dudng link bén dudi
    </p>
    <a href=${dataSend.redirectLink} target=_blank>Click here</a>
    <p>xin cảm ơn</p>
    `;
  }
  if (dataSend.language === "en") {
    result = `
    <h3>Hello ${dataSend.patientName}</h3>
    <p>You get this email for booking online examination on Booking Care</p>
    <span>Examination information:</span>
    <span>Time ${dataSend.time}</span>
    <p>Doctor ${dataSend.doctorName}</p>
    <p>If the above information is true, please select the link below</p>
    <a href=${dataSend.redirectLink} target=_blank>Click here</a>
    <p>Thank you </p>
    `;
  }
  return result;
};
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};
