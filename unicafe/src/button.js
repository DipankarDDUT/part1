import React, { useState } from 'react';

const Button=(props)=>{

return(


<React.Fragment>
 
 <button onClick={()=> props.setFeedback(props.feedback + 1)}>{ props.feedbackVal}</button>

</React.Fragment>


)



}


export default Button;

