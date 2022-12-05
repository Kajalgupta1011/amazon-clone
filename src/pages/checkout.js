import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckOutProduct from '../Components/CheckOutProduct'
import Header from '../Components/Header'
import { selectItems } from '../slices/basketSlice'
function checkout() {

    const items = useSelector(selectItems)
  return (
    <div className='bg-gray-100'>
        <Header/>

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* left section */}
            <div className='flex-grow m-5 shadow-lg'>
                <Image
                src='https:/links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit='contanin'
                />
                <div className='flex felx-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your amazon Cart is empty' : "Shopping Cart" }
                    </h1>

                    {items.map((item, i)=>(
                        <CheckOutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                        />
                    ))}

                </div>
            </div>
           

            {/* right section */}
            <div>
                    
            </div>
        </main>
    </div>
  )
}

export default checkout