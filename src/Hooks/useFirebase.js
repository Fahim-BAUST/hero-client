import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, getIdToken } from "firebase/auth";
import Swal from 'sweetalert2';


// initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerUser = (email, password, name, age, address, phoneNumber, drivingLicence, area, nidPicture, profilePicture, carName, carModel, carNamePlate, vehicleType, customer, isSafe, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database 
                saveUser(email, name, age, address, phoneNumber, drivingLicence, area, nidPicture, profilePicture, carName, carModel, carNamePlate, vehicleType, isSafe, customer, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                    })
                });
                navigate('/profile');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/profile");

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })

            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
            })
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, password, name, age, address, phoneNumber, drivingLicence, area, nidPicture, profilePicture, carName, carModel, carNamePlate, vehicleType, customer, method) => {

        const user = { email, password, name, age, address, phoneNumber, drivingLicence, area, nidPicture, profilePicture, carName, carModel, carNamePlate, vehicleType, customer };
        fetch('https://salty-river-32904.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    }
    return {
        user,
        isLoading,
        loginUser,
        registerUser,
        logout
    }
};

export default useFirebase;