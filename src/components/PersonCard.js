import React from 'react'

// in functional components use an arrow function that accepts an arguement, that must be called props
// access the values being passed down via props.keyName
const Person = (props) => {
    // deconstructed: const{firstName, lastName}=props
    // enter deconstructed variables below without dot notation
    return(
        <div>
            <h1>{props.lastName}, {props.firstName} </h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.haircolor}</p>
        </div>
    )
}
export default Person;