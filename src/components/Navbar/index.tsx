import styled from "styled-components";
import logo from "../.././images/logo.svg";
import cart from "../.././images/icon-cart.svg";
import avatar from "../.././images/image-avatar.png";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 80px;
  padding-bottom: 3px;
  border-bottom: 2px solid whitesmoke;
`;

const WestSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EastSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  padding: 50px 0;
  box-sizing: border-box;
`;

const MySpan = styled.span`
  margin-left: 30px;
  cursor: pointer;
  padding: 50px 0;

  &:hover {
    border-bottom: 6px solid orange;
    margin-bottom: -6px;
    font-weight: bold;
  }
`;

const Avatar = styled.img`
  margin-left: 60px;
  cursor: pointer;
`;

const Cart = styled.img`
  margin-left: 60px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <WestSide>
        <Logo src={logo} alt="logo" />
        <MySpan>Collections</MySpan>
        <MySpan>Men</MySpan>
        <MySpan>Women</MySpan>
        <MySpan>About</MySpan>
        <MySpan>Contact</MySpan>
      </WestSide>
      <EastSide>
        <Cart src={cart} alt="cart" />
        <Avatar src={avatar} alt="dude" width="50px" height="50px" />
      </EastSide>
    </NavbarWrapper>
  );
};

export default Navbar;
