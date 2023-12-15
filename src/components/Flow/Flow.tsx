import { useCallback } from 'react';
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import { DEFAULT_LINKS, DEFAULT_NODES } from 'services/variables';
import { getColor } from 'services/helpers';

import CustomNode from './CustomNode';

import './Flow.css';

const initialNodes: Node[] = getColor(DEFAULT_NODES);

const initialEdges: Edge[] = DEFAULT_LINKS.map(link => link);

const nodeTypes = {
  custom: CustomNode,
};

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges],
  );

  const onNodeDoubleClick = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      node: Node<any, string | undefined>,
    ) => {
      const currentNode = nodes.find((el) => el.id === node.id);

      if (currentNode) {
        currentNode.state = currentNode.state === 'OK'
          ? 'ERROR'
          : 'OK';
      }
    },
    [nodes],
  );

  return (
    <div className="flow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDoubleClick={onNodeDoubleClick}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        maxZoom={1.5}
        fitView
        nodeExtent={[[-300, -100], [800, 800]]}
        translateExtent={[[0, 0], [500, 700]]}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default BasicFlow;
