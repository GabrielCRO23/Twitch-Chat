import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {
  return (
    <div className="App">
      <h1>Twitch Chat</h1>
      <h2>Enter your username:</h2>
      <input type="text" />
    </div>
  );
}

export default App;
