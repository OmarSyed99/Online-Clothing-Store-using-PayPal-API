COMP 2406 Winter 2019
Assignment 3: Real-Time Collaboration with Web Sockets
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Student;

Wajahat Ghumman
101062330
wajahatghumman@cmail.carleton.ca

Student;

Omar Syed
101078026
omarsyed@cmail.carleton.ca

///////////////////////////////////////////////////////////////////////////////

version node.js

Install: sudo apt install npm


Install: npm install socket.io 

Please use Google Chrome (its less glitchy)

testing: http://localhost:3000/curling.html



\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

sources...

profs base code
tutorial 5

//////////////////////////////////////////////////////////////////////////////

Collision and Synchronization

We worked on both parts and both parts work but are glitchy. We also talked to the TA about it
but could not figure out what is the problem. On certain PCs it not that glitchy and stone collides and it
is synchronizing perfectly on other browser windows.
Collision and Synchronization are both working fine on our ends.
Having some issue with collision. since I was trying to reduce the amoount of lag (which was alot) I only emitted the stonebeing moved data, so the collision is not 
working fully at the moment.
Each browser can switch the player turn if the whosTurnItIs = shootingQueue.front().getColor() is removed. But will be glitchy
It was very hard to do alot of task without making the program super glitchy 
Had to change up the whole coding format because it was barley able to run on my partners computer 

Everything else should be good.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




