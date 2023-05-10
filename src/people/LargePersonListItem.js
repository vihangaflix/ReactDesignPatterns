import React from 'react'

const LargePersonListItem = ({ person }) => {

    const { name, age, hairColor, hobbies } = person;

    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <ul>
                {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
            </ul>
        </>
    )
}

export default LargePersonListItem
