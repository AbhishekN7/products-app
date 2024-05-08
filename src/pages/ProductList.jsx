import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProducts } from '../toolkit/productSlice';


const ProductList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProducts());
    }, []);
    const products = useSelector((state) => state.products.products)
    const getLoading = useSelector((state) => state.products.getLoading)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };
    return (
        <div className="container">
            {getLoading && (
                <div className="position-fixed top-50 start-50 translate-middle">
                    <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div className="row">
                {currentProducts.length > 0 && (
                    currentProducts.map(product => (
                        <div key={product.id} className="col-md-4">
                            <ProductCard product={product} />
                        </div>
                    ))
                )
                }
            </div>
            <div className="d-flex justify-content-center my-5">
                {currentPage > 1 && (
                    <button className="btn btn-info me-2" onClick={handlePrevPage}>Previous</button>
                )}
                {currentProducts.length === productsPerPage && (
                    <button className="btn btn-info" onClick={handleNextPage}>Next</button>
                )}
            </div>
        </div>
    );
};

export default ProductList;
