/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */

let num = [1,2,3,4,5,]
console.log(num)


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

let me = {
    name: "Danilo",
    surname: "De Matteis",
    emailAdress: "dematteis_danilo@yahoo.it",
    age: 31, 
};
console.log(me)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */

person.drivingLicense = true
// person["drivingLicense"] = true




/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */

delete me.age;
console.log(me)


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */

let secondPerson = {
    name: "Second",
    surname:"Surname",
    email: "second@strive.school"
}


/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
/* WRITE YOUR CODE HERE */


let totalShoppingCart = 60;
let price;
let user = 40;

if (user > 50) {
    console.log("the cost will be 10£");
} else {
    (user < 50)
        console.log(" you will have free shipping");
    }



/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */


let totalShoppingCart2 = 60;
let price2;
let user2 = 40;
let discount = "20%";

if (user2 > 50) {
    console.log("you will have a discount of 20% of the price that 1'£");
} else {
    (user2 < 50) 
        console.log("you will have a discount of 20%,and free shipping");
    }




/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */

const car = {
    brand:"mercedes",
    model :"c",
    licensePlate:"ab123",
}
let car1 = {};
let car2 = {};
let car3 = {};
let car4 = {};
let car5 = {};
let cargroup = [car1,car2,car3,car4,car5];
for (i=0; i < cargroup.length; i++) {
    Object.assign(cargroup[i], car);
    cargroup[i].licensePlate += 1;
    return cargroup[i]
}


/*let car1 = { brand: "Toyota", model: "Yaris", licensePlate: "AZXSASS"}
let car2 = {
    ...car1,
    licensePlate: "Whatever"
}
let car3 = {
    ...car1,
    licensePlate: "Whatever1"
}
let car4 = {
    ...car1,
    licensePlate: "Whatever2"
}
let car5 = {
    ...car1,
    licensePlate: "Whatever3"
} */


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */

let carsForRent = [ car1, car2, car3, car4, car5]


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */


carsForRent.pop()
carsForRent.shift()


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */

console.log(car.brand,car.model, car.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */


let carsForSale = [car1,car5, car2]
let totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
}

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

console.log(carsForSale[0].licensePlate)
console.log(carsForSale[1].licensePlate)
console.log(carsForSale[2].licensePlate)


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/