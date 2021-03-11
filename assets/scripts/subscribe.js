function subscribeUser() {
  let form = document.getElementById("subscribeForm");
  let inputs = form.getElementsByTagName("input");
  const user = {
    name: inputs[0].value,
    email: inputs[1].value,
  };
  console.log(user);
  fetch("https://sheltered-garden-25664.herokuapp.com/add-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((e) => alert(e));
}
