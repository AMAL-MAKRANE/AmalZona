import bcrypt from 'bcryptjs';
const data= {
    users: [
        {
            name: 'Amal',
            email:'admin@gmail.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'User',
            email:'user@gmail.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            
            name: 'UCF BLACK ',
            categorie:'oversized styles',
            image:'/images/P1.PNG',
            price:120,
            countInStock:2,
            rating:1.5,
            numReviews:12,
            description:'high quality product',

        },
        {
            
            name: 'UCF ORANGE ',
            categorie:'oversized styles',
            image:'/images/P2.PNG',
            price:150,
            countInStock:5,
            rating:4.5,
            numReviews:11,
            description:'high quality product',
        },
        {
           
            name: 'UCF GOLD ',
            categorie:'tome collection',
            image:'/images/P3.PNG',
            price:100,
            countInStock:0,
            rating:2.5,
            numReviews:10,
            description:'high quality product',

        },
        {
            
            name: 'UCF BLEU ',
            categorie:'tome collection',
            image:'/images/P4.PNG',
            price:80,
            countInStock:0,
            rating:1.5,
            numReviews:13,
            description:'high quality product',

        },
    ]
}
export default data;