// index.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

// Setup file storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

app.use(express.static("public"));

app.post("/upload", upload.single("note"), (req, res) => {
  res.send("Note uploaded successfully!");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
