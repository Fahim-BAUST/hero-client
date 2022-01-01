import { Box, Button, Container, Grid, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import Font from 'react-font';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { user, registerUser, isLoading, } = useAuth();
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const [isRider, setIsRider] = useState(false)


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        newLoginData.isSafe = "safe"
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Your password did not match`,
            })

            return
        }

        const customer = isRider ? "rider" : "learner";

        registerUser(loginData?.email, loginData?.password, loginData?.name, loginData?.age, loginData?.address, loginData?.phoneNumber, loginData?.drivingLicence, loginData?.area, loginData?.nidPicture, loginData?.profilePicture, loginData?.carName, loginData?.carModel, loginData?.carNamePlate, loginData?.vehicleType, customer, loginData?.isSafe, navigate)

        e.preventDefault();
    }
    const loginTrue = () => {
        Swal.fire(
            `Success `,
            `Welcome ${user.displayName} `,
            'success'
        )
    }

    const handleClickedChange = e => {
        e.target.checked ? setIsRider(true) : setIsRider(false);
    }
    return (
        <Box>
            <Container>
                <Grid container >
                    <Grid className="text-center d-flex align-items-center justify-content-center" item xs={12} md={6}>
                        <div >
                            <Font family="Mochiy Pop One">
                                <h1 style={{ textAlign: "center", paddingTop: 3, marginTop: 20, marginBottom: 40, color: "#3F000F", fontSize: "30px" }}>Please Register ( {isRider ? "Rider" : "Lesson learner"})</h1>

                            </Font>
                            {isLoading && <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>}

                            <input onChange={handleClickedChange} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label ms-2" htmlFor="gridCheck1">
                                RIDER?

                            </label>


                            <form onSubmit={handleLoginSubmit}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="name" label="Full Name" variant="standard" name="name" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-envelope-open fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="email" label="email" variant="standard" name="email" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="number" label="Age" variant="standard" name="age" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Address" variant="standard" name="address" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="number" label="Phone Number" variant="standard" name="phoneNumber" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                {isRider && <>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Driving licence picture link" variant="standard" name="drivingLicence" onBlur={handleOnBlur} />
                                    </div>
                                    <br />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Area" variant="standard" name="area" onBlur={handleOnBlur} />
                                    </div>
                                    <br />
                                </>}
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="NID picture Link" variant="standard" name="nidPicture" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label=" Profile picture Link" variant="standard" name="profilePicture" onBlur={handleOnBlur} />
                                </div>
                                <br />
                                {isRider && <>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Car or Bike Name" variant="standard" name="carName" onBlur={handleOnBlur} />
                                    </div>
                                    <br />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Car or Bike Model" variant="standard" name="carModel" onBlur={handleOnBlur} />
                                    </div>
                                    <br />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Car or Bike name plate" variant="standard" name="carNamePlate" onBlur={handleOnBlur} />
                                    </div>
                                    <br />
                                </>}
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-user-circle fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="text" label="Vehicle Type(Car or Bike?)" variant="standard" name="vehicleType" onBlur={handleOnBlur} />
                                </div>
                                <br />


                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-key fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="password" label="password" variant="standard" name="password" onBlur={handleOnBlur} />
                                </div> <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fas fa-key fs-5 mt-3 me-2"></i> <TextField id="standard-basic" type="password" label="repeat password" variant="standard" name="password2" onBlur={handleOnBlur} />
                                </div>


                                {user?.email && loginTrue()}

                                <Button sx={{ mt: 2 }} type="submit" variant="contained">Register</Button>
                                <p className="mt-2" style={{ fontSize: "15px" }}>already registered? <NavLink className="text-decoration-none fw-bold" to="/login">login</NavLink></p>

                            </form>

                        </div>


                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img className="img-fluid" src="https://i.ibb.co/brQqBV0/4957136.jpg" alt="" />

                    </Grid>

                </Grid >

            </Container >
        </Box>
    );
};

export default Registration;