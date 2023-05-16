import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditUser = () => {
    const {id} = useParams();
    return (
        <>
            <h1>{`EditUser Component with id: ${id} `}</h1>
        </>
    )
}