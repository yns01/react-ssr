import React from 'react';

// Default staticContext to empty object as it's only received on the server
// via the StaticRouter context prop (renamed by the router to staticContext)
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Page not found</h1>;
};

export default {
  component: NotFoundPage,
};
