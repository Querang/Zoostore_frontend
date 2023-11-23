import React, {FC} from 'react';
import { Col, Card, Image } from 'react-bootstrap';

interface IProductCardModal {
    id: number
    category:string
    name:string
    description:string
    price:number
    quantity:number
}

const ProductCard: (id: number, category: string, name: string, description: string, price: number, quantity: number) => JSX.Element = (id:number, category:string, name:string, description:string, price:number, quantity:number) => {
    return (
        <Col lg={4} sm={6} className="mb-3">
            <Card className="product-card">
                <div className="product-thumb">
                    <a href="#"><Image src="/source/korm_ex.jpg" alt="" /></a>
                </div>
                <Card.Body className="product-details">
                    <Card.Title><a href="#">Корм</a></Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, repudiandae?</Card.Text>
                    <div className="product-bottom-details d-flex justify-content-between rounded-4">
                        <div className="product-price">
                        </div>
                        <div className="product-links">
                            <a href="#"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#"><i className="far fa-heart"></i></a>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;