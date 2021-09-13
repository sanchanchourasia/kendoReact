import React from "react";
import { Button, Card } from "react-bootstrap";
import A32 from "../assests/a32.png";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import '../App.css';

const CardComponent = () => {
  return (
    <div>
      <div className="cards-div">
       
        {/*card 1...........*/}
        <Card
          style={{
            //margin: "50px auto 50px auto",
            marginTop:'10px',
            width: "12.5rem",
            height: "auto",
            padding: "1.5%",
            paddingBottom:'1%',
            borderRadius:'7px',
            boxShadow: "2px 2px 10px 1px grey",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={img2}
            style={{
              width: "auto",
              height: "150px",
              border: "1px solid grey",
              borderRadius: "6px",
              padding: "8px 0px",
            }}
          />
          <Card.Body>
            <h4>Samsung A32</h4>
                <p>Price: $300</p>                      
            <Button
              variant="primary"
              style={{ height: "auto", fontSize: "18px", margin: "1rem" }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/*card 1...........*/}
        <Card
          style={{
            //margin: "50px auto 50px auto",
            marginTop:'10px',
            width: "12.5rem",
            height: "auto",
            padding: "1.5%",
            paddingBottom:'1%',
            borderRadius:'7px',
            boxShadow: "2px 2px 10px 1px grey",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={img2}
            style={{
              width: "auto",
              height: "150px",
              border: "1px solid grey",
              borderRadius: "6px",
              padding: "8px 0px",
            }}
          />
          <Card.Body>
            <h4>Samsung A32</h4>
                <p>Price: $300</p>                      
            <Button
              variant="primary"
              style={{ height: "auto", fontSize: "18px", margin: "1rem" }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/*card 1...........*/}
        <Card
          style={{
            //margin: "50px auto 50px auto",
            marginTop:'10px',
            width: "12.5rem",
            height: "auto",
            padding: "1.5%",
            paddingBottom:'1%',
            borderRadius:'7px',
            boxShadow: "2px 2px 10px 1px grey",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={A32}
            style={{
              width: "auto",
              height: "150px",
              border: "1px solid grey",
              borderRadius: "6px",
              padding: "8px 0px",
            }}
          />
          <Card.Body>
            <h4>Samsung A32</h4>
                <p>Price: $300</p>                      
            <Button
              variant="primary"
              style={{ height: "auto", fontSize: "18px", margin: "1rem" }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/*card 1...........*/}
        <Card
          style={{
            //margin: "50px auto 50px auto",
            marginTop:'10px',
            width: "12.5rem",
            height: "auto",
            padding: "1.5%",
            paddingBottom:'1%',
            borderRadius:'7px',
            boxShadow: "2px 2px 10px 1px grey",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={A32}
            style={{
              width: "auto",
              height: "150px",
              border: "1px solid grey",
              borderRadius: "6px",
              padding: "8px 0px",
            }}
          />
          <Card.Body>
            <h4>Samsung A32</h4>
                <p>Price: $300</p>                      
            <Button
              variant="primary"
              style={{ height: "auto", fontSize: "18px", margin: "1rem" }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>

        {/*card 1...........*/}
        <Card
          style={{
            //margin: "50px auto 50px auto",
            marginTop:'10px',
            width: "12.5rem",
            height: "auto",
            padding: "1.5%",
            paddingBottom:'1%',
            borderRadius:'7px',
            boxShadow: "2px 2px 10px 1px grey",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={img1}
            style={{
              width: "auto",
              height: "150px",
              border: "1px solid grey",
              borderRadius: "6px",
              padding: "8px 0px",
            }}
          />
          <Card.Body>
            <h4>Samsung A32</h4>
                <p>Price: $300</p>                      
            <Button
              variant="primary"
              style={{ height: "auto", fontSize: "18px", margin: "1rem" }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;