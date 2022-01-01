import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JypbOAGDt5ordsCYdrLJuiGD6kBwwg7nyoZSFz6hVSyKKjNCkrIyIHDgXIqFWvX8W7YtNYwkIMmh55mooiccpP100QZBQ8gt5');
const Payment = () => {

    const { price } = useParams()
    const [paymentProduct, setPaymentProduct] = useState([])
    const { user } = useAuth();
    const email = user.email

    useEffect(() => {

        fetch(`https://salty-river-32904.herokuapp.com/allOrders/payment/${email}`)
            .then(res => res.json())
            .then(data => setPaymentProduct(data))
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    }, [email])

    return (
        <div>
            <div>

                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        paymentProduct={paymentProduct}
                        price={price}

                    />
                </Elements>

            </div>

        </div>
    );
};

export default Payment;