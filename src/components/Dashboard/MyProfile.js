import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const {displayName,email,photoURL } = user;

    return (
        <div className="flex h-full justify-center items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{ user?.displayName}</h2>
                    <p>{ user?.email}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Update Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;