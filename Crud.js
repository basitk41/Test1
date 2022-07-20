import { getData, setData, removeData } from "./localStorage.js";
let ID;

window.deleteUser = (id) => {
  let users = getData("users") || [];
  users = users.filter((user) => user.id !== id);
  setData("users", users);
  setUsers(users);
};

window.addUser = () => {
  let users = getData("users") || [];
  let name = document.getElementById("name");
  if (ID) {
    let user = users.find((user) => user.id === ID);
    user.name = name.value;
    document.getElementById("submit").innerHTML = "Submit";
    name.value = "";
    ID = null;
  } else {
    users.push({ id: Date.now(), name: name.value });
    name.value = "";
  }
  setData("users", users);
  setUsers(users);
};

window.editUser = (id) => {
  let users = getData("users") || [];
  ID = id;
  let name = document.getElementById("name");
  document.getElementById("submit").innerHTML = "Update";
  let user = users.find((user) => user.id === id);
  name.value = user.name;
};
window.login = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    setData("token", "hdsgfiywgfjbejhsb");
    main();
  } else {
    alert("Invalid username or password");
  }
};
window.logout = () => {
  removeData("token");
  main();
};

const setUsers = (users) => {
  const mappedUsers = users.map(
    (user) => `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>
    <button class="btn btn-info" onclick='editUser(${user.id})'>Edit</button> 
    <button class="btn btn-danger" onclick='deleteUser(${user.id})'>Delete</button>
    </td>
    </tr>`
  );
  document.getElementById("data").innerHTML = mappedUsers.join("");
};

const main = () => {
  const users = getData("users") || [];
  const token = getData("token") || "";
  setUsers(users);
  if (token) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    document.getElementById("login").style.display = "block";
    document.getElementById("main-content").style.display = "none";
  }
};

main();
