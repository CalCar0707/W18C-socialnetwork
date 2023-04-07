const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;


// Connection string to local instance of MongoDB including database name-- INS#ERT DB NAME
const connectionStringURI = `mongodb://127.0.0.1:27017/`;

//Declare variable to hold connection
let db;

mongodb.connect(
    connectionStringURI,
    // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      // Use client.db() constructor to add new db instance
      //db = client.db();
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    }
  );
  
  app.use(express.json());