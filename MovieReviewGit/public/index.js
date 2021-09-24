// const btnWithdraw = document.querySelector("#btnWithdraw");
// const etUsername = document.querySelector("#etUsername");
// const etAmount = document.querySelector("#etAmount");
// const etBalance = document.querySelector("#etBalance");
// const sectionWithdraw = document.querySelector("#sectionWithdraw");
// const sectionBalance = document.querySelector("#sectionBalance");
// const cs = document.querySelector("#cs");



// btnWithdraw.onclick = () => {
//   fetch("http://localhost:5000/withdraw", {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       username: etUsername.value,
//       amount: Number(etAmount.value),
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.status === "SUCCESS") {
//         etBalance.value = `Rs. ${data.user.balance}`;
//         sectionWithdraw.style.display = "none";
//         sectionBalance.style.display = "block";
//       } else {
//         sectionWithdraw.style.display = "none";
//         cs.style.display ="block";
//       }
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
