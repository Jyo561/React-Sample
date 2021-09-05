import React from "react";

const Education = () => {
   return(
     <>
     <br />
     <hr />
     <br />
     <br />
     <div>
     <h2 style={{marginLeft:40, color:"#ffc93c"}}>Education:</h2>
     <br />
     <br />
     <table className="center">
       <tr>
         <th>Sl no</th>
         <th>Education</th>
         <th>Institution</th>
         <th>Percentage</th>
       </tr>
       <tr>
         <td>1</td>
         <td>10th Boards</td>
         <td>Blessed Sacrament High School</td>
         <td>94</td>
       </tr>
       <tr>
         <td>2</td>
         <td>12th Boards</td>
         <td>Mother's Public School</td>
         <td>94.2</td>
       </tr>
       <tr>
         <td>3</td>
         <td>B.Tech</td>
         <td>ITER,SOA</td>
         <td>Pursuing Currently</td>
       </tr>
     </table>
     </div>
     <br />
     </>
);
};

export default Education;