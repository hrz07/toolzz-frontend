import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Review = () => {
    const userImg =' https://i.ibb.co/VWQ68Jd/userImg.png'
    const [user] = useAuthState(auth);
    const email = user?.email
    const name = user?.displayName
    const img = user?.photoURL ? user.photoURL : userImg
    
    

    const handleReview = (e) => {
        e.preventDefault();

        let rating = e.target.rating.value;
        const review = e.target.review.value

        if (rating > 5 || rating < 1) {
            toast.error("Rating can not less than 0 or bigger than 5")
        } else {
            
            const data = { name, email, review,img,rating }

            fetch('https://mysterious-wildwood-71098.herokuapp.com/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(data => alert('successfuly data added'))
        }




      

        e.target.reset();
    }








    return (
        <div className='mt-10 items-center'>
    
            <div className='boxShadow w-[360px] mx-auto p-5'>
                 

                <form action="" onSubmit={handleReview} className='flex flex-col items-center  gap-2'>
                    <div className="avatar mb-5 ">
                        <div className="w-24 mask rounded-full mx-auto items-center">
                            <img src={img} alt="user-image" />
                        </div>
                    </div>
                    <input type="text" value={email} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" value={name} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="review" name="review" className="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder="rating" name="rating" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Review Submit' className="input btn btn-primary w-full max-w-xs" />
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Review;