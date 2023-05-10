import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>
}



function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={2}
    >
      <LeftHandComponent name={"Vihanga"} />
      <RightHandComponent message={"Hi"} />
    </SplitScreen>
  );
}

export default App;
