const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
    res.json({ message: "react-express" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
