import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51SctCFLDEGxpjCDUcSZIIR80vT8pJ02HZuUScsZV1FHBTjwm3xhrg4PBB5ED3h8tIFm1332ZR7ehdcgSHXCceKek00K1IUPPbB'
)

export default stripePromise;