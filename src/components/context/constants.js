import React from 'react';

export const MyContext = React.createContext('false'); // default value if no providers further up tree
export const MyContextObject = React.createContext({
  str: 'hello',
  handler: () => {},
});
export const ContextColor = React.createContext('black');
export const ContextUsername = React.createContext('nobody');