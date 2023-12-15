export const ERROR_MESSAGE = 'Something went wrong, try again!';

export const DEFAULT_NODES = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'Oczyszczalnia wielka' },
    createdAt: '1999-07-11T23:20:21.817Z',
    state: 'OK',
    assignment: 'OCZYSZCZALNIA',
  },
  {
    id: '2',
    position: { x: 400, y: 100 },
    data: { label: 'Źródło czerwone' },
    createdAt: '2020-05-12T23:50:21.817Z',
    state: 'ERROR',
    assignment: 'ŹRÓDŁO',
    // style: { backgroundColor: `${color}`, color: 'white' },
  },
  {
    id: '3',
    position: { x: 100, y: 400 },
    data: { label: 'Stacja przesyłowa' },
    createdAt: '2017-02-14T23:53:21.817Z',
    state: 'OK',
    assignment: 'STACJA',
    // style: { backgroundColor: `${color}`, color: 'white' },
  },
  {
    id: '4',
    position: { x: 400, y: 400 },
    data: { label: 'Oczysczalnia mała' },
    createdAt: '2002-12-12T23:50:21.817Z',
    state: 'OK',
    assignment: 'OCZYSZCZALNIA',
    // style: { backgroundColor: `${color}`, color: 'white' },
  },
  {
    id: '5',
    position: { x: 250, y: 200 },
    data: { label: 'Żródło zielone' },
    createdAt: '2021-05-22T23:50:21.817Z',
    state: 'ERROR',
    assignment: 'ŹRÓDŁO',
    // style: { backgroundColor: `${color}`, color: 'white' },
  },
];

export const DEFAULT_LINKS = [
  {
    id: '1',
    source: '2',
    target: '1',
    animated: true,
  },
  {
    id: '2',
    source: '2',
    target: '4',
    animated: true,
  },
  {
    id: '3',
    source: '3',
    target: '1',
    animated: true,
  },
  {
    id: '4',
    source: '3',
    target: '4',
    animated: true,
  },
  {
    id: '5',
    source: '4',
    target: '3',
    animated: true,
  },
  {
    id: '6',
    source: '5',
    target: '3',
    animated: true,
  },
];
