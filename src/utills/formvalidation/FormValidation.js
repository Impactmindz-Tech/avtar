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

export const editProfileValidation = yup.object({
  firstName: yup.string().required("password is requird"),
  lastName: yup.string().required("password is requird"),
  mobileNumber: yup.string().required("password is requird"),
  dob: yup.string().required("password is requird"),
  country: yup.string().required("password is requird"),
  city: yup.string().required("password is requird"),
});
