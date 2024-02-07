 This is a simple Node.js application that interacts with MongoDB using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.

 ## Intallation
 git init to establish a git repository within the directory. 
 
npm init -y to create the package.json file.

 npm install to install the application dependencies:
body-parser  dotenv  express  mongodb  mongoose  nodemon, morgan.

Create a server.mjs, .env, folders(db, models, routes.), .gitignore and README.md file.
Downloaded and create client.rest file to test my apllication routes. 

npm run test to run the application on the console.

Connect the local to the remote repository: 
1- git add . , 
2- git commit -m "comment", 
3(fom github) -git remote add origin https://github.com/ylieumo/SB-MongoDB-Database-Application.git
git branch -M main
git push -u origin main

## Folder Structure
index.js: Main entry point of the application.
.gitignore: contains confidential files.
models/: Contains Mongoose schema definitions for users, questions, and comments.
routes/: Contains Express routes for users, questions, and comments.
middlewares/: Contains middleware functions .

configure mongodb connection in server.mjs.


perform CRUD(create, read, update, delete) operations in routes folder and test in client.rest file.

sample error image 
![alt text](image.png)







  

  