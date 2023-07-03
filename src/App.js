import logo from './logo.svg';
import Greet from './components/Greet';
import Notjsx from './components/Notjsx';
import Props from './components/Props';
import State from './components/State'
import Parent from './components/Parent'
import './App.css';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Notjsx></Notjsx>
      <Props className="demo"/>
      <State></State>
      <Parent></Parent>
      <NameList></NameList>
    </div>
  );
}

export default App;
