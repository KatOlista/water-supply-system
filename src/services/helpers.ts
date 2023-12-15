import { Node } from 'reactflow';

export const getColor = (nodes: Node<any, string | undefined>[]) => {
  const onOK = '#6ede87';
  const onERROR = '#e95454';

  return nodes.map(node => {
    const color = node.state === 'OK'
      ? onOK
      : onERROR;

    return {
      ...node,
      style: { backgroundColor: `${color}`, color: 'white' },
    };
  });
};
