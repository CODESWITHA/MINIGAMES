# 👾 MINIGAMES! 🎲

This is a responsive web page that I created that hosts 2 minigames. In this project I made an effort to use Vanilla JavaSccript on all 3 pages. 

I started off by creating a plan 
Features:
	• Main page - title, has two buttons that show a modal window providing the description of the games. They also both have an anchor link to the actual game- can click X or click anywhere outside of the modal to exit modal screen
	• Game 1- Guess My Number
	• Game 2- Too 100 and beyond
	• Both game pages will have a home button to go back to main page

Tips 
	- have a class for every element as you may need to select it
	- Make use of the .hidden (display: none} element - you do not need to initially add it to the html, you can create it in css and then when used in JavaScript if you inspect the Elements you will see that it had been added on
	
## What I learned 

Making the card as an active button for overlay

![image](https://user-images.githubusercontent.com/92884422/151267453-e5303c55-1422-4591-86dc-d8036b1d7a5e.png)

My aim was to make these cards into buttons that showed a modal window overlay. Within my HTML code I made these cards using <divs> and <sections> however as I wanted them The buttons in disguise it would be better for me to use the button element in HTML.

I had to make a separate div so I can style the overlay. I also added a hidden class on my css so I activate it later in my JavaScript page.

I started by giving it a class then as I knew It would be the only element with these specific styles I changed it to an Id!

  Learning about z-index
  
  As I was using an overlay- my search lead mea onto learning about z-index and their positioning. This desciption was handy in my learning:
  
  'The z-index property specifies the stack order of an element.
An element with greater stack order is always in front of an element with a lower stack order.
Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements).' 
  
  Source:  https://www.w3schools.com/cssref/pr_pos_z-index.asp> 
  
  Initial 
  
  ![image](https://user-images.githubusercontent.com/92884422/151268101-6a879a1c-30b4-441f-84ea-1de011ea959e.png)

  Solved by changing z-index of overlay
  
  ![image](https://user-images.githubusercontent.com/92884422/151268379-1d585328-b15a-4ca9-b5b3-bbc36c933d91.png)

 Responsiveness of Overlay
  
  I was orginally having troubles with the sizing of the overlay on a smaller width. i found out that using fixed position wasn't doing my code justice so then I cahanged the overlay to position: absolute instead.
  
  Initial
  
  ![image](https://user-images.githubusercontent.com/92884422/151268797-71892e01-2365-4b2e-a174-cc35d6940baf.png)

  Fixed - I also found that using the code below works perfectly for centering  elements with position: absolute as well as position: relative. 
  
  transform: translate (-50%, 0);
  left: 50%;
  
  
  
  ![image](https://user-images.githubusercontent.com/92884422/151268860-aea5dfa2-df1f-47cc-856e-21ecdbe58c13.png)

  
  
  Error Message in JavaScript
  
  I was receiving this error message in JavaScript and I initally couldn't figure out why.
  
  'Error message:scriptt.js:22 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')'
  
  I found a solution on stackoverflow. The problem was I was linking my script page at the top of my html, so the JavaScript would load before the html body did. Therefore, the solution was to move the script link to the end of my html page at the end of the body tag.
  

  JavaScript
  
  When writing the code for JavaScript, I tried to excute the DRY rule as much as I could. This means turning code into functions when I had repeated a block of function code more than once 
	
## Summary
  
  Overall I am happy with the way the project turned out. Using Vanilla JavaScript I did encounter a few hiccups however with the use of stackoverflow, and tutorials on youtube I managed to overcome them.
  
  Going forward I will like to learn more about other Vanilla JavaScript logic that I can use to build small projects as well as looking into CSS Grids. this will help me with making responsive designing much smoother and easier for me.
  
  
## Contributions & Disclaimer
 This code and design was inspired by Jonas Schmedtmann in his Morden JavaScript course on Udemy. I have wrote the main parts of code by myself with some influence and help from Jonas' tutorials.<br>
	In the '100 and Beyond' game, the screenshots show they player winning when the score reaches above 20. This is only for demo purposes.
  

  
  


