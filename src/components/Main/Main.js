import React from 'react';

export default function Main({ children }) {
  return (
    <main id="mainContent">
      <div id="overlay">{children}</div>
    </main>
  );
}
