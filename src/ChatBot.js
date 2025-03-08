import { useState } from "react";
import axios from "axios";
// axios.defaults.baseURL="https://firstapp-backend-r28m.onrender.com"

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await axios.post("https://firstapp-backend-r28m.onrender.com/chat", { message: input });
    setResponse(res.data.reply);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default ChatBot;
