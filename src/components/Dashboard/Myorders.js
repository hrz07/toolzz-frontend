import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Myorders = () => {

    const [myOrderList, setMyOrderList] = useState([])
    const [user] = useAuthState(auth);
    const email = user?.email;


    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`)
            .then(res => res.json())
            .then(data => setMyOrderList(data))
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            myOrderList.map((item, index) => {
                                return  <tr key={item._id}>
                                    <th>{ index+1}</th>
                                    <td>{ item.productName}</td>
                                    <td>{ item.inputQuantity}</td>
                                    <td> <button className='btn btn-xs btn-success' >Pay</button> </td>
                                    <td> <button className='btn btn-xs btn-cancel' >Cancel</button> </td>
                                    
                                
                            </tr>
                            })
                        }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;