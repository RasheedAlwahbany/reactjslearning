import React,{useState,useEffect} from "react";


export const Book = () => {
  const [users,setUsers]=useState([]);
  // const url="http://localhost:83/users_json_api/users.json";
  const url="https://api.github.com/users";
  const getUser=async()=>{
      const response =await fetch(url);
      const users2=await response.json();
        setUsers(users2);
        // alert(users2);
        
  };
  getUser();
  useEffect=(()=>{
    getUser();
  },[]);
    return (
    <>
    <p>hello</p>
    <ul>
    {users.map((user)=>{
      // const [login, id, node_id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin] =user;
      return <p>{user}</p>
    },[])}
    </ul>
    </>    
    
  )
}

