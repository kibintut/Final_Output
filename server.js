const express = require("express");
const path = require("path");
const externalRoutes = require("./routes/externalRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static front-end files
app.use(express.static(path.join(__dirname, "public")));
app.use("/", externalRoutes);

// Example API route
// app.get("/api/message", (req, res) => {
//   res.json({ message: "Hello from the back-end!" });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
