import React from 'react';
import { Link } from 'react-router-dom';
import TypingTextAnimation from 'react-typing-text-animation'
import useAuth from '../../Hooks/useAuth';

const Home = () => {

    const { user } = useAuth();
    return (

        <div className="container mt-5">
            <div className="row d-flex align-items-center">

                <div className="col ">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.ibb.co/LQ7tm2Y/big-isolated-motorcycle-colorful-clipart-set-flat-illustrations-various-type-motorcycles-1150-37322.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/bRcrTg9/stylish-black-woman-car-salon-1157-21402.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/dQMGwvw/woman-santa-hat-by-red-car-car-showroom-1303-25593.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col">
                    <h1><span style={{ color: "tomato" }}><TypingTextAnimation reverse="true" text='Welcome To Hero Rider' /></span> </h1>
                    <p className='mt-4'>Hero Rider is a ride sharing startup. A driver who has his/her own or rented car can give rides to other people. They also provide driving lessons services . Please Stay with us . For more queries you can contact us</p>
                    <div className="col mt-3 mb-4 ">
                        <button className="border-0 bg-white" onClick={() => {
                            window.open(
                                'https://www.facebook.com/ashhabf50',
                                '_blank'
                            );
                        }} ><i style={{ color: "#4267B2" }} className="fab fa-facebook  fs-3 "></i></button>

                        <button className="border-0 bg-white" onClick={() => {
                            window.open(
                                'https://www.linkedin.com/in/fanhim/',
                                '_blank'
                            );
                        }} ><i style={{ color: "#0a66c2" }} className="fab fa-linkedin  fs-3"  ></i></button>

                    </div>




                </div>
            </div>

            {!user?.email && <div className='text-center mt-4'>
                <h1 className='mb-3'>Please register Yourself </h1>
                <Link to='/registration'> <button type="button" className="btn btn-danger fw-bold">Register</button></Link>

            </div>}




        </div>





        // <div className='text-center mt-4'>

        //     
        // </div>
    );
};

export default Home;