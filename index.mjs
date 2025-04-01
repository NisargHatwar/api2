import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api", (req, res) => {
  console.log("Post request received")
  console.log(req.body);
  res.send("Received data successfully!");
});

setInterval(() => {
  console.log("Hello World");
},5000)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
