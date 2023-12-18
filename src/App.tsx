import { Dashboard } from 'components/Dashboard';
import './App.css';
import { BasicFlow } from 'components/Flow/Flow';
import { ChartPie } from 'components/ChartPie/ChartPie';

function App() {
  return (
    <div className="App">
      <h1>Water supply system</h1>

      <div className="container dashboard">
        <Dashboard />
      </div>

      <div className="container chart-container">
        <ChartPie />
      </div>

      <div className="pie">
        <div className="pie-state">
          <div className="pie-color ok" />

          <span className="pie-state">OK status</span>
        </div>

        <div className="pie-state">
          <div className="pie-color error" />

          <span className="pie-state">Error status</span>
        </div>
      </div>

      <div className="container graph">
        <BasicFlow />
      </div>
    </div>
  );
}

export default App;
