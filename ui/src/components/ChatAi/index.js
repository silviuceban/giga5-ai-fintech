import React, { useState } from "react";
import { useVisionUIController, setOpenConfigurator } from "context";
import typing from "assets/images/giphy.gif";
import axios from "axios";

import "./index.css";

const Chatbot = ({ showChat }) => {
  const [controller, dispatch] = useVisionUIController();
  const { openConfigurator } = controller;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const apikey = process.env.REACT_APP_API_KEY;

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setIsTyping(true);

    const params = {
      userId: "asd123",
      message: "{prompt: do you know what is a MCC banking code?}",
    };

    try {
      const response = await axios.post("http://localhost:5000/chat", params);

      const botMessage = {
        sender: "bot",
        text: response.data.message.trim(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);

      const errorMessage = { sender: "bot", text: "Ошибка при общении с API." };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput(""); // Очищаем поле ввода
    setIsTyping(false);
  };

  return (
    <div className={`${showChat ? "show-chat" : "hide-chat"}`}>
      <div style={styles.chatContainer}>
        <div style={styles.closeButton} onClick={() => handleConfiguratorOpen()}>
          Close
        </div>
        <div style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(message.sender === "user" ? styles.userMessage : styles.botMessage),
              }}
            >
              {message.text}
            </div>
          ))}

          {isTyping && (
            <div style={styles.typingIndicator}>
              <img
                src={typing}
                alt="Bot is typing..."
                style={{ width: "78px", height: "45px", marginLeft: "-9px" }}
              />
            </div>
          )}
          {/* <div style={styles.typingIndicator}>
            <img
              src={typing}
              alt="Bot is typing..."
              style={{ width: "78px", height: "45px", marginLeft: "-9px" }}
            />
          </div> */}
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            placeholder="Ask assistance..."
          />
          <button onClick={handleSend} style={styles.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    // position: "absolute",
    // bottom: "0px",
    // right: "0px",
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    width: "520px",
    height: "620px",
    // margin: "0 auto",
    padding: "20px",
    border: "1px solid rgb(43 37 170)",
    borderRadius: "10px",
    // backgroundColor: "#f9f9f9",
    backgroundColor: "rgb(31 24 101)",
    display: "flex",
    flexDirection: "column",
    zIndex: "100",
  },
  messagesContainer: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "10px",
  },
  closeButton: {
    cursor: "pointer",
    border: "1px solid rgb(43 37 170)",
    borderRadius: "5px",
    width: "65px",
    padding: "5px",
    marginLeft: "auto",
    marginRight: "0",
    backgroundColor: "rgb(0, 123, 255)",
    color: "#FFFF",
    fontSize: "14px",
    textAlign: "center",
  },
  message: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "10px",
    maxWidth: "70%",
    wordWrap: "break-word", // Позволяет переносить длинные слова
    overflowWrap: "break-word", // Перенос слов при необходимости
    whiteSpace: "pre-wrap", // Сохраняет пробелы и переносы строк
  },
  userMessage: {
    backgroundColor: "#d1f1ff",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#f1f0f0",
    alignSelf: "flex-start",
  },
  inputContainer: {
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    marginLeft: "10px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Chatbot;
