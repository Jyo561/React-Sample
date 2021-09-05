import React from "react";
import pic1 from "../hobbies/images.jpeg";
import pic2 from "../hobbies/download (1).jpeg";
import pic3 from "../hobbies/download.jpeg";
import pic4 from "../hobbies/download (2).jpeg";

const hobby = () => {
   return(
     <>
   <br />
     <br />
     <h2 style={{marginLeft:40,color:"#ffc93c"}}><a href="blank" name="blank">What I Love To Do:</a></h2>
     <div className="pet">
       
       <br />
       <br />
       <br />
       <div className="">
         <br />
         <br />
       <img src={pic1} alt="" className="im" /><br />
       <h5 className="qw">Coding</h5>
       <br />
       <img src={pic2} alt="" className="im" /><br />
       <h5 className="qw">Singing</h5>
       </div>
       <div className="som">
         <br />
         <br />
       <img src={pic3} alt="" className="im" /><br />
       <h5 className="qw">Researching about Astrophysics</h5>
       <br />
       <img src={pic4} alt="" className="im" /><br />
       <h5 className="qw">Innovating </h5>
       </div>
     </div>
     </>
);
};

export default hobby;