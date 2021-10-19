import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import product1small from "../../images/image-product-1-thumbnail.jpg";
import product2small from "../../images/image-product-2-thumbnail.jpg";
import product3small from "../../images/image-product-3-thumbnail.jpg";
import product4small from "../../images/image-product-4-thumbnail.jpg";
import product1big from "../../images/image-product-1.jpg";
import product2big from "../../images/image-product-2.jpg";
import product3big from "../../images/image-product-3.jpg";
import product4big from "../../images/image-product-4.jpg";
import React, { useState } from "react";

const ContainerWrapper = styled.div`
  padding: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Miniature = styled.img`
  border-radius: 8px;
  margin-right: 30px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Product = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`;

const Brand = styled.div`
  position: absolute;
  top: 60px;
  width: 200px;
  left: 600px;
  color: orange;
  font-weight: bold;
`;

const Title = styled.div`
  position: absolute;
  top: 80px;
  width: 500px;
  height: 120px;
  left: 600px;
  color: black;
  font-size: 3rem;
  font-weight: bolder;
`;

const Content = styled.div`
  position: absolute;
  top: 250px;
  width: 500px;
  height: 120px;
  left: 600px;
  color: #ca9393;
  font-size: 1rem;
  font-weight: bolder;
`;

const Price = styled.p`
  position: absolute;
  top: 340px;
  left: 600px;
  color: black;
  font-size: 2rem;
  font-weight: bolder;
`;

const Discount = styled.span`
  position: absolute;
  top: 347px;
  left: 760px;
  color: black;
  font-size: 1rem;
  font-weight: bolder;
  background: #bee7be;
  padding: 3px;
  border-radius: 5px;
  color: orangered;
`;

const BannedPrice = styled.p`
  position: absolute;
  top: 390px;
  left: 600px;
  color: grey;
  font-size: 1rem;
  font-weight: bolder;
  text-decoration: line-through;
`;

const Quantities = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 420px;
  left: 600px;
  color: grey;
  font-size: 1rem;
  font-weight: bolder;
`;

const Button = styled.button`
  width: 150px;
  height: 3rem;
  color: white;
  background: orangered;
  margin-left: 10px;
  border-radius: 5px;
  border: orangered;
  cursor: pointer;
`;

const Container = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent === "-") {
      if (counter >= 1) {
        setCounter((prevValue) => prevValue - 1);
      }
    } else {
      setCounter((prevValue) => prevValue + 1);
    }
  };

  return (
    <ContainerWrapper>
      <Tabs>
        <TabList className="myTabList">
          <Tab>
            <Miniature src={product1small} alt="" />
          </Tab>
          <Tab>
            <Miniature src={product2small} alt="" />
          </Tab>
          <Tab>
            <Miniature src={product3small} alt="" />
          </Tab>
          <Tab>
            <Miniature src={product4small} alt="" />
          </Tab>
        </TabList>
        <TabPanel className="panels">
          <Product src={product1big} alt="" />
          <Brand>SNEAKER COMPANY</Brand>
          <Title>Fall limited edition Sneakers</Title>
          <Content>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Content>
          <div>
            <Price>$125.00</Price>
            <Discount>50%</Discount>
            <BannedPrice>$250.00</BannedPrice>
          </div>
          <Quantities>
            <button
              style={{
                width: "1rem",
                padding: "3px",
                backgroundColor: "pink",
                border: "pink",
                borderRadius: "5px",
                marginLeft: "5px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "none",
              }}
              onClick={handleClick}
            >
              -
            </button>
            <div
              style={{
                width: "2rem",
                padding: "3px",
                backgroundColor: "pink",
                borderRadius: "5px",
                marginLeft: "5px",
                textAlign: "center",
                color: "black",
                fontSize: "1.4rem",
              }}
            >
              {counter}
            </div>
            <button
              style={{
                width: "1rem",
                padding: "3px",
                backgroundColor: "pink",
                border: "pink",
                borderRadius: "5px",
                marginLeft: "5px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "none",
              }}
              onClick={handleClick}
            >
              +
            </button>
            <Button onClick={() => alert("bravissimo")}>Add to cart</Button>
          </Quantities>
        </TabPanel>
        <TabPanel className="panels">
          <Product src={product2big} alt="" />
        </TabPanel>
        <TabPanel className="panels">
          <Product src={product3big} alt="" />
        </TabPanel>
        <TabPanel className="panels">
          <Product src={product4big} alt="" />
        </TabPanel>
      </Tabs>
    </ContainerWrapper>
  );
};

export default Container;
