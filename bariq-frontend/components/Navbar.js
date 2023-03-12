import styled from "styled-components";
import LogoutIcon from "./sidebar-icons";

const Nav = styled.nav`
  background: #1A1D6A;
  height: 60px;
  width: 95vw;
`;

const List = styled.ul`
  float: right;
  margin: 12px 20px 0 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 5px 5px;
`;

const Atag = styled.a`
  color: white;
  font-size: 18px;
  padding: 7px 13px;
  border-radius: 100px;
  transition: .5s;
  cursor: pointer;

  &:hover {
    background: #2a81e5;
  }
`;

const AtagSignup = styled.a`
  color: white;
  font-size: 18px;
  padding: 5px 13px;
  border-radius: 100px;
  border-color: white;
  border-style: solid;
  border-width: 0.9px;
  transition: .5s;

  &:hover {
    background: #2a81e5;
  }
`;

function Navbar(props) {
    return (
         <Nav>
            <List>
                <ListItem><Atag className="active" href="/">Home</Atag></ListItem>
                {props.loggedIn ? <></> : <ListItem><Atag href="/login">Log In</Atag></ListItem>}
                 {props.loggedIn ? <></> : <ListItem><AtagSignup href="/signup">Sign Up</AtagSignup></ListItem>}
                {props.loggedIn ? <ListItem><Atag onClick={props.logout}>Log Out</Atag></ListItem> : <></>}
            </List>
        </Nav>
    );
}

export default Navbar;