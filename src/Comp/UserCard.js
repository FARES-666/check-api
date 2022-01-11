import React from 'react';
import { Card } from 'react-bootstrap';
import './UserCard.css';
const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <h1>{user.name[0]}</h1>
                <Card.Body>
                    <Card.Title><h4>{user.name} </h4> </Card.Title>
                    <h4> {user.username}</h4>
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
