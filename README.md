# CS411-Project2
Instant Messaging application implementation for CS411 Project 2


The project consists of client and server sides. In the client side, user interface was implemented with React JS. To install the necessary packages, one should be run the “npm install —legacy-peer-deps”. After installing the packages, “npm start” command should be run.  In the server side, back-end side was implemented with Java Spring Framework. To make it work, one should install the maven dependencies and run the project. The project sets up the database automatically but MySQL should be configured. The default username is "root" and password is empty. A schema called "im_project" should also be created before running the server. The order of running servers should be AuthService, Messaging, and Gateway. Servers should be run before the client.
