/* eslint-disable max-len */
import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { DEFAULT_NODES } from 'services/variables';

export const Dashboard = () => {
  const [colDefs] = useState([
    { field: 'name' },
    { field: 'type' },
    { field: 'date' },
    { field: 'status' },
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
      date: createdAt,
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

      <div className="ag-theme-quartz" style={{ width: 802, height: 300 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};
