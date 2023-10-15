---
title: Loops & Arrays in Javascript
description: Learning about loops, arrays and objects - how to use them, how to access them and how to put them into practice in our code
author: Written by Sophie
date: 2023-10-13
tags: "post"
image: \assets\loops-and-objects.jpg
imageAlt: A photo of a selection of baking ingredients with the with the javascript logo on top in the bottom right corner
alt: A blog about loops and arrays in javascript
---

This session was focused on arrays, objects and using loops to cycle through and select data within them.

You can see all the code I wrote for this session over on my codepen: <a href="https://codepen.io/SophieRegular/pen/mdayXqr?editors=0012">codepen.io/SophieRegular/pen/mdayXqr?editors=0012></a>

<strong>TASK 1 - Writing a loop that console logs 1 - 12</strong>

Really easy and simple! I just wrote a for loop that set 'i' as 0, set 'i' as less than 12, then asked javascript to increment it by 1 until it matched.

<strong>TASK 2 - Writing a loop that outputs the multiplication of 7 up to 7 x 12</strong>

Slightly more complicated. Using the loop from the previous task, I then added a console log that displayed the multiples of 7 and asked javascript to multiply i by 7. Justin (the session tutor) also showed us how to make this programme dynamic by setting the multiplyer and endpoint as variables, then using those variables as the values instead of a hard-coded number. 

<strong>TASK 3 - writing an array of my favourite foods and printing them to the screen</strong>

Dead simple again! I just created an array, added a list of my favourite foods to it ('sushi','ice cream', 'scones', 'snacks'), then I created a console.log to print them.

<strong>TASK 4 - writing a for loop that prints out a list of my favourite food</strong>

Similar to Task 3 - but instead of just printing it out with a console log we had to write it in a for loop format. 

<strong>TASK 5 - creating an object for a recipe list and writing a letsCook function</strong>

Here, we had to create an object that contained several different categories of information for a food recipe. I created a recipe for some carrot cake. In this recipe, there were several key value pairs ('title : Carrot Cake, Servings: 12'), and arrays within the object for different categories ('Ingredients: ['Carrots', 'flour', 'brown sugar', 'cinnamon', 'mixed spice', '2 eggs', 'dried fruit', 'oil',]'), 

After we set this object up, we then had to iterate into the object and find the title - so that we could write a function that output the name of the recipe once it was called. The outcome of this was a function called 'letsCook', which when activated would return the phrase 'I'm hungry, lets cook ${title!}' 

--

Overall, this session was really helpful for gaining an understanding of navigating arrays and objects. By the end of it I was a lot clearer about how they worked, and the different methods you can use to access them. A lot of the examples we used were fairly simple, but I can definitely see how some of these lists these could get really complicated, really quickly - so knowing how to properly break them down and how to add and remove data from them is really good!