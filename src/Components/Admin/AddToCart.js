import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function AddToCart() {
  const { cId, uId } = useParams();
  const navigate = useNavigate();
  const hasAddedToCart = useRef(false);

  useEffect(() => {
    if (hasAddedToCart.current) return;
    hasAddedToCart.current = true;
    fetch("http://localhost:9999/addToCart")
      .then(res => res.json())
      .then(existingCartItems => {
        const newId = existingCartItems.length ? Math.max(...existingCartItems.map(item => parseInt(item.id))) + 1 : 1;
        return fetch("http://localhost:9999/addToCart", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: newId.toString(),
            userId: uId,
            courseId: cId
          })
        });
      })
      .then(res => res.json())
      .then(result => {
        console.log('Course added to cart:', result);
        navigate(`/homepageUser/${uId}/course/${cId}`);
      })
      .catch(error => console.error('Error adding course to cart:', error));
  }, [cId, uId, navigate]);

  return (
    <div>
      <h1>Adding Course to Cart...</h1>
    </div>
  );
}