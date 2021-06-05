import "./App.css";
// import Button from "./widgets/button/Button";
import CheckBox from "./widgets/checkbox/CheckBox";
import RadioGroup from "./widgets/radio-group/RadioGroup";
// import TextBox from "./widgets/textbox/TextBox";

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
      <center style={{ width: 1000 }}>
        <CheckBox />
        <RadioGroup
          onItemSelected={(value) => console.log("I am the value bro", value)}
          data={[
            { name: "keskeshi" },
            { name: "ogbemi" },
            { name: "tabaluga" },
          ]}
          // labelFieldName="name"
          valueFieldName="name"
          defaultValue="Orange"
        />
        {/* <TextBox
          _generics={{ rows: "20" }}
          textarea
          onChange={(e) => console.log("I am the shit", e.target.value)}
        />
        <Button
          onClick={(e) =>
            console.log("i am the the button being clicked my Geeee")
          }
          elevation={3}
       
        >
          I am the children bro
        </Button> */}
      </center>
    </div>
  );
}

export default App;
