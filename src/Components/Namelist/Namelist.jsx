import React from 'react';
import Listitem from './Listitem';
function Namelist(){
  const namelist = [{
    id:1,
    name : {
      title: 'Mr',
      first: 'Bruse',
      second: 'Vain',
    },
    location : {
      city: 'Gothem',
    },
    dob : {
      day: 7,
      month: 'July',
      year: 1999,
      
      age: '22',
    },
    email: 'prabathr651@gmail.com',
    picture : {
      medium :'https://www.cinemascomics.com/wp-content/uploads/2020/12/batman-de-ben-affleck.jpg',
    },
 
    
    

  },
  {
    id:2,
  name : {
      title: 'Mr',
      first: 'Peter',
      second: 'Parker',
    },
    location : {
      city: 'Kurunegala',
    },
    dob : {
      day: 7,
      month: 'July',
      year: 1999,
      
      age: '22',
    },
    email: 'prabathr651@gmail.com',
    picture : {
      medium :'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
 
    
    

  },
  {
    id:3,
    
    name : {
      title: 'Mrs',
      first: 'Diana ',
      second: 'Prince',
    },
    location : {
      city: 'Themyscira',
    },
    dob : {
      day: 7,
      month: 'July',
      year: 1999,
      
      age: '22',
    },
    email: 'prabathr651@gmail.com',
    picture : {
      medium :'https://images.unsplash.com/photo-1534804649950-a1077ae87c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
  },
];

const namelistComponents = () => {
  return namelist.map((aName) => {
      return(
        
      <Listitem 
      key = {aName.id}
      name = {`${aName.name.title} ${aName.name.first} ${aName.name.second} `}
      city ={aName.location.city} 
      dob  ={`${aName.dob.day}  ${aName.dob.month}  ${aName.dob.year} `} 
      age = {aName.dob.age}
      email = {aName.email}
      avatar =  {aName.picture.medium}
      /> 
      );
    });
};
 return(
        <React.Fragment>
         
         <div className="container mt-4">
          <ul className='list-group'>
        {namelistComponents()}
          </ul>
          </div>
         
        </React.Fragment>
    );
}
export default Namelist;