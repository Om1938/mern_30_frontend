import { useEffect, useState } from "react";
import Message from "./components/Message";
import Buttton from "./components/Button";
import Input from "./components/Input";

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

  return (
    <>
      <Message text={message} />
      <div>
        <Input value={"Hello"} />
        <Buttton
          onClick={() => {
            alert("Button Clicked");
          }}
        >
          Click me
        </Buttton>
      </div>
    </>
  );
}

export default App;
