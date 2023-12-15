import { createRoot } from 'react-dom/client';
import './index.css';

import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <Root />,
  );
