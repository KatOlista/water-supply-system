import { Node } from 'reactflow';
import {
  DEFAULT_TYPE_COLOR,
  INPUT_TYPE_COLOR,
  OUTPUT_TYPE_COLOR,
} from './variables';

const getNodeColor = (node: Node<any, string | undefined>) => {
  switch (node.type) {
    case 'input':
      return INPUT_TYPE_COLOR;
    case 'output':
      return OUTPUT_TYPE_COLOR;
    default:
      return DEFAULT_TYPE_COLOR;
  }
};

export const getNodes = (nodes: Node<any, string | undefined>[]) => {
  return nodes.map(node => {
    const color = getNodeColor(node);

    return {
      ...node,
      style: { backgroundColor: `${color}`, color: 'white' },
    };
  });
};
