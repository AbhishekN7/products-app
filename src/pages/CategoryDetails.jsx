import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByCategoryName } from "../toolkit/productSlice";
import ProductCard from "../components/ProductCard";

const CategoryDetails = () => {
    const products = useSelector((state) => state.products.products)
    const getLoading = useSelector((state) => state.products.getLoading)
    const dispatch = useDispatch()
    const { categoryName } = useParams()
    const fetchCategoryProducts = () => {
        console.log(categoryName);
        dispatch(getProductByCategoryName(categoryName))
    }
    useEffect(() => {
        fetchCategoryProducts()
    }, [])
    return <div className="container">
        {getLoading && (
            <div className="position-fixed top-50 start-50 translate-middle">
                <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-md-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
}
export default CategoryDetails;