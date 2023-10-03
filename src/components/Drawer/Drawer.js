import React from 'react';

export default function Drawer({ handleDismiss, children }) {
  return (
    <div className="drawer" onClick={handleDismiss}>
      {children}
    </div>
  );
}
