import { Ollama } from "@langchain/ollama";
import bodyParser from "body-parser";
import express from "express";
import { formatISO } from "date-fns";
import { addMessage } from "./services.js";
import { transactionsData } from "./transactionsData.js";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Only allow requests from React app
}));
export const jsonParser = bodyParser.json();
const port = 5000;
async function chatToMistral(input) {
    const llm = new Ollama({
        model: "mistral",
        temperature: 0,
        maxRetries: 2,
    });
    const completion = await llm.invoke(input);
    return completion;
}
app.get("/", (req, res) => {
    console.log(formatISO(new Date()));
    res.send("homepage");
});
app.get("/data", async (req, res) => {
    const result = await chatToMistral("2+2 result");
    res.send(result);
});
app.post("/chat", jsonParser, async (req, res) => {
    const { message, userId } = req.body;
    addMessage(userId, "user", message);
    const result = await chatToMistral(`{dataset:${JSON.stringify(transactionsData)}, message:${message}}`);
    addMessage(userId, "model", result);
    res.send({ message: result });
});
app.post("/transactions", jsonParser, async (req, res) => {
    const { message } = req.body;
    const result = await chatToMistral(`{dataset:${JSON.stringify(transactionsData)}
    prompt: ${message}
    }`);
    res.send(result);
});
app.get("/transactionsData", (req, res) => {
    res.send({ data: transactionsData });
});
app.listen(port);
console.log(`App working on port ${port}`);
