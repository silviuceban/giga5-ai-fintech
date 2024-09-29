import fs from "fs";
import path from "path";
import { UserData } from "./models";
import { formatISO } from "date-fns";

const chatHistoryPath = path.join("chatHistory.json");

export function loadTransationsData() {
  try {
    const data = fs.readFileSync(path.join("transactionsData.txt"), "utf-8");
    return data;
  } catch (err) {
    console.error("Error reading the JSON file:", err);
    return [];
  }
}

export function loadJsonData() {
  try {
    const data = fs.readFileSync(chatHistoryPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading the JSON file:", err);
    return [];
  }
}

function saveJsonData(data: any) {
  try {
    fs.writeFileSync(chatHistoryPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error saving the JSON file:", err);
  }
}

export function addMessage(
  userId: string,
  sender: string,
  messageContent: string
) {
  const data = loadJsonData();

  const userIndex = data.findIndex((user: UserData) => user.userId === userId);

  if (userIndex !== -1) {
    const newMessage = {
      sender,
      message: messageContent,
      date: formatISO(new Date()),
    };
    data[userIndex].messages.push(newMessage);
  } else {
    const newUser = {
      userId,
      messages: [
        {
          sender,
          message: messageContent,
          date: new Date().toISOString(),
        },
      ],
    };
    data.push(newUser);
  }

  saveJsonData(data);
}
