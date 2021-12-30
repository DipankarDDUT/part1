import React, { useState } from 'react';
import Button from './button';

const Feedback=(props)=>{


return(

<div>

    <h4>
        give feedback
    </h4>
    <Button setFeedback={ props.setgood} feedback={props.good}  feedbackVal={"good"}/>
    <Button setFeedback={ props.setneutral} feedback={props.neutral} feedbackVal={"neutral"} />
    <Button setFeedback={ props.setbad} feedback={props.bad}  feedbackVal={"bad"}/>



</div>


)



}


export default Feedback;

