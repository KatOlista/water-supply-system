import ForceGraph2D from 'react-force-graph-2d';
// import { getLinks, getNodes } from 'api';
// import { useEffect, useState } from 'react';

// import { ERROR_MESSAGE } from 'services/variables';
// import { Loader } from 'components/Loader';

import nodesFromServer from '../../api/nodes.json';
import linksFromServer from '../../api/links.json';

export const Graph = () => {
  const graph = {
    nodes: nodesFromServer,
    links: linksFromServer,
  };

  // useEffect(() => {
  //   setIsLoadingNode(true);
  //   setIsLoadingLink(true);
  //   getNodes()
  //     .then((nodesFromServer) => setNodes(nodesFromServer))
  //     .catch((err) => {
  //       setIsError(true);
  //       // eslint-disable-next-line no-console
  //       console.log(err);
  //     })
  //     .finally(() => setIsLoadingNode(false));

  //   getLinks()
  //     .then((linksFromServer) => setLinks(linksFromServer))
  //     .catch(() => setIsError(true))
  //     .finally(() => setIsLoadingLink(false));
  // }, []);

  // const hasLoader = isLoadingNode && isLoadingLink && !isError;
  // const hasError = isError && !hasLoader;
  // const showGraph = !hasLoader && !hasError;

  return (
    <div>
      <h2>Graph</h2>

      {/* {hasError && (<p>{ERROR_MESSAGE}</p>)}

      {hasLoader && (<Loader />)} */}

      {/* {showGraph && (

      )} */}

      <ForceGraph2D
        graphData={graph}
      />
    </div>
  );
};
