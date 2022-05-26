import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import UpdateInfoModal from './UpdateInfoModal';
import {useQuery} from 'react-query'
import Loading from '../Loading/Loading'

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const userImg =' https://i.ibb.co/VWQ68Jd/userImg.png'
    const { displayName, email, photoURL } = user;
    const [myData, setMydata] = useState([])
    
   
    const { data, isLoading,refetch } = useQuery('user', () => fetch(`http://localhost:5000/userinfo/${email}`, {
        method: 'GET',
      
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    




    return (
        <div className="flex h-full justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL || userImg} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: { data?.name}</h2>
                    <p>Email: { data?.email}</p>
                    <p>Phone: { data?.phone ? data.phone : 'Phone number not available' }</p>
                    <p>Address: { data?.address ? data.address : 'Address not available' }</p>
                    <div className="card-actions">
                    <label htmlFor="my-modal" className="btn btn-primary modal-button">Update Information</label>
                    </div>
                </div>
            </div>

            <UpdateInfoModal refetch={refetch} />

        </div>
    );
};

export default MyProfile;