import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateInfoModal = ({refetch}) => {
    const [user] = useAuthState(auth)
        const email = user?.email
    const updateHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const data = { name, phone, address }
        


        fetch(`https://mysterious-wildwood-71098.herokuapp.com/updateinfo/${email}`, {
                method: 'PUT',
                body: JSON.stringify({ data }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                toast("Information updated successfully")
                refetch()
                });
        e.target.reset();
       }


    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className=" modal-box">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className="text-center font-bold text-primary my-2">Update Information</h1>
                    <form className=" flex flex-col items-center gap-2" action="" onSubmit={updateHandler}>

                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone No." name="phone" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" name="address" className="input input-bordered w-full max-w-xs" />
                        <div className="modal-action">
                        <input type="submit" htmlFor="my-modal" value="UPDATE"  className="btn btn-primary"></input>
                    </div>
                    </form>

                    
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateInfoModal;