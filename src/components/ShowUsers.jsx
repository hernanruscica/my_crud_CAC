import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dbFirebase } from "../services/dbFirebase";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";


export const ShowUsers = () => {

    const [users, setUsers] = useState([]);
    const usersCollection = collection(dbFirebase, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollection);
        //console.log(data.docs);
        setUsers(
            data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        )  
        //console.log(users);      
    }
    //getUsers();

    const confirmDelete = (id) => {
        console.log(`Do you really wants to delete user with id: ${id}?`);
    }

    useEffect(() => {
        getUsers()        
    }, []);

    return (
    <>
        <h1>ShowUsers Component</h1>
        <div className="container">
        <div className="row">
            <div className="col">
            <div className="d-grid gap-2">
                    <Link to= "/create" className="btn btn-secondary mt-2 mb-2">CREAR</Link>
            </div>
            <table className="table table-dark table-hover">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th> 
                    <th>Actions</th>           
                </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.user_name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                        <Link to={`/edit/${user.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                        <button onClick={()=>{confirmDelete(user.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </>
    )

    
}