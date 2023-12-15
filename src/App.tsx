import { Dashboard } from 'components/Dashboard';
import './App.css';
import BasicFlow from 'components/Flow/Flow';

function App() {
  return (
    <div className="App">
      <h1>Water supply system</h1>
      <Dashboard />

      <BasicFlow />
    </div>
  );
}

export default App;
