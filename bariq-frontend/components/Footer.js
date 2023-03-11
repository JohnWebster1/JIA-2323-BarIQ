import Image from "next/image";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #C2C8CF;
  min-width: 100vw;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 105px;
  height: 100px;
  margin: -20px 0;
`;

const LinkRows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px 290px 0;;
  min-width: 100vw;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Link = styled.a`
  font-size: 1.05rem;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: #f0f0f0;
  &:hover {
    text-decoration: underline;
    color: #1b93d2;
  }
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 120px 50px;
  margin-top: 40px;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
`

function Footer() {
    return <FooterWrapper>
        <LinkRows>
            <ImageWrapper>
                <a href="/">
                    <Image
                        src={"/../public/logo.png"}
                        alt="hi"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
            </ImageWrapper>
            <Column>
                <SectionTitle>SOLUTIONS</SectionTitle>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
            </Column>
            <Column>
                <SectionTitle>RESOURCES</SectionTitle>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
            </Column>
            <Column>
                <SectionTitle>COMPANY</SectionTitle>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
            </Column>
            <Column>
                <SectionTitle>GET STARTED</SectionTitle>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
            </Column>
        </LinkRows>

        <BottomRow>
            <p>© 2023 Bar IQ, LLC</p>
            <IconRow>
                <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"
                         viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2" stroke="none"/>
                    </svg>
                </a>
            </IconRow>
        </BottomRow>
    </FooterWrapper>
}

export default Footer;