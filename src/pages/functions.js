import React from "react";

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

const BookList=()=>{
    return (
        <>
        
        <section className="bookList">
{newArr}
        </section>
        </>
    )
    };

const clickHandler=(id)=>{
    alert("Good"+id);
};
const clickHandler2=(e)=>{
    alert("Good"+e);
    alert("Good"+e.target);
    alert("Good"+e.target.value);
}      
const books=['ahemd','ali','mohammed'];
const newArr=books.map((name,index)=>{
    return(<Book head={'new header'+(index+1)} index={(index+1)}>
    <p>
      hello there
      you are in the children
    </p>{name}</Book>);
});
console.log(newArr);


// const Book=({head,children})=>{
//     return (
//         <>
//         <h1>{head}</h1>
//         {children}
//         </>
//     )
//     }
export default BookList;

