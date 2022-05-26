import React, { useEffect, useState } from 'react';
import { MdOutlineDataExploration } from 'react-icons/md';

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://mysterious-wildwood-71098.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Quantity</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            orders.map((order, index) => {
                              
                                return    <tr>
                                    <th>{ index+1}</th>
                                    <td>{ order.productName}</td>
                                    <td>{ order.email}</td>
                                    <td>{ order.phone}</td>
                                    <td>{ order.address}</td>
                                    <td>{ order.inputQuantity}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;