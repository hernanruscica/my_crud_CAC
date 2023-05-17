import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {dbFirebase} from "../services/dbFirebase";
import {collection, addDoc} from "firebase/firestore";

export const CreateUser = () => {    

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const navigate = useNavigate();
    const usersCollection = collection(dbFirebase, "users");

    const addUser = async (e) => {
        e.preventDefault();
        await addDoc(usersCollection, {
            user_name: userName,
            email: email,
            password: password
        })
        console.log("user added");
        navigate("/");
    }
    //addUser();

    return ( 
        
        <div className="container">
            <h1>CreateUser Component</h1>
            <div className="row">
                <div className="col">
                    <h1>create Book</h1>
                <form onSubmit={addUser}>
                    <div className="mb-3">
                    <label className="form-label">User name</label>   
                    <input 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    className="form-control"
                    type="text"/>
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Email</label>   
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="form-control"
                    type="text"/>
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Password</label>   
                    <input 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="form-control"
                    type="password"/>
                    </div>
                        <button type="submit" className="btn btn-primary">CREATE USER</button>
                </form>
                </div>
            </div>
        </div>
    )
}