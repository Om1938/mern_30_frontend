import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000");
      const data = await response.text();
      setMessage(data);
    };
    getData();
  }, []);

  return <h1>{message}</h1>;
}

export default App;
