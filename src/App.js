import "./App.css";
import Button from "./widgets/button/Button";
import TextBox from "./widgets/textbox/TextBox";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <center>
        <TextBox
          _generics={{ rows: "20" }}
          textarea
          onChange={(e) => console.log("I am the shit", e.target.value)}
        />
        <Button
          onClick={(e) =>
            console.log("i am the the button being clicked my Geeee")
          }
        >
          I am the children bro
        </Button>
      </center>
    </div>
  );
}

export default App;
