---
title: Understanding and using pseudocode
description: Learning all about pseudocode, how it's used in an industry setting and how to break down complex coding problems to identify better solutions
author: Written by Sophie
date: 2023-10-12
tags: "post"
image: \assets\pseudocode-library.jpg
imageAlt: A photo of library shelf full of books
alt: A blog about using pseudocode
---

This session was an introduction to pseudocode - what it is, how people use it and how it can be helpful when approaching complicated coding problems. 

You can see all the pseudocode I wrote for this session over on my codepen: <a href="https://codepen.io/SophieRegular/pen/poqOzvE">codepen.io/SophieRegular/pen/poqOzvE></a>

<strong>TASK 1: Adding comments & pseudocode to a task from a previous session</strong>

For this task we had to take a problem we'd solved in a previous lesson and break it down in a pseudocode explanation. I chose to break down the soft drinks task we'd completed in the Functions practical session. 

It was fairly simple to do. I started by defining what the problem was <em>("I need to define what the drinks order will contain: 
Create a variable with the two options - drink size & drink selection.

Then I need to change the drink selection out according to what the customer has selected. I can do this with a switch statement")</em>

Then I broke the switch statement down into segments <em>("Lemonade - the value is 'lemon', the drink is 'lemonade'. 

Has it been selected? Y/N
If 'N', break, move to the next drink.")</em>

Then I stated what I thought the desired return value would be - <em>("Create a return, Create a console.log to print the result - console.log(drinkOrder('medium', 'lemon'))")</em>

<strong>TASK 2: Producing a pseudocode response for a library organisation programme</strong>

Our next task was to pick a coding challenge from a list and write a pseudocode response to it. I picked a library-sorting programme which would tell you if you'd read a book or not from a list of books (array of objects)

In my solution - first I created the array of books itself. Then i iterated through the array, using a console log to output the list of everything. I then created an if statement, so that if a book was selected in the array, the read status would change to 'read'. Then I created an If Else statement to ask the function to return 'You have read this book', if the read status was 'read'. If it wasn't, the else output would be 'You haven't read this book yet'

--

Getting to write coding solutions out like this was really helpful. I can definitely forsee myself using pseudocode again like this in the future, as it's really good to break a problem down into steps and stops it feeling overwhelming when first presented with it. I'm sure that it's especially helpful in a professional setting, where you might have several bugs or complicated requests to sort out that need breaking down into manageable chunks. 