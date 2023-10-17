---
title: Loops & Arrays in Javascript - Practical
description: A practical session using the things we learned about using Loops & Arrays in the previous session.
author: Written by Sophie
date: 2023-10-14
tags: "post"
image: \assets\loops-and-arrays-practical.jpg
imageAlt: A photo of some shopping trolleys with the javascript logo on top in the bottom right corner
alt: A blog about completing practical tasks using
 loops and arrays in javascript
---

This session was a practical lesson using the knowledge we learned about loops and arrays in the previous session.

You can see all the code I wrote for this session over on my codepen: <a href="https://codepen.io/SophieRegular/pen/OJrYQgR">codepen.io/SophieRegular/pen/OJrYQgR></a>

<strong>Task 1 - Creating a programme for a Shopping Cart</strong>

This task, we had to write a programme for a shopping cart that would calculate a total price - similar to shopping carts or baskets you would traditionally find on most websites. Our instructions for the the task were as follows:

Create a function that takes 1 argument (the cart array).
Create a variable inside the function called totalPrice.
Loop through each item in the array and add the value of the item to the total price, remembering to account for the quantity.
Return totalPrice.
console.log() the returned value.

To do this, we created an array of objects, that contained different items with different categories (i.e - name: "tomatoes", type: "food", quantity: 3 , price: 0.50). We then created a 'for' loop that for each item ran a function that would multiply the value you of each item by it's quantity, then add it to the basket's total. 

<strong>Task 2 - Adding a food discount feature to the Shopping Cart</strong>

As mentioned above - our next task was to add a 20% discount to any items in the basket that had the label of 'food' attached. To do this, we set the discount with a const variable (called 'foodDiscount'), then used an 'if' statement with some logic to say that if the item type === food, the function should add the 20% discount to the item. The itemValue was then added to the totalPrice, and the totalPrice was then returned. 

<strong>Task 3.1 - Applying the discount to any item type</strong>

Similar to the above - but this time taking the food discount and adding it to any item in the basket, using some logic and an 'if' statement. 

To start with we passed 3 arguments into the getTotal function (cart, type, foodDiscount), then we used ' if (type === 'any' || item.type === type)' to apply the foodDiscount to any items in the cart. 

<strong>Task 3.2 - Accounting for the quantity with boolean logic</strong>

We were then asked to pass the item's 'quantity' into the function as an additional argument. If the overall price of an item total (taking into account it's quantity) was between 2 or 5 (lowPrice and highPrice), we would ask the function to push it to an empty array, called arrItems[]

<strong>Task 4 - Writing an average calculator for the mean, median and mode</strong>

This task was really hard! First, we were asked to write out an array of numbers. We were asked to write three functions - one that calculated the mean, one that calculated the median and one that calculated the mode. 

Once we'd completed that, we were then asked to create an average calculator programme using a switch function to select a specific type of function. We set the mean as the default, then added switches and breaks for the median and the mode. The calculator was then operated by passing the array variable ('numArray') and the function of choice into a console.log at the end

--

I found this session particularly challenging not necessarily just for the code, but for the maths! The process was extremely helpful though for putting these examples into a practical use case, and getting to work on tasks that could be expected to be found out in the industry. (Plus my math knowledge was better than I thought it was)

Something I still struggle to remember is to loop through objects and arrays properly when writing out functions and logic to apply to them, as well as declaring arguments that I want to apply something to at the start. The more code i'm writing, the more familiar I'm becoming with the structure of these to remember the process properly - however in this session it did lead to some of my attempts not being declared properly, or not being iterated through. I will remember to look out for this in the future!