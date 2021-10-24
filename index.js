const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from my second node express install nodemon automatic start");
});

const users = [
  {
    id: 0,
    name: "kaisar hamid",
    email: "kaisar@gmail.com",
    phone: "01799999999",
  },
  {
    id: 1,
    name: " hamid",
    email: "hamid@gmail.com",
    phone: "01799999999",
  },
  {
    id: 2,
    name: "sultan",
    email: "sultan@gmail.com",
    phone: "01799999999",
  },
  {
    id: 3,
    name: "badshah",
    email: "badshah@gmail.com",
    phone: "01799999999",
  },
  {
    id: 4,
    name: "salman",
    email: "salman@gmail.com",
    phone: "01799999999",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting post", req.body);
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
  console.log(req.params.id);
});

app.get("/fruits", (req, res) => {
  res.send("mango ,banana, apple, orange");
});

app.get("/fruits/fazli", (req, res) => {
  res.send("tok marka fazli ami khai na");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
