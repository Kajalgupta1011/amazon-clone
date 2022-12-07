module.exports={
    experimental:{
        appDir: true,
    },
    images:{
        domains: ['links.papareact.com', 'fakestoreapi.com','m.media-amazon.com']
    },
    env:{
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
};