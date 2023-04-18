import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Left = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 38.2%;
  background: #f8f9fc;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 7%;
  height: 7%;
  margin: 20px 35px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  height: 50%;
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function LeftSection() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Link
                    href="/login"
                >
                    <Image
                        src={"/logo.png"}
                        alt="Picture of the logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </LogoWrapper>
            <Left>
                <ImageWrapper>
                    <Image
                        src={"/warehouse.png"}
                        alt="Picture of the warehouse"
                        layout="fill"
                        objectFit="contain"
                    />
                </ImageWrapper>
            </Left>
        </Wrapper>
    );
}

export default LeftSection;