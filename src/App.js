import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const { isLoading, error, data } = useVisitorData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (data) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Browser Hash</p>
          <p className="App-link">
            {data.visitorFound ? `${data.visitorId}` : ""}
          </p>
        </header>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
