import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const userImg =' https://i.ibb.co/VWQ68Jd/userImg.png'

    const {displayName,email,photoURL } = user;

    return (
        <div className="flex h-full justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL || userImg} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ user?.displayName}</h2>
                    <p>{ user?.email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Update Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;