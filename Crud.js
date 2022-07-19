let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
];
let id = 3;
let ID;

window.deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
  setUsers();
};

window.addUser = () => {
  let name = document.getElementById("name");
  if (ID) {
    let user = users.find((user) => user.id === ID);
    user.name = name.value;
    document.getElementById("submit").innerHTML = "Submit";
    name.value = "";
    ID = null;
  } else {
    users.push({ id, name: name.value });
    id++;
    name.value = "";
  }

  setUsers();
};

window.editUser = (id) => {
  ID = id;
  let name = document.getElementById("name");
  document.getElementById("submit").innerHTML = "Update";
  let user = users.find((user) => user.id === id);
  name.value = user.name;
};

const setUsers = () => {
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

setUsers();
