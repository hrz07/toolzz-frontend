import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchage = () => {
    const { id } = useParams()

    const [productData, setProductData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [id])







    return (
        <div className='min-h-[90vh] bg-slate-200 flex flex-col items-center justify-center'>
            <div className="w-[350px] bg-slate-100 p-5 boxShadow">
                <div className="flex felx-col items-center">
                    <div className="avatar flex flex-col items-center mx-auto my-2">
                        <div className="w-24 rounded-full ">
                            <img src={productData.img} alt='product-image' />
                        </div>
                        <h1 className="text-center text-xl font-bold my-1">{productData.name }</h1>
                        <h1 className="text-center text-rose-600 font-bold">${productData.price }</h1>
                        <h1 className="text-center ">Stock: {productData.quantity }</h1>
                    </div>
                
                   
                </div>
                <form action="" className="flex flex-col items-center gap-2">
                    <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='ORDER' className="input btn btn-primary input-bordered w-full max-w-xs" />
                </form>
            </div>


        </div>
    );
};

export default Purchage;