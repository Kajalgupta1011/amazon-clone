import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import db from '../../firebase';
import Header from '../Components/Header'
import moment from 'moment';
import Order from '../Components/Order';

function Orders({orders}) {
    const {data: session} = useSession();
    console.log(orders);
  return (
    <div>
        <Header/>
        <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your Orders</h1>

            {session ? (
                <h2> x Orders</h2>
            ) : (
                <h2>Please Sigin to see your orders</h2>
            )}
            <div className='mt-5 space-y-4'>
                {orders?.map(({id, amount, amountShipping, items, timestamp, images}) =>(
                    <Order/>
                ))}
            </div>
        </main>
        
    </div>
  )
}

export default Orders;
export async function getServerSideProps(context){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // get the uesrs logged in credetials...
    const session = await getSession(context);
    if(!session){
        return {
            props: {}
        };
    }

    //firebase db
    const stripeOrders = await db.collection('user').doc(session.user.email).collection('orders').orderBy('timestamp','desc').get();
//stripeOrders
    const orders =  await Promise.all(
        stripeOrders.docs.map(async (order)=>({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            imgaes: order.data().images,
            timestamp: moment(order.data().timestamp.todate()).unix(),
            items:(
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    );
    return {
        props: {
            orders,
        },
    }
}