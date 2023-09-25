// // Xử lý sự kiện ẩn hiện form modal
// const modalContainerRegister = document.querySelector(".js-modal-container_register");
// const modalRegister = document.querySelector(".js-register");

// const userRegister = document.querySelector(".user-register");
// const jsCloseRegister = document.querySelector(".js-close_register");


// // Xử lý sự kiện register
// function showFormRegister() {
//   modalRegister.classList.add("open");
// }
// userRegister.addEventListener("click", showFormRegister);
// function removeOpenRegister() {
//   modalRegister.classList.remove("open");
// }
// modalRegister.addEventListener("click", removeOpenRegister);

// modalContainerRegister.addEventListener("click", function (event) {
//   event.stopPropagation();
// });
// // Xử lý sự kiện nhán nút close để gỡ class open
// jsCloseLogin.addEventListener("click", function () {
//   modalLogin.classList.remove("open");
// });
// jsCloseRegister.addEventListener("click", function () {
//   modalRegister.classList.remove("open");
// });


// //  form register
// var username = document.querySelector("#username");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");
// var confirmPassword = document.querySelector("#confirm-password");
// var form = document.querySelector("form");
// // Hàm check error
// function showError(input, message) {
//   let parent = input.parentElement;
//   let small = parent.querySelector("small");
//   parent.classList.add("error");
//   small.innerText = message;
// }
// //  Hàm check success
// function showSuccess(input) {
//   let parent = input.parentElement;
//   let small = parent.querySelector("small");
//   parent.classList.remove("error");
//   small.innerText = "";
// }

// // Hàm check trường hợp 1 trong các trường để trống
// function checkEmptyError(listInput) {
//   let isEmptyError = false;
//   listInput.forEach((input) => {
//     input.value = input.value.trim();
//     if (!input.value) {
//       isEmptyError = true;
//       showError(input, "Không được để trống trường này");
//     } else {
//       showSuccess(input);
//     }
//     return isEmptyError;
//   });
// }

// //  Hàm check Emil phải có @ . com
// function checkEmailError(input) {
//   const regexEmail =
//     /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/gm;
//   input.value = input.value.trim();
//   if (!input.value) {
//     showError(input, "Không được để trống trường này");
//     return true;
//   }
//   if (regexEmail.test(input.value)) {
//     showSuccess(input);
//   } else {
//     showError(input, "Email không hợp lệ");
//   }
//   return regexEmail.test(input.value);
// }

// // Hàm check password có trùng khớp hay không
// function checkMatchPassword(passwordInput, cfPasswordInput) {
//   if (passwordInput.value !== cfPasswordInput.value) {
//     showError(cfPasswordInput, "Mật khẩu không trùng khớp");
//     return true;
//   }
//   return false;
// }

// //  Hàm check length kí tự của username & password
// function checkLengthError(input, min, max) {
//   input.value = input.value.trim();
//   if (!input.value) {
//     showError(input, "Không được để trống trường này");
//     return true;
//   }
//   if (input.value.length < min) {
//     showError(input, `Phải có ít nhất ${min} ký tự`);
//     return true;
//   }
//   if (input.value.length > max) {
//     showError(input, `Không được vượt quá ${max} ký tự`);
//     return true;
//   }
//   return false;
// }
// //  hàm loại bỏ hành vi submit mặc định của form
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let isEmptyError = checkEmptyError([
//     username,
//     email,
//     password,
//     confirmPassword,
//   ]);
//   let isEmailError = checkEmailError(email);
//   let isUsernameLengthError = checkLengthError(username, 3, 20);
//   let isPasswordLengthError = checkLengthError(password, 6, 16);
//   let isCheckMatchPassword = checkMatchPassword(password, confirmPassword);
//   //  check xem nếu 1 trong các trường hợp trống thì không cho làm gì tiếp thep
//   if (
//     !isEmptyError &&
//     !isEmailError &&
//     !isUsernameLengthError &&
//     !isPasswordLengthError &&
//     !isCheckMatchPassword
//   ) {
//     let newData = [];
//     const currentUser = JSON.parse(localStorage.getItem("user"));
//     const user = currentUser.filter((item) => item.email === emailLogin.value);
//     if (currentUser) {
//       newData = [
//         ...currentUser,
//         {
//           username: username.value,
//           email: email.value,
//           password: password.value,
//         }
//       ]
//     }
//     newData.push({
//       username: username.value,
//       email: email.value,
//       password: password.value,
//     })
//     if (user) {
//       alert("Email đã được đăng ký")
//     } else {
//       localStorage.setItem("user", JSON.stringify(newData));
//       alert("Đăng ký thành công!")
//     }
//   } else {
//     // show gi gì đấy
//   }
// });
