const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(".")); // index.html-г root-аас уншуулна

const DATA_FILE = "./data.json";

// өгөгдөл унших
app.get("/api/data", (req, res) => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({
      users: {
        "ankhaa": { code: "1111", assigned: ["Өөх мах"] },
        "amgaa": { code: "2222", assigned: ["Газ"] },
        "admin": { code: "0000" }
      },
      categories: ["Өөх мах", "Газ", "Аяга", "Ус ундаа"],
      products: [
        { name: "Гадар өөх", category: "Өөх мах", price: 11000, initialStock: 2000 },
        { name: "Шингэн хий", category: "Газ", price: 50000, initialStock: 0 },
        { name: "Шилэн аяга", category: "Аяга", price: 3500, initialStock: 0 },
        { name: "Кока кола", category: "Ус ундаа", price: 2500, initialStock: 0 }
      ],
      customers: ["Туяа", "Энхээ", "Бат"],
      transactions: []
    }, null, 2));
  }
  res.json(JSON.parse(fs.readFileSync(DATA_FILE, "utf8")));
});

// өгөгдөл хадгалах
app.post("/api/save", (req, res) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`✅ Server ажиллаж байна: http://localhost:${PORT}`));
