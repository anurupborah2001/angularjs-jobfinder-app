# Angular JS JOB Finder Applciation
    This is a demo application using MEAN.JS(MongoDB , Express, Angular JS and Nodee.js) Framework 
    
    Needed to install MongoDB
  
Steps to Run MongoDB(as per Windows) : 
- Create data/ db folder under C:\mongodb\
- Create log folder under C:\mongodb\
- Install MongoDB as  a Service
mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongodb.log --logappend --rest --install

Start Mongo DB Service: 
 ----------------
 net start mongodb
 
 Stop MongoDB Service
 -------------------
 net stop mongodb
 
 Command to connect to MongoDB
 -------------------------------
 mongo
 
 Before running the project need to install the dependencies using bower
 
 Install the bower as :
 npm install -g bower
 
 Install Grant :
 npm install -g grunt-cli
 
 Installing the Node modules
 --------------------------
 npm install
 
 Running the Applciation
 --------------------------
 grunt
