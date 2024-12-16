const express = require("express");
const path = require("path");
const externalRoutes = require("./routes/externalRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static front-end files
app.use(express.static(path.join(__dirname, "public")));

// Use external routes
app.use("/api1", externalRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
