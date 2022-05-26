import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {


    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://mysterious-wildwood-71098.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div className="my-10 min-w-[80vh]">
        <div className='flex flex-wrap items-center justify-center gap-5 mt-10'>
        {
            product.map((item, index) => {
                return <div key={item._id} class="card w-[300px] h-[480px] bg-base-100 boxShadow relative">
                    <figure className='h-[250px]'><img src={item.img} alt="product_image" /></figure>
                    <div class=" p-5">
                        <h2 class="card-title">{item.name }</h2>
                        <p className='card-title text-red-600 font-bold p-0 m-0'> $ {item.price} </p>
                        <p className='text-left m-0 p-0 text-sm font-bold'>Stock : { item.quantity}</p>
                        <p className='text-left m-0 p-0 text-sm font-bold'>Minimum order 10</p>
                        <p className='text-sm text-justify text-neutral'>{item.description} </p>
                        <div class="card-actions flex items-center justify-center bottom-2 mx-auto absolute">
                            <Link to={`/purchase/${item._id}`} class="btn btn-primary mx-auto w-[260px]">Buy Now</Link>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
            
        </div>
    );
};

export default AllProducts;