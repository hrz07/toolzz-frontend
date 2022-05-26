import React from 'react';

const Blogs = () => {
    return (
        <div className="flex flex-col min-h-[80vh] gap-2  p-5 items-center text-center ">
            <div className="max-w-[900px] text-justify bg-primary text-white p-5 rounded">
                <h1 className="font-bold">Q1: How will you improve the performance of a React Application?</h1>
                <h1 className="">Ans: To improve react performance at first we need to stop unnecessary re-rendes/ console.log. Then we need to kep our component state local where it necessary. We can use spinner or lazy loading image. Do not repeat codes.</h1>

            </div>
            <div className="max-w-[900px] text-justify bg-primary text-white p-5 rounded">
                <h1 className="font-bold">Q2: What are the different ways to manage a state in a React application?</h1>
                <h1>Ans: Normally we use useState hook for do state management of react, but there are other options to manage state. One Redux, Context api , redux toolkit and many more.</h1>
            </div>
            <div className="max-w-[900px] text-justify bg-primary text-white p-5 rounded">
                <h1 className="font-bold" >Q3: How does prototypical inheritance work?</h1>
                <h1 >Ans: It a system where an  object can inheritanc other objects properties and methods. In this process an object can share properties to other object. </h1>
            </div>
            <div className="max-w-[900px] text-justify bg-primary text-white p-5 rounded">
                <h1 className="font-bold">Q4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <h1>Ans: We do not use directly products = [...] , because we will have to change our state any time. setProducts() function will give an opportunity to change out state any time . But if you want to code as like products =[...] instead of setProduct() then will no abole to change state of data. </h1>
            </div>
            <div  className="max-w-[900px] text-justify bg-primary text-white p-5 rounded">
                <h1 className="font-bold">Q5: What is a unit test? Why should write unit tests?</h1>
                <h1>Ans: Unit test is a testing system in where every single module/ parts of codes are test if there have any  issue by developers mistake.</h1>
            </div>
        </div>
    );
};

export default Blogs;