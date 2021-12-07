# AmalZona, Ecommerce Website

![screen 1](https://user-images.githubusercontent.com/68642784/145059047-4c267305-4b5f-4db3-b90f-5bbe362a07ad.PNG)


fully-functional e-commerce website exactly like amazon build  using MERN stack (MongoDB, ExpressJS, React and Node.JS).
# Run locally
### Run Backend
 ```sh
  $ npm install 
  $ npm start
  ```
### Run Frontend
   ```sh
 # open new terminal
  $ cd frontend
  $ npm install
  $ npm start
  ```
### Seed Users and Products
* Run this on chrome: http://localhost:5000/api/users/seed
* It returns admin email and password
* Run this on chrome: http://localhost:5000/api/products/seed
* It creates 6 sample products
### Admin Login
* Run http://localhost:3000/signin
* Enter admin email and password and click signin

# the different interface of the website
##  HomeScreen: 
the first page contains the different product "glasses"  with their name,  reviews and price.

![screen 2](https://user-images.githubusercontent.com/68642784/145059069-f72ff60e-704f-4cdd-a304-f14ac0564804.png)
## ProductScreen :
this page contains the details of the product selected like  name, reviews, price, description, also contain the div that allows the user to add the product to the card  with the amount selected, the staus show if the product is available or not in the stock. 

![screen 3](https://user-images.githubusercontent.com/68642784/145060144-057d1229-d49c-4d3e-862d-2372bd7a7a4e.PNG)

## CartScreen :
this page contains the diffrents products selected or added to the card, in this page we can change the amount of product QTY , delete products, also the Subtotal of all the products selected,  also proceed to checkout.

![screen 4](https://user-images.githubusercontent.com/68642784/145061019-3eb8b113-6838-46f3-9ec5-cfcb927161f3.PNG)
## SigninScreen : 
sign in page allows the user to sign in with an email and password that already exist in database users data.

![screen 5](https://user-images.githubusercontent.com/68642784/145061598-8216391e-25ce-49ef-bd4e-fc5be390ff31.PNG)



