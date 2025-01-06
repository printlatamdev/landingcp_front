const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar POST /send-email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    // Responde con éxito (puedes integrar aquí nodemailer u otra funcionalidad)
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
