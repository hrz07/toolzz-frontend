import React, { useEffect, useState } from 'react';

const ManageProduct = () => {


    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(product);




    return (
        <div>
            <h1>maanage</h1>
        </div>
    );
};

export default ManageProduct;