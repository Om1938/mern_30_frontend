import Message from "./components/Message";
import Buttton from "./components/Button";
import Input from "./components/Input";
import { useGetMessageQuery } from "./store/message/api";

function App() {
  const { data: message } = useGetMessageQuery(undefined);

  return (
    <>
      {message && <Message text={message} />}
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
