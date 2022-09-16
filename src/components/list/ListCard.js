import React from "react"
import { Link } from 'react-router-dom';
import "./List.css"
import "../../modules/ListManager"


export const ListCard = ({ list, handleDeleteList}) => {
return (
    <div className="card">
        <div className="card-content">
            <h3> <span className="content-listname">
                    {list.list_name}
                </span></h3>
            <Link to={`/list/${list.id}`}>
                <button>Details</button>
            </Link>
            <Link to={`/list/${list.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button type="button" onClick={() => handleDeleteList(list.id)}>Delete</button>
        </div>
    </div>
);
}