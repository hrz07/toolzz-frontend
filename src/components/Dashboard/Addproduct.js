import React from 'react';

const Addproduct = () => {


    const submitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const img = e.target.image.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const data = { name, price, img, quantity, description }
        
        fetch('http://localhost:5000/addproduct', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => alert('successfuly data added'))

        e.target.reset();
    }





    return (
        <div className='flex h-[70vh] flex-col mt-20 items-center'>
            
            <form action="" onSubmit={submitHandler} className='form-control w-[420px] items-center gap-2 boxShadow p-5 rounded-lg'>
            <h1 className='text-center mx-auto text-2xl font-bold mb-5'>Add Product</h1>
                <input type="text" name="name" placeholder="name" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="price" placeholder="price" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="image"  placeholder="image" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="description" placeholder="description" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="ADD PRODUCT" className="input btn btn-primary input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Addproduct;