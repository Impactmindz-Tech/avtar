import * as yup from "yup";

// const emailValidation = yup
//     .string()
//     .test("email", "Invalid email", function (value) {
//         if (!value) return true;
//         return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
//     })
//     .required("Email is required");

const emailValidation = yup
  .string()
  .test("email", "Invalid email", function (value) {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  })
  .required("Email is required");

const checkboxValidation = yup.boolean().oneOf([true], "You must agree to the Privacy Policy and Terms of Service");

export const registrationValidation = yup.object({
  email: yup.string().required("Email is required"),
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  terms: yup.boolean().oneOf([true], "You must agree to the Privacy Policy and Terms of Services").required("You must agree to the Privacy Policy and Terms of Services"),
});

export const loginValidation = yup.object({
  userName: yup.string().required("password is requird"),
  password: yup.string().required("password is requird"),
});

export const forgetPassword = yup.object({
  email: emailValidation,
});

export const conformPassword = yup.object({
  newPassword: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const editProfileValidation = yup.object({
  firstName: yup.string().required("password is requird"),
  lastName: yup.string().required("password is requird"),
  mobileNumber: yup.string().required("password is requird"),
  dob: yup.string().required("password is requird"),
  country: yup.string().required("password is requird"),
  city: yup.string().required("password is requird"),
});

export const addExperinceValidation = yup.object({
  AmountsperMinute: yup.string().required("Amountsper Minute is requird"),
  notesForUser: yup.string().required("Notes For User is requird"),
  ExperienceName: yup.string().required("Experience Name is requird"),
});

export const createOfferValidation = yup.object({
  Title: yup.string().required("Title is requird"),
  price: yup.string().required("price is requird"),
  Minutes: yup.string().required("Minutes is requird"),
  ZipCode: yup.string().required("ZipCode is requird"),
  Notes: yup.string().required("Notes is requird"),
});
