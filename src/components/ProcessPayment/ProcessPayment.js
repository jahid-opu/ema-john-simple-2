import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe(

    'pk_test_51J3DV1LeHSH0Z5hYpUQH5CijTgHeknBD281DkX4ZdyTUXDUOG4zncssJgv9xMYmFtYVwkgROjpvvfqppbTMk1Wpg004y1ilIkV'
);

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;