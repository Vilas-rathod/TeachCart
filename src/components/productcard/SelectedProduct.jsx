import React from 'react'

const SelectedProduct = (product,onBack,onSelect) => {

    if(!product)
        <p>No Product Selected!!!</p>
  return (
<>
  <div >
      <h1>{product.name}</h1>
    <button onClick={onBack}> Back</button>
    <button onClick={onAddToCart(product)}>Add to Cart</button>
  </div>
</>  
)
}

export default SelectedProduct