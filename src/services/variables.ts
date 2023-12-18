/* eslint-disable max-len */
import { CoordinateExtent, MarkerType } from 'reactflow';

export const INPUT_TYPE_COLOR = '#6EDE87';
export const OUTPUT_TYPE_COLOR = '#FF7043';
export const DEFAULT_TYPE_COLOR = '#42A5F5';

export const OK_STATE = 'OK';
export const ERROR_STATE = 'ERROR';

export const COORD_NODE_EXTEND: CoordinateExtent = [[-300, -200], [1000, 700]];
export const COORD_TRANSLATE_EXTEND: CoordinateExtent = [[-100, -100], [800, 600]];

export const columnDefaultWidth = {
  nameWidth: 200,
  typeWidth: 150,
  dateWidth: 125,
  statusWidth: 100,
};

export const DEFAULT_NODES = [
  {
    id: '1',
    position: { x: 0, y: 100 },
    data: { label: 'Oczyszczalnia wielka' },
    createdAt: '1999-07-11T23:20:21.817Z',
    state: OK_STATE,
    assignment: 'OCZYSZCZALNIA',
  },
  {
    id: '2',
    position: { x: 300, y: 100 },
    data: { label: 'Źródło czerwone' },
    createdAt: '2020-05-12T23:50:21.817Z',
    state: ERROR_STATE,
    assignment: 'ŹRÓDŁO',
    type: 'input',
  },
  {
    id: '3',
    position: { x: 100, y: 400 },
    data: { label: 'Stacja przesyłowa' },
    createdAt: '2017-02-14T23:53:21.817Z',
    state: OK_STATE,
    assignment: 'STACJA',
  },
  {
    id: '4',
    position: { x: 300, y: 400 },
    data: { label: 'Oczysczalnia mała' },
    createdAt: '2002-12-12T23:50:21.817Z',
    state: OK_STATE,
    assignment: 'OCZYSZCZALNIA',
  },
  {
    id: '5',
    position: { x: 150, y: 250 },
    data: { label: 'Żródło zielone' },
    createdAt: '2021-05-22T23:50:21.817Z',
    state: ERROR_STATE,
    assignment: 'ŹRÓDŁO',
    type: 'input',
  },
];

export const DEFAULT_LINKS = [
  {
    id: '1',
    source: '2',
    target: '1',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#999',
    },
  },
  {
    id: '2',
    source: '2',
    target: '4',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#999',
    },
  },
  {
    id: '3',
    source: '3',
    target: '1',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#999',
    },
  },
  {
    id: '4',
    source: '3',
    target: '4',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#999',
    },
  },
  {
    id: '5',
    source: '4',
    target: '3',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#999',
    },
  },
  {
    id: '6',
    source: '5',
    target: '3',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#999',
    },
  },
];
