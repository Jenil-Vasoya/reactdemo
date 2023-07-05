import logo from "./logo.svg";
import Greet from "./components/Greet";
import Notjsx from "./components/Notjsx";
import Props from "./components/Props";
import State from "./components/State";
import Parent from "./components/Parent";
import "./App.css";
import NameList from "./components/NameList";
import Form from "./components/Form";
import ErrorBoundary from "./components/ErrorBoundary";
import Name from "./components/Name";

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Notjsx></Notjsx>
      <Props className="demo" />
      <State></State>
      <Parent></Parent>
      <NameList></NameList>
      <Form></Form>
      <ErrorBoundary>
        <Name name="name" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Name name="demo" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
