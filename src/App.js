import './App.css';

import MapChart from "./MapChart";
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="wrapper">
      <MapChart />
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
