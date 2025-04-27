import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/message", async (req, res) => {
    const { message, sender } = req.body;

    try {
        const response = await axios.post(process.env.DEEPSEEK_API_URL, {
            prompt: message,
            temperature: 0.7,
            max_tokens: 300
        }, {
            headers: {
                "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        const reply = response.data.choices[0].text.trim();
        console.log(`Respuesta a ${sender}: ${reply}`);

        res.json({ reply });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error generando respuesta");
    }
});

app.get("/", (req, res) => {
    res.send("Bot de Ventas DeepSeek corriendo 🛒✨");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
