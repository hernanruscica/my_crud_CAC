import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { dbFirebase } from "../services/dbFirebase";
import {getDoc, updateDoc, doc} from "firebase/firestore";



export const EditUser = () => {

    const {id} = useParams();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const navigate = useNavigate();
    


    const getUserById = async (id) => {  
        const userDoc = await getDoc(doc(dbFirebase, "users", id))
        if (userDoc.exists()) {
            const user = {...userDoc.data()};
            //console.log(user.user_name);
            setUserName(user.user_name);
            setEmail(user.email);
            setPassword(user.password);
        }else{
            console.log("id not found :(");
        }
        
    }

    const update = async (e) => {
        e.preventDefault();
        const userDoc = doc(dbFirebase, "users", id);
        const data = {
          user_name: userName,
          email: email,
          password: password,
        };
        await updateDoc(userDoc, data);
        navigate("/");
      };

    useEffect(() => {
            getUserById(id)        
    }, []);
        
    
    return (
        <>      
            <div className="container">
                <h1>{`EditUser Component with id: ${id} `}</h1>
                <div className="row">
                    <div className="col">
                    <h1>Edit User</h1>
                    <form onSubmit={update}>
                        <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                        />
                        </div>

                        <button type="submit" className="btn btn-primary">
                        Update
                        </button>
                    </form>
                    </div>
                </div>
                </div>
        </>
    )
}