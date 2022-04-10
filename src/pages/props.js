import React, { useState,useContext } from 'react'
import { data } from './data';

const PersonContext=React.createContext();

const List = ({ person }) => {
    return <>
        {person.map((person1) => {
            return (
                <SinglePerson  key={person.Id} {...person1} />
            )
        })}
    </>
};

const SinglePerson = ({ Name, Id,Age }) => {
    const {removeItem}=useContext(PersonContext)
    return (
        <div>
            <h1>{Id}=>hello hello {Name} <button onClick={()=>removeItem(Id)}>remove</button></h1>
        </div>
    )
}
export const Props = () => {
    
    const [person, setPerson] = useState(data)
    const removeItem = (Id) => {
        setPerson((person1) => {
            return(
                person1.filter((person2) => person2.Id !== Id)
                );
        });
    
    };
    return (
        <PersonContext.Provider value={{removeItem}}>
        <div>
            <List person={person}  />

        </div>
        </PersonContext.Provider>
        
    )
}

