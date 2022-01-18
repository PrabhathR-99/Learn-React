import React from 'react';
import moment from 'moment';
function Listitem(props){
    return(
        <React.Fragment>
            <ul>
                    <p>Name - {props.name}  </p>
                    <p><img src ={props.avatar} alt ={props.name}width="200"></img></p>
                    <p>City - {props.city}</p>
                    <p>Birthday: {moment(props.dob).format('DD-MM-YYYY')}</p>
                    <p>Age - {props.age}</p>           
                    <p>Email - {props.email}</p>
             </ul>
       </React.Fragment>
    );
}
export default Listitem;
