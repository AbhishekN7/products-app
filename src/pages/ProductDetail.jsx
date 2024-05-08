import React, { useEffect } from 'react'
import { getUserProductById } from '../toolkit/productSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../App.css"
import { ToastContainer, toast } from 'react-toastify';
export default function ProductDetail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.product);
    const getLoading = useSelector((state) => state.products.getLoading)
    const handleAddToCart = () => {
        toast.success("Product Added to cart!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    useEffect(() => {
        console.log(id);
        dispatch(getUserProductById(id));
    }, [])
    return (
        <div className="container">
            {getLoading ? (
                <div className="position-fixed top-50 start-50 translate-middle">
                    <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : <div className="row">
                <div className="col-md-6">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {product?.images && product?.images.map((image, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img
                                        src={image}
                                        className="d-block w-100"
                                        alt={`Product ${index + 1}`}
                                        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" style={{
                                backgroundColor: "black"
                            }} aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" style={{
                                backgroundColor: "black"
                            }} aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-details">
                        <h2 className="product-title">{product?.title}</h2>
                        <p className="product-description">{product?.description}</p>
                        <div className="details">
                            <p><strong>Price:</strong> ${product?.price}</p>
                            <p><strong>Discount:</strong> {product?.discountPercentage}%</p>
                            <p><strong>Rating:</strong> {product?.rating}</p>
                            <p><strong>Stock:</strong> {product?.stock}</p>
                            <p><strong>Brand:</strong> {product?.brand}</p>
                            <p><strong>Category:</strong> {product?.category}</p>
                        </div>
                        <button className="btn btn-primary btn-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
