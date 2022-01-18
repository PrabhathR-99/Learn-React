import React from 'react';
import moment from 'moment';
import './Listitem.css';
function Listitem(props){
    return(
        <React.Fragment>

            
                <ul className='list-group-item'>
                    <div className="row align-items-center">
                        <div className="col-4">
                            <p><img src ={props.avatar} 
                            alt ={props.name}
                           className="border  border-dark rounded-circle shadow-sm"
                           width="200"></img></p>
                        </div>
                                <div className="col-8">
                                <p style={{color:'green'}}>
                            <h4>{props.name} </h4> </p>
                            
                            <p>City - {props.city}</p>
                            <p>Birthday: {moment(props.dob).format('DD-MM-YYYY')}</p>

                            <p>Age - {props.age}</p>           
                            <p>Email - {props.email}</p>
                        </div>
                    </div>
                    
                    
                    
                </ul>
                    

                
            

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
