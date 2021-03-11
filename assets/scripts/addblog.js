function createBlogPost() {
  const ta = document.getElementsByTagName("textarea");
  const inputs = document.getElementsByTagName("input");

  let blogPost = {
    header: inputs[0].value,
    description: ta[0].value,
    image: inputs[1].value,
    body: inputs[2].value,
  };

  console.log(blogPost);

  fetch("http://127.0.0.1:5000/add-data/", {
    method: "POST",
    body: JSON.stringify(blogPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.msg);
      alert("Blog has been created");
      document.getElementById("create-form").reset();
      let show = document.getElementById("show-data");
      show.innerHTML +=
        '<button ><a href="http://127.0.0.1:5000/show-data/" target="_blank" >Show data</a></button>';
    });
}
