import React from 'react'
import './App.css';
import {APIService} from './api.service'



function apiCall(e){

  e.preventDefault();

  console.log(e.target.movie.value);
  console.log(e.target.review.value);
  let data={movie:e.target.movie.value,review:e.target.review.value};
  if(data.movie==='' || data.review===''){
    document.getElementById("reviewadded").style.display="none";
    document.getElementById("sectionSubmit").style.display="none";
    document.getElementById("fillboth").style.display="block";
    document.getElementById("sectionmoviereview").style.display="none";
    
  }
  else{
    APIService.addReview(data).then((response)=>{
      if (response.status === "SUCCESS") {
                document.getElementById("reviewadded").style.display="block";
                document.getElementById("sectionSubmit").style.display="none";
                document.getElementById("sectionmoviereview").style.display="none";
                
                
                
              } else {
                document.getElementById("sectionSubmit").style.display="none"
                document.getElementById("reviewnotadded").style.display="block"
                document.getElementById("sectionmoviereview").style.display="none";
              }
          
        })
  }
}
function landingPage(){
  document.getElementById("reviewnotfetched").style.display="none";
  document.getElementById("reviewnotadded").style.display="none";
  document.getElementById("reviewadded").style.display="none";
  document.getElementById("sectionSubmit").style.display="block";
  document.getElementById("reviewfetched").style.display="none";
  document.getElementById("sectionmoviereview").style.display="block";
  document.getElementById("fillboth").style.display="none";

  document.getElementById("moviename").innerHTML='';
  
} 

function apicallGet(e){
  // console.log(e);
  e.preventDefault();
  console.log(e.target.moviename.value);
  let data={moviename:e.target.moviename.value}
  if(data.moviename===''){
    document.getElementById("reviewadded").style.display="none";
    document.getElementById("sectionSubmit").style.display="none";
    document.getElementById("fillboth").style.display="block";
    document.getElementById("sectionmoviereview").style.display="none";
  }
  else{
    APIService.getReview(data).then((response)=>{
      if (response.status === "SUCCESS") {
                document.getElementById("sectionSubmit").style.display="none";
                document.getElementById("sectionmoviereview").style.display="none";
                document.getElementById("displayreview").innerHTML=response.review;
                document.getElementById("reviewfetched").style.display="block";
                
                
              } else {
                document.getElementById("sectionmoviereview").style.display="none";
                document.getElementById("sectionSubmit").style.display="none";
                document.getElementById("reviewnotfetched").style.display="block";
               
              }
          
        })
  }
}


function App() {
  
  return (
    
  <>
 
    <div className="container" id="sectionSubmit">
      <h2>Add a Review</h2>
        <form onSubmit={apiCall} >
          <label htmlFor="movie">Movie</label>
          <input type="text" id="moviename" name="movie" placeholder="Movie.." autoComplete= 'off' />
          <br /><br />
          <label htmlFor="review">Review</label>
          <input type="text" id="moviereview" name="review" placeholder="Your review.." autoComplete="off" />
          <br /><br />
          <button id="btnsubmit" type="submit" >Submit</button>
          <br />
        </form>

    </div> 

    <div className="container" id="reviewadded"  >
        <h3>Your review was added succesfully!</h3>
        <button onClick={landingPage} id="btnok"  >Ok</button>
    </div>

      <div className="container" id="reviewnotadded"  >
        <h3>Your review was not added!</h3>
        <button onClick={landingPage} id="btnok"  >Ok</button>
      </div>
        
    <div className="container" id="fillboth"  >
      <h3>Please fill the fields!</h3>
      <button onClick={landingPage} id="btnok"  >Ok</button>
    </div>

    <div className= 'container' id= 'sectionmoviereview'>
          <form onSubmit={apicallGet} >
            <h2>Get a Review</h2>
            <label htmlFor="movie" id= 'movielabel'>Movie</label>
            <input type="text" id="movieinput" name="moviename" placeholder="Movie name.." autoComplete="on" />
            <button id="btnsubmit" type="submit">See Review</button>
          </form>
    </div>

    <div className="container" id="reviewfetched"  >
      <h3 htmlFor="review" className ="label">Review</h3>
      <p  id="displayreview" name="review" disabled /><br />
      <button onClick={landingPage} id="btnok"  >Ok</button>
    </div>


      <div className="container" id="reviewnotfetched"  >
        <h3>We could not find a review for this movie :(</h3>
        <button onClick={landingPage} id="btnok"  >Ok</button>
      </div>

    </>
)
}

export default App;
