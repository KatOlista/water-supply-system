/* eslint-disable no-alert */
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

import {
  COORD_NODE_EXTEND,
  COORD_TRANSLATE_EXTEND,
  DEFAULT_LINKS,
  DEFAULT_NODES,
} from 'services/variables';
import { getNodes } from 'services/helpers';

import CustomNode from './CustomNode/CustomNode';

import './Flow.css';

const initialNodes: Node[] = getNodes(DEFAULT_NODES);

const initialEdges: Edge[] = DEFAULT_LINKS.map(link => link);

const nodeTypes = {
  custom: CustomNode,
};

export const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnectHandler = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges],
  );

  const onNodeDoubleClickHandler = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      node: Node<any, string | undefined>,
    ) => {
      alert(`Double clicked node ${node.data.label} `
      + `in position (${node.position.x}, ${node.position.y})`);
    },
    [],
  );

  const onNodeContextMenuHandler = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      node: Node<any, string | undefined>,
    ) => {
      event.preventDefault();

      alert(`Right clicked node ${node.data.label} `
      + `in position (${node.position.x}, ${node.position.y})`);
    },
    [],
  );

  return (
    <div className="flow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDoubleClick={onNodeDoubleClickHandler}
        onNodeContextMenu={onNodeContextMenuHandler}
        onConnect={onConnectHandler}
        nodeTypes={nodeTypes}
        maxZoom={1.25}
        fitView
        nodeExtent={COORD_NODE_EXTEND}
        translateExtent={COORD_TRANSLATE_EXTEND}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};
