import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const SwitchTextWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 35px;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const Subtext = styled.p`
  font-size: 22px;
  color: #7a7a7a;
  margin: 0;
`;

const SwitchSubtext = styled(Subtext)`
  font-size: 18px;
`;

const SectionHeader = styled(Subtext)`
  color: black;
  margin-top: 30px;
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 5px 0;
`;

const SwitchButton = styled.a`
  color: #7a7a7a;
  font-size: 16px;
  padding: 5px 13px;
  border-radius: 100px;
  border-color: #7a7a7a;
  border-style: solid;
  border-width: 1px;
  margin-left: 20px;
`;

const Right = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 61.8%;
  background: white;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 75%;
  margin-top: 10px;
  height: 45px;
  font-size: 20px;
  text-align: start;
  padding-left: 10px;
  border-radius: 10px;
  border-color: #7a7a7a;
  border-style: solid;
  border-width: 1px;
  transition: 0.2s;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FinalButton = styled.a`
  display: flex;
  margin-top: 50px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  background: #0070F3;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #0555b0;
    transition: .5s;
  }
`;

// Only used on mobile view
const LogoWrapper = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 12%;
    height: 10%;
    margin: 0 35px;
    
  }
`;

function RightSection(props) {
    return (
        <>
            <LogoWrapper>
                <Link
                    href="/"
                >
                    <Image
                        src={"/../public/logo.png"}
                        alt="Picture of the logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </LogoWrapper>
            <SwitchTextWrapper>
                <SwitchSubtext>{props.topText}</SwitchSubtext>
                <SwitchButton href={props.href}>{props.topButtonText}</SwitchButton>
            </SwitchTextWrapper>
            <Right>
                <Header>Welcome to Bar IQ!</Header>
                <Subtext>{props.headerSubText}</Subtext>

                {props.useName ? (<>
                    <SectionHeader>Name</SectionHeader>
                    <Input type="text" value={props.name} onChange={props.setName}/>
                </>) : (<> </>)}

                <SectionHeader>Email</SectionHeader>
                <Input type="text" value={props.email} onChange={props.setEmail}/>
                <SectionHeader>Password</SectionHeader>
                <Input type="password" id={"passwordInput"} value={props.password} onChange={props.setPassword}/>
                <FinalButton onClick={props.onClick}>{props.buttonText}</FinalButton>
            </Right>
        </>
    );
}

export default RightSection;