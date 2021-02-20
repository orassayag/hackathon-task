import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ForumCard() {
    return (
        <Card>
            <Card.Header>חדו''א 1</Card.Header>
            <Card.Body>
                <Card.Title>דף עבודה 3</Card.Title>
                <Card.Text>
                    מחפש 2-3 שותפים ללמידה דרך הזום לפתירת דף מספר 3
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}


export default ForumCard;