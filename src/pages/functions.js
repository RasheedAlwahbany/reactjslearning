import React,{useState,useEffect} from "react";

const Book=(props)=>{
    
return (
    <>
    <h1>{props.head}</h1>
    {props.children}
    <button  onClick={()=>clickHandler(props.index)}>Click</button>
    <button  onClick={clickHandler2}>Click</button>
    </>
)
};

const ErrorEx=()=>{
    const [title,setTitle]=useState('Random Values');
    const [size,setSize]=useState(window.innerWidth);
    const checkSize=()=>{
        setSize(window.innerWidth);
    }
    useEffect=(()=>{
        window.addEventListener('resize',checkSize)
    });
    // useEffect(()=>{//running after render done
    //     document.title=`New ${title}`;
    // });
    useEffect(()=>{
        document.title=`New ${title}`;
    },[title]);
    const clickHandl=()=>{
        if(title!=="new title")
        setTitle("new title");
        else
        setTitle("random values");

        
    }
    return (
        <React.Fragment>
            {/* to remove event listener */}
         {window.removeEventListener('resize',checkSize)}
            <h1>{title}</h1>
            <button type="button" className="btn" onClick={clickHandl}>useState</button>
            <button type="button" className="btn" onClick={()=>setTitle('helllo')}>useEffect</button>
            <button type="button" className="btn">useEffect1 auto screen width is: {size}</button>
        </React.Fragment>
    );
};

const BookList=()=>{
    return (
        <>
        <ErrorEx/>
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

