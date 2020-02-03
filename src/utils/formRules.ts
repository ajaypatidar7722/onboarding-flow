/**
 * This file contains standard rules for all ANTD form inputs for this application
 */

export const firstName = [
  { required: true, message: "Please enter your first name!" },
];

export const lastName = [
  { required: true, message: "Please enter your last name!" },
];

export const email = [
  { required: true, message: "Please enter your email!" },
  {
    type: "email",
    message: "Please enter valid E-mail!",
  },
];

export const phoneNumber = [
  {
    required: true,
    message: "Please enter your phone number!",
  },
  {
    pattern: /[2-9]{2}\d{8}/,
    message:
      "Phone number must have exact 10 digits and must not start from 1 or 0!",
  },
];

export const collegeName = [
  { required: true, message: "Please enter your college name!" },
];

export const lastCompany = [
  { required: true, message: "Please enter your previous company name!" },
];

export const yearsOfExperience = [
  { required: true, message: "Please enter your previous company name!" },
];

export const shortResponse = [
  { required: true, message: "Please proivde a response." },
];
