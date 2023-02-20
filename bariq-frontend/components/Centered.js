import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: white:
`;

function Centered(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Centered;