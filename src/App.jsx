import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import "./App.css";

function App() {
  const { isLoading, error, data } = useVisitorData();

  console.log(data.visitorFound);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  if (data) {
    // perform some logic based on the visitor data
    return <div>Ola {data.visitorFound ? "back" : ""}!</div>;
  } else {
    return null;
  }
}

export default App;
