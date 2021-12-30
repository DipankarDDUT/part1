import React, { useState } from 'react';
import StatisticsLine from './statisticline';
const Statistics=(props)=>{

let average=(props.good + props.bad + props.neutral)/3;
let positive=((props.good - props.bad)/(props.good + props.bad + props.neutral) * 100)

if(props.good===0 && props.bad===0 && props.neutral===0){
    return(
        <div>
 <h4>
        statistics
    </h4>
    <p> No feedback given</p>

        </div>
    )
}
return(

<table>
<tbody>
        <tr><td>statistics</td></tr>
        <tr><td>good {props.good}</td></tr>
        <tr><td>neutral {props.neutral}</td></tr>
        <tr><td>bad {props.bad}</td></tr>
        <tr><td><StatisticsLine average={average}/></td></tr> 
        <tr><td>positive {positive}%</td></tr>
 
</tbody>
</table>





)



}


export default Statistics;

