import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div
      className="item-list-container"
      style={{
        backgroundColor: 'rgb(56, 184, 219)',
        padding: '20px',
      }}
    >
      <p
        className="greeting"
        style={{
          fontWeight: 'bold',
        }}
      >
        {greeting}
      </p>
    </div>
  );
}

export default ItemListContainer;
