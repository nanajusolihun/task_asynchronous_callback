let getUrl = "https://jsonplaceholder.typicode.com/users";

function getData (url, clb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      let hasil = xhr.responseText;
      return clb(JSON.parse(hasil));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

let listData = document.getElementById("list-data-users");
getData(getUrl, (data) => {
  let hasil = "";

  data.forEach((element) =>{
    hasil += `
    <tr>
    <th scope="row">${element.id}</th>
    <td>${element.name}</td>
    <td>${element.username}</td>
    <td>${element.email}</td>
    <td>${element.address.street}, ${element.address.suite}, ${element.address.city}</td>
    <td>${element.company.name}</td>
  </tr>
  `
  });
  listData.innerHTML = hasil
});