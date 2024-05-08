import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCategories = async () => {
    setLoading(true)
    const baseURL = process.env.BASE_URL || 'https://dummyjson.com';
    const { data } = await axios.get(`${baseURL}/product/categories`);
    if (data.length) {
      setLoading(false)
      console.log(data);
      setCategory(data);
    }
  };

  const handleCategoryProducts = (item) => {
    navigate(`/products/category/${item}`)
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="container d-flex flex-wrap gap-4">
      {loading && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="spinner-border text-primary" role="status" style={{ width: '5rem', height: '5rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {category.map((item, index) => (
        <div className="category-item-container" key={index}>
          <div className="category-item-content">
            <div className="category-item-index">{index + 1}.</div>
            <div className="category-item-text">
              <span onClick={() => handleCategoryProducts(item)}>{item[0].toUpperCase() + item.slice(1)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
