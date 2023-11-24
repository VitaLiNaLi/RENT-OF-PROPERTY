console.log("hello");

const formReg = document.querySelector("#formRegistration");
const formAuth = document.querySelector("#formAuthorization");


if (formReg) {
  formReg.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, sName, tel, email, password } = event.target;
    const response = await fetch("/api/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        sName: sName.value,
        tel: tel.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      window.location.assign("/");
    } else {
      document.querySelector(".errLogin").innerHTML=data.message
    }
  });
}



if (formAuth) {
  formAuth.addEventListener("submit", async (event) => {
    event.preventDefault()
    const { email, password, confirmPassword } = event.target;
    const response = await fetch("/api/auth/authorization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }),
    });
    const data = await response.json();
    console.log(data,'daaaaaaaata')
    if (data.success) {
        window.location.assign("/");
    }else {
        document.querySelector(".errLogin").innerHTML=data.message;
      }
  });
}
