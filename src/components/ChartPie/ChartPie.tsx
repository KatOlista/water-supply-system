import { useState, useEffect } from 'react';
import './ChartPie.css';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { DEFAULT_NODES, ERROR_STATE, OK_STATE } from 'services/variables';
import { Node } from 'reactflow';

export const ChartPie = () => {
  const [okNodes, setOkNodes] = useState<Node[]>([]);
  const [errorNodes, setErrorNodes] = useState<Node[]>([]);

  useEffect(() => {
    setOkNodes(DEFAULT_NODES.filter(({ state }) => state === OK_STATE));
    setErrorNodes(DEFAULT_NODES.filter(({ state }) => state === ERROR_STATE));
  },
  []);

  const chartData = [
    { status: 'OK', 'ilość urządzeń': okNodes.length },
    { status: 'ERROR', 'ilość urządzeń': errorNodes.length },
  ];

  return (
    <Paper>
      <Chart
        data={chartData}
      >
        <PieSeries
          valueField="ilość urządzeń"
          argumentField="status"
        />
        <Title
          text="Nodes States"
        />
        <Animation />
      </Chart>
    </Paper>
  );
};
