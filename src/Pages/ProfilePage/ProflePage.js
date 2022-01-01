import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const ProflePage = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`https://salty-river-32904.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(error => {

            })
    }, [])
    const { user } = useAuth();

    let package1 = 100;
    let package2 = 200;

    console.log(userData);
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img className='img-fluid w-100 rounded-pill ' src={userData?.profilePicture} alt="" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center mt-4">
                    <h3>Name: {user?.displayName}</h3>

                    <h5>Email: {user?.email}</h5>
                    <h5>Address: {userData?.address}</h5>
                    <h5>Vehicle Type: {userData?.vehicleType}</h5>
                    <h5>User Type: {userData?.customer}</h5>

                    {userData?.customer === "learner" && <div className='text-center mt-4'>
                        <h1 className='mb-3'>Please choose any package </h1>
                        <Link to={`/payment/${package1}`}> <button type="button" className="btn btn-danger fw-bold">{package1} $</button></Link>
                        <Link to={`/payment/${package2}`}> <button type="button" className="btn btn-danger fw-bold">{package2} $</button></Link>

                    </div>}
                </div>
            </div>
        </div>

    );
};

export default ProflePage;