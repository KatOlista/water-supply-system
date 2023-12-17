import { Dashboard } from 'components/Dashboard';
import './App.css';
import { BasicFlow } from 'components/Flow/Flow';
// import { DashboardTanstack } from
//   'components/Dashboard_tanstack/DashboardTanstack';

function App() {
  return (
    <div className="App">
      <h1>Water supply system</h1>

      {/* <DashboardTanstack /> */}

      <Dashboard />

      <BasicFlow />
    </div>
  );
}

export default App;
