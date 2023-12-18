import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { DEFAULT_NODES, columnDefaultWidth } from 'services/variables';
import { ColDef } from 'ag-grid-community';
import './Dashboard.css';

export const Dashboard = () => {
  const [colDefs] = useState<ColDef[]>([
    { field: 'name', width: columnDefaultWidth.nameWidth },
    { field: 'type', width: columnDefaultWidth.typeWidth },
    { field: 'date', width: columnDefaultWidth.dateWidth },
    { field: 'status', width: columnDefaultWidth.statusWidth },
  ]);

  const nodes = DEFAULT_NODES.map(({
    data,
    assignment,
    createdAt,
    state,
  }) => {
    return {
      name: data.label,
      type: assignment,
      date: new Date(createdAt),
      status: state,
    };
  });

  const defaultColDef = useMemo(() => ({
    filter: true,
  }), []);

  const [rowData] = useState(nodes);

  return (
    <div>
      <h2>Dashboard</h2>

      <div
        className="ag-theme-quartz grid-container"
        style={{
          margin: '0 auto', display: 'grid', width: 595, height: 263,
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};
