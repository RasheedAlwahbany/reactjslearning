import React from 'react'

const Book=(props)=>{
    return (
        <>
        <h1>{props.head}</h1>
        {props.children}
        <button  onClick={()=>clickHandler(props.index)}>Click</button>
        <button  onClick={clickHandler2}>Click</button>
        </>
    )
    }
    const clickHandler=(id)=>{
        alert("Good"+id);
    };
    const clickHandler2=(e)=>{
        alert("Good"+e);
        alert("Good"+e.target);
        alert("Good"+e.target.value);
    }      
    export default Book;
