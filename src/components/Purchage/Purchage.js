import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchage = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);

    const [productData, setProductData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [id])

    const email = user.email
    const quantity = productData.quantity * 1

    const orderHandler = (e) => {
        e.preventDefault()
        const inputQuantity = e.target.inputQuantity.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const productName = productData?.name;
        const data = {email, productName, inputQuantity, address,phone}

        if (inputQuantity < 10 || inputQuantity > quantity) {
            toast.error(`You can not order less than 10 and Greater-than ${quantity}`)
        } else {

            fetch('http://localhost:5000/order', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => alert('successfuly data added'))

            e.target.reset();


            console.log(data);
        }

    }



    return (
        <div className='min-h-[90vh] bg-slate-200 flex flex-col items-center justify-center'>
            <div className="w-[350px] bg-slate-100 p-5 boxShadow">
                <div className="flex felx-col items-center">
                    <div className="avatar flex flex-col items-center mx-auto my-2">
                        <div className="w-24 rounded-full ">
                            <img src={productData.img} alt='product-image' />
                        </div>
                        <h1 className="text-center text-xl font-bold my-1">{productData.name}</h1>
                        <h1 className="text-center text-rose-600 font-bold">${productData.price}</h1>
                        <h1 className="text-center ">Stock: {productData.quantity}</h1>
                        <h1 className="text-center ">Minimum order 10</h1>

                    </div>


                </div>
                <form action="" onSubmit={orderHandler} className="flex flex-col items-center gap-2">

                    <input type="text" value={user.email} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" value={user.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Phone number" name="phone" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Address" name="address" className="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder="Quantity" name="inputQuantity"  className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='ORDER' className="input btn btn-primary input-bordered w-full max-w-xs" />
                </form>
                <ToastContainer />
            </div>


        </div>
    );
};

export default Purchage;