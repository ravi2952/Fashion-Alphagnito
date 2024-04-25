import React, { useEffect, useState } from 'react';
import PrivateAPI from '../../../api/PrivateApi';
import { NavLink } from 'react-router-dom';
import '../Products/Product.css';

export default function Product() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const { data } = await PrivateAPI.get("/products");
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getApi();
    }, []);

    return (
        <div>
            <div className="Product-container">
                <div className="products-heading">
                    <h1>Products</h1>
                </div>
                <div className="products">
                    {apiData.slice(0, 8).map((item, i) => ( // Slice to get only the first 8 items
                        <div key={i} className='product-items'>
                            <img src={item?.image} alt='' />
                            <span>Rs. {item?.price}</span>
                            <NavLink to={`/product/${item?.id}`}>View Product</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
