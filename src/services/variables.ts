/* eslint-disable max-len */
import { CoordinateExtent, MarkerType } from 'reactflow';

export const ERROR_MESSAGE = 'Something went wrong, try again!';

export const INPUT_TYPE_COLOR = '#6ede87';
export const OUTPUT_TYPE_COLOR = '#e95454';
export const DEFAULT_TYPE_COLOR = '#1b79f4';

export const COORD_NODE_EXTEND: CoordinateExtent = [[-300, -200], [1000, 700]];
export const COORD_TRANSLATE_EXTEND: CoordinateExtent = [[-100, -100], [800, 600]];

export const DEFAULT_NODES = [
  {
    id: '1',
    position: { x: 0, y: 100 },
    data: { label: 'Oczyszczalnia wielka' },
    createdAt: '1999-07-11T23:20:21.817Z',
    state: 'OK',
    assignment: 'OCZYSZCZALNIA',
  },
  {
    id: '2',
    position: { x: 300, y: 100 },
    data: { label: 'Źródło czerwone' },
    createdAt: '2020-05-12T23:50:21.817Z',
    state: 'ERROR',
    assignment: 'ŹRÓDŁO',
    type: 'input',
  },
  {
    id: '3',
    position: { x: 100, y: 400 },
    data: { label: 'Stacja przesyłowa' },
    createdAt: '2017-02-14T23:53:21.817Z',
    state: 'OK',
    assignment: 'STACJA',
  },
  {
    id: '4',
    position: { x: 300, y: 400 },
    data: { label: 'Oczysczalnia mała' },
    createdAt: '2002-12-12T23:50:21.817Z',
    state: 'OK',
    assignment: 'OCZYSZCZALNIA',
  },
  {
    id: '5',
    position: { x: 150, y: 250 },
    data: { label: 'Żródło zielone' },
    createdAt: '2021-05-22T23:50:21.817Z',
    state: 'ERROR',
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
