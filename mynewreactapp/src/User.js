import React  from "react"; 
import { useParams } from "react-router-dom";

function User(){

    const {id} = useParams()

    return(
        <>
        <h1>User Profile</h1>
        <br/>
        UserId :{id}
        </>
    )
}

export default User;