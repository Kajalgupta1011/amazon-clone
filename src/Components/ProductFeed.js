import React from 'react'
import Product from './Product'
function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        
        {products.slice(0,4).map(({id, title, price, description, category, image}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
        <img className='md:col-span-full pl-5 pr-5' src="https://scontent.fbom66-1.fna.fbcdn.net/v/t39.30808-6/314409563_502324288583931_4292807028279368452_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_ohc=LsC6g_TghKYAX_Nx5oy&_nc_oc=AQlktGtoMKBlhiHctS1DZx4lbMxm99MNYF4ZI6DordBNPr4T1tlyCav9IDCQ7MEM4k0&_nc_ht=scontent.fbom66-1.fna&oh=00_AfAd3xYwEY6XJpd27_2IePDZtzjFfaTpcDAEtFqY4F6akg&oe=63924CBB" alt="" />
        <div className='md:col-span-2'>
            {products.slice(4,5).map(({id, title, price, description, category, image}) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
        </div>
            {products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
    </div>
  )
}

export default ProductFeed