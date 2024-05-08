import React from 'react';
import "../App.css"
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    function handleProductDetail(id) {
        navigate(`/product/${id}`)
    }
    return (
        <div className="card mb-3 product-card" style={{ minHeight: '380px' }}>
            <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <div className="d-flex justify-content-between flex-column">
                    <div className='d-flex flex-wrap'>
                        <div className="col-sm-6">
                            <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-text"><strong>Discount:</strong> {product.discountPercentage}%</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-text"><strong>Rating:</strong> {product.rating}</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-text"><strong>Category:</strong> {product.category}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-2" onClick={() => handleProductDetail(product.id)}>Checkout</button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
