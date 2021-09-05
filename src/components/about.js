import React from "react";
import Pic from "../IMG-20200118-WA0000.jpg";

const About = () => {
   return(
<div class="container">
<br /><br /><br />
 <div className="row">
        <div className="col-md-8 ty">
          <img className="center" src={Pic} alt="blank" width="20%" height="40%" />
          <br /><br />
          <h2 style={{marginLeft:40}}>About :</h2>
          <p style={{marginLeft:40}}>I am a tech-enthusiast and also a passionate programmer. I spend almost 4 hours a day on doing stuffs related to coding, like learning new Languages, getting info about new tech and researching about ways to make possible heavier tasks on low end hardware. Also I have a 2 star rating on Codechef which I hope to increase in near future.</p>
        </div>
        
        <div className="col-md-4 hj">
          <h2>Personal Details</h2>
          <h5 className="ret">Name<br />Jyotiraditya Kuanar</h5>
          <h5 className="tex">Age<br />19 Years</h5>
          <h5 className="tex">Date of Birth <br /> 10.03.02</h5>
          <h5 className="tex">Gender<br />Male</h5>
        </div>
      </div>
</div>
);
};

export default About;