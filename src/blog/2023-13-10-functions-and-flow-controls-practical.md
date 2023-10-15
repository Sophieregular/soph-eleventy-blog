---
title: Functions and Flow Control in Javascript - Practical Session
description: Taking the knowledge we learned about functions from the previous session and completing more practical tasks
author: Written by Sophie
date: 2023-10-13
tags: "post"
image: \assets\functions-flow-control-practical.jpg
imageAlt: A photo of multiple people with soft drinks at a table with the javascript logo on top in the bottom right corner
alt: A blog about using functions and flow control in javascript in some practical exercises
---

This session was a continuation of our Functions and flow control work, but with some additional practical exercises. 

You can see all the code I wrote for this session over on my codepen: <a href="https://codepen.io/SophieRegular/pen/vYvazgR">codepen.io/SophieRegular/pen/vYvazgR></a>


<strong>Task 1 - Writing a function to output a percentage</strong>

My personal nemesis (percentages!) but I managed to do it. I declared the number and percentage arguments in the function, then asked it to return them multiplied and divided by 100. I then created a console log asking it to output the percentage function I'd created with numbers of my choosing to test that it worked (pleased to report that it did).

<strong>Task 2 - Creating a soft drinks selector with a switch loop</strong>

This task asked us to create a function that used a switch loop to output a drinks selection based on a drink size and a drink label. The switch worked as follows:

You have three options: Lemonade ('label: lemon'), Orangeade ('label: Orange'), & Cola (default)

If you don't pick lemon, the switch breaks and moves to orange. If you don't pick orange, the switch breaks goes to default (which is cola)

The returned output uses a template literal that states: <em>'you have ordered a $ {#size#} ${#drinklabel#}.'</em> - which is then called with a console log function that selects the size and drinks label you've requested.

<strong>Task 3 - Create a calculator!</strong>

Exactly as it states! We had to write a function that uses a switch loop to select an arithmetic operator and perform a calculation.

My first attempt at this didn't work - the structure I'd picked was correct, but the syntax and how I'd written it out was wrong. My second attempt <em>did</em> work, after I'd corrected this and written it out properly. 

--

Another session with some challenging tasks, but nothing too difficult to understand. I really enjoyed using the switch loops for these. It's really fun to use these functions to create systems that you can understand would be used in a practical day-to-day scenario (takes me back to building traffic lights and ferris wheels with flowcharts in flowol!)

