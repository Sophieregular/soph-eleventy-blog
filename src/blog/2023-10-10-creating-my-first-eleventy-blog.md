---
title: Creating my first blog using Eleventy
description: All about my first foray into building a JAMstack site and how I managed to get this working (eventually)
author: Written by Sophie
date: 2023-10-10
tags: "post"
image: \assets\eleventy-logo-wide.jpg
imageAlt: Eleventy Logo
alt: A blog about my first eleventy post
---

<strong>Hello - welcome to my first Eleventy blog post!</strong>

I've built this as part of my 'working with static sites' assignment with the Coders' Guild. 

This week we learned about Static Sites & Static Site Generators. We learned how they work in comparison with other dynamic website setups - which usually work with a backend server, and handle more complex features & data. The SSG platform we're using to build our blogs is Eleventy - which is a generating platform part of a model that's known as the JAMStack, which stands for Javascript, API & Markup.

Though I was familiar with Static sites (being a child of the 90's and growing up with Web 1.0), I'd never used a Static Site Generator before and I'd definitely never used a JAMStack model to build a website. In our lesson we deployed a base Eleventy blog template via Netlify & Github, which we could then use to customise and set up for our own personal use. 

<img class="img-fluid col justify-content-center py-3" src="/assets/old-eleventy-blog.png" alt="My old Eleventy Blog" width="550" height="315">

<img class="img-fluid col justify-content-center py-3" src="/assets/old-blog-scripts.png" alt="Scripts & plug-in code on my old eleventy blog" width="550" height="315">

I <em>really</em> struggled with the template when I first encountered it. I'd never used nunjucks before and I was completely unfamiliar with using templating languages to build web pages, having previously only ever worked with html and css stylesheets. I didn't understand how the different folders responded to each other, how the _site folder worked and why I couldn't put content in it - because that's where the indexes were?!

I also found all of the additional plugins and features that came bundled with the template really overwhelming and confusing. Even after googling and reading documentation on the website, I didn't understand how the different scripts interacted with each other - which then also made it difficult to edit, because I wasn't sure what features were critical for all of the plug-ins to work. 

I submitted the original template (with a broken link to a logo, lol) for the week's assignment - but I knew if I was going to create anything even remotely functional, I was going to have to go back to basics and learn how the platform worked from the ground up. 

<div class= "py-3">
    <iframe width="280" height="176" src="https://www.youtube.com/embed/4wD00RT6d-g?si=V_jceMQliKlZZjWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class= "py-3">
    <iframe width="280" height="176" src="https://www.youtube.com/embed/7G5m6RDZ6cU?si=8JucHd77sF7KwQ6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class= "py-3">
    <iframe width="280" height="176" src="https://www.youtube.com/embed/BKdQEXqfFA0?si=yyqjtu0G8dLj2cM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


<div class= "py-3">
<iframe width="280" height="176" src="https://www.youtube.com/embed/kzf9A9tkkl4?si=Cs4vb0ToXcytkRAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class= "py-3">
<iframe width="280" height="176" src="https://www.youtube.com/embed/uzM5lETc6Sg?si=OC805HVlCaJ6N5AS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


I used a mix of these videos and tutorials online to go back and set my own blog up from scratch. Though it was a more time consuming process - I'm <em>really</em> thankful that I took the time out to do it. I learned so much through doing it - including using a lot of processes and languages I'd never used before like node.js, json, javascript configuration as well as nunjucks itself.

The bit i'm most proud of is that the blog itself is a functional template! It's not entirely hard-code free (we're using Bootstrap as our styling framework, so all of the styling is 'inline' so to speak) - but the headers and footers are complete independant from each page, set up as nunjucks templates in the _includes folder. The templates all talk to each other using the {#%- includes -%#} tags which meant that I didn't have to copy and paste elements over and over again - I could just include each template at a time, as and when I needed it. 

Using front matter and templates like this has been a total gamechanger for me. Being able to code a blog platform from scratch that I don't have to manually update every time I make style changes to something is really cool. In the future, I would like to learn more CSS & Sass to be able to more the styling more global and customisable. 
