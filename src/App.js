import logo from './logo.svg';
import './App.css'; 
import MainContainer from './containers/MainContainer';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="App"> 
       <Header/> 
      <MainContainer />
     
    </div>
  );
}

export default App;
