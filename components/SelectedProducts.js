import React from "react";

function SelectedProducts({ selectedList }) {
  return (
    <div>
      <h2>Selected Products</h2>
      {selectedList && selectedList.products.length > 0 ? (
        <ul>
          {selectedList.products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products selected.</p>
      )}
    </div>
  );
}

export default SelectedProducts;
