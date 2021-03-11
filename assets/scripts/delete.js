function showData() {
  let list = document.getElementById("data-items");

  fetch("https://sheltered-garden-25664.herokuapp.com/show-data/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}
7;

function createtr(blog) {
  const tableitem = `<tr>
      <td>${blog.id}</td>
      <td>${blog.header}</td>
      <td>${blog.description}</td>
      <td>${blog.image}</td>
      <td>${blog.body}</td>

      <td><a href="https://sheltered-garden-25664.herokuapp.com/delete-data/${blog.id}/">DELETE</a>
      </td>
      </tr>`;

  let list = document.getElementById("data-items");
  console.log("hello");
  list.innerHTML += tableitem;
}

showData();
