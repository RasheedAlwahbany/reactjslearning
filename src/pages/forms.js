import React,{useEffect, useRef, useState} from 'react'

// export const Forms = () => {
//     const [id,setId]=useState('');
//     const [firstName,setFirstName]=useState('');
//     const [person,setPerson]=useState([]);

//     const handelSubmit=(e)=>{
        
//         e.preventDefault();
//         if(firstName && id){
//         // const person={id:id,firstName:firstName} //if the kay name not equal to variable name 
//         const person1={id,firstName}
//         setPerson((person)=>{
//             return [...person,person1];
//         })
//         console.log(person)
//         }else
//         alert("you must fill all data At first");
//     }
//   return (
//     <React.Fragment>
//         <form onSubmit={handelSubmit}>
//             <label>Id</label><br/>
//             <input id='id' name='id' type='text' value={id} onChange={(e)=>setId(e.target.value)}/><br/>
//             <label>Name</label><br/>
//             <input id='name' name='name' type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/><br/>
//             <input type='submit'/>

//         </form>
        
//         {person.map((person1,index)=>{
//             const {id,firstName}=person1;
//            return(
//                <div key={index}>
//                    <h1>Index: {index}<br/>ID: {id} <small> Name: {firstName}</small></h1>
//                </div>
//            )
//         })}
//     </React.Fragment>
//   )
// }

// // dynamic variable objects
// export const Forms = () => {
//     const [personInfo,setPersonInfo]=useState({id:'',firstName:''});
//     const [person,setPerson]=useState([]);

//     const handelSubmit=(e)=>{
        
//         e.preventDefault();
//         if(personInfo.id && personInfo.firstName){
//             const newPerson={...personInfo}
//             setPerson([...person,newPerson])
//             setPersonInfo({id:'',firstName:''})
//         }
//     }
//     const handelChanges=(e)=>{
//         const name=e.target.name;
//         const value=e.target.value;
//         setPersonInfo({...personInfo,[name]:value})
//         console.log(personInfo)

//     }
//   return (
//     <React.Fragment>
//         <form onSubmit={handelSubmit}>
//             <label>Id</label><br/>
//             <input id='id' name='id' type='text' value={personInfo.id} onChange={handelChanges}/><br/>
//             <label>Name</label><br/>
//             <input id='firstName' name='firstName' type='text' value={personInfo.firstName} onChange={handelChanges}/><br/>
//             <input type='submit'/>

//         </form>
        
//         {person.map((person1,index)=>{
//             const {id,firstName}=person1;
//            return(
//                <div key={index}>
//                    <h1>Index: {index}<br/>ID: {id} <small> Name: {firstName}</small></h1>
//                </div>
//            )
//         })}
//     </React.Fragment>
//   )
// }

// dynamic variable objects using refComponents
export const Forms = () => {
    const refContainer=useRef(null);
    const handelSubmit=(e)=>{
        
        e.preventDefault();
        if(refContainer.current.value!=='ahmed'){
            refContainer.current.focus();
            refContainer.current.value='Error';
            }
        alert(refContainer.current.value)
    }
    useEffect(()=>{
        if(refContainer.current.value!=='ahmed'){
        refContainer.current.focus();
        refContainer.current.value='Error';
        }
    })
  return (
    <React.Fragment>
        <form onSubmit={handelSubmit}>
            <label>Id</label><br/>
            <input id='id' name='id' type='text' ref={refContainer}/><br/>
            <label>Name</label><br/>
            <input id='firstName' name='firstName' type='text'/><br/>
            <input type='submit'/>

        </form>
        
        
    </React.Fragment>
  )
}