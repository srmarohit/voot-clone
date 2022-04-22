import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Header from "./components/Layout/Header";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Header />
      <div className="d-flex" style={{ height: "85vh", overflow: "hidden" }}>
        <SideBar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
