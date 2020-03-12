import React from 'react';
import data from './data.json';
import icon from './woman.svg';

let Resume1=(props)=>{
     let info=Object.values(props.location.index.value);
     let person=data.profiles[info]
     console.log(person);
    return(
        <div className="parent">
            <div className="child">
            <img src={icon} alt="profile"/>
               <h3> {person.basics.Name} </h3>
               <a href={"mailto:"+person.basics.Email} className="link"> {person.basics.Email} </a><br></br>

                <a href={"tel:"+person.basics.Mobile} className="link"> {person.basics.Mobile}</a>


            </div>
            <div className="child2"> 
            <h3> Educational Qualifications </h3>
            <hr></hr>
            {person.Education.map((i,j)=>(
                <div key={j}>
                <h4> {i.Degree} </h4>
                <ul>
                    <li> {i.Percentage} </li>
                    <li> {i.Institute} </li>
                </ul>
                </div>
            ))}
            <h3> Skills </h3><hr></hr>
            {person.Skills.map((x,y)=>(
                <div>
                <h4> {x.Type} </h4>
                {x.values.map((k,l)=>(
                    <div key={l} style={{display:"inline"}}>
                        <span class="skill"> {k} </span>
                    </div>
                ))}
                </div>
            ))}
            </div>
        </div>
    )
}
 export default Resume1;