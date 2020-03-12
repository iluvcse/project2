import React from 'react';
import data from './data.json';
import icon from './woman.svg';
import Resume1 from './Resume1';
import {BrowserRouter,Route,Link} from 'react-router-dom';

let Profile=()=>{
    const profiles=data.profiles;
    return(
        <div className="parent">
            <BrowserRouter>
            <route exact path="/Resume1" component={Resume1}> </route>
            </BrowserRouter>

            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile Image"/>
                    <h3> {i.basics.Name}</h3><hr></hr>
                    <a href={"mailto:"+i.basics.Email} className="link"> {i.basics.Email} </a><br></br>

                    <a href={"tel:"+i.basics.Mobile} className="link"> {i.basics.Mobile}</a><hr></hr>
                    <Link to={{pathname:"/Resume1",index:{value:{j}}}} className="btn"> View Profile </Link>
                    { 
                    console.log(profiles)
                    }

                </div>
            ))}

        </div>
    )
}

export default Profile;