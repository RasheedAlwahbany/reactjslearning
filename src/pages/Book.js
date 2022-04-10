import React,{useState,useEffect} from "react";
import { useFetch } from "./custom_use_hooks";
import PropTypes  from "prop-types";

export const Book = ({id,name}) => {
  // const [users,setUsers]=useState([]);
  // const url="https://api.github.com/users";
  // const getUser=async()=>{
  //     const response =await fetch(url);
  //     const users=await response.json();
  //       setUsers(users);
  //       // alert(users2);
        
  // };
  // useEffect(()=>{
  //   getUser();
  // },[]);

// or from custom use hook
const url="https://api.github.com/users";
const {users}=useFetch(url);

    return (
    <>
    <p>hello {id}: {name}</p>
    <ul>
    {users.map((user)=>{
      // const [login, id, node_id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin] =user;
      return <p>{user.id}: {user.login} Type {user.type}</p>
    },[])}
    </ul>
    </>    
    
  )
}
Book.propTypes={
  id:PropTypes.number.isRequired,
  login:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  
}
Book.defaultProps={
  id:0,
  name:"Default Name"
}

