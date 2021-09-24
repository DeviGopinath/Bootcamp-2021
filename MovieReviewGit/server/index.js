// Core Imports
const express = require("express");
const cors = require("cors");

const app = express();

const dbService = require("./dbService");

app.use(express.json());
app.use(cors());



app.post("/add", async (req, res) => {

  const db = dbService.getDbServiceInstance();
  const { movie, review } = req.body;
  
  try {
    const response= await db.insertReview(movie, review);
    
    if(response=== true){
      res.status(200).json({
        status: "SUCCESS",
      });
    }else{
      res.status(200).json({
        status: "FAILURE",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
  
});

app.patch("/getreview", async (req, res) => {

  const db = dbService.getDbServiceInstance();
  const {moviename} = req.body;
  // console.log(moviename);
  let review = '';
  try {
    review = await db.getReviewByMovie(moviename);
    // console.log(review)
    if(review!= undefined){
      res.status(200).json({
        review:review,
        status: "SUCCESS",
      });
    }
    else{
      res.status(200).json({
        
        status: "FAILURE",
      });
    }
  } 
  catch (error) {
    res.status(500).json({
      error: error,
    });
  }
  
  
});


app.listen(4000, () => {
  console.log("Running on port 4000");
});
