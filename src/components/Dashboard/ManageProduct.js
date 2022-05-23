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
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product.map((item, index) => {
                                return <tr>
                                    <th>{index+1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 mask mask-squircle">
                                                <img src={item.img} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{ item.name}</td>
                                    <td>{ item.price}</td>
                                    <td>{ item.quantity}</td>
                                    <td>
                                        <button class="btn bg-rose-700 border-0 text-zinc-100 btn-xs">Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;


