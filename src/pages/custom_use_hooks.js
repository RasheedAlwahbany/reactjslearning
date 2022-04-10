import {useState,useEffect} from "react";
export const useFetch=((url)=>{
    const [users,setUsers]=useState([]);
    
    const getUser=async()=>{
        const response =await fetch(url);
        const users=await response.json();
          setUsers(users);
          // alert(users2);
          
    };
    useEffect(()=>{
      getUser();
    },[]);
    return(
        {users}
    )
    
})