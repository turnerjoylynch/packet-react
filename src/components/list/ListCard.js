import React, { useState, useEffect } from "react";
import { Card, CardGroup, Button, ListGroup, Nav } from "react-bootstrap";
import { useParams, Link } from "react-router-dom"
import "./List.css"
import "../../modules/ListManager"
import { getListById } from "../../modules/ListManager";
import { deleteItem } from "../../modules/ItemManager";

export const ListCard = () => {
    const {listId} = useParams();
    

    const [ list, setList ] = useState([{
        list_name: "",
        items: [{
            item_name: ""
        }],
    }])


    useEffect(() => {
        getListById(listId).then(data => setList(data))
    }, [])


    const itemList = list.items?.map(item =>
        <CardGroup >
            <Card border="info">
                <Card.Body>
                    <Card.Subtitle>{item.item_name}</Card.Subtitle>
                    {/* <Card.Text className="mb-2 text-muted" style={{fontSize:"12px"}}>{task.date}</Card.Text>
                    <Card.Text style={{fontSize:"14px"}}>Note: {task.note}</Card.Text> */}
                    <Card.Text className="text-center">
                        <Link to={`list/${list.id}`}>
                            <Button variant="outline-danger" size="sm" onClick={() => {deleteItem(item.id)}}>x</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
    

    return (
        <Card >
            <Card.Body>
                <Card.Title className="text-center">{list.list_name} </Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted text-center" style={{fontSize:"12px"}}> Date: {project.date} </Card.Subtitle>
                <Card.Text style={{fontSize:"15px"}}> Description: {project.description} </Card.Text> */}
                <Card.Header style={{fontSize:"20px"}}>Items <Button variant="outline-success" size="sm"  href="/items/new"> + </Button></Card.Header>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            {itemList}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link to={`list/${list.id}/update`}><Button variant="warning" size="sm"> Edit List </Button></Link>
                </Card.Footer>
            </Card.Body>
        </Card>
      );









}


// export const ListCard = ({ list, handleDeleteList}) => {
// return (
//     <div className="card">
//         <div className="card-content">
//             <h3> <span className="content-listname">
//                     {list.list_name}
//                 </span></h3>
//             <Link to={`/list/${list.id}`}>
//                 <button>Details</button>
//             </Link>
//             <Link to={`/list/${list.id}/edit`}>
//                 <button>Edit</button>
//             </Link>
//             <button type="button" onClick={() => handleDeleteList(list.id)}>Delete</button>
//         </div>
//     </div>
// );
// }

