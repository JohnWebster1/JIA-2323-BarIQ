import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
  max-width: 80%;
  width: 600px;
`;

const Search = styled.input`
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 4rem 0.7rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  box-shadow: 0 0 0 2px #bebebe;
  width: 100%;
  transition: 0.2s ease-in-out;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 2px #202549;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
`;

function SearchBar(props) {
    return (
        <Wrapper>
            <Search onChange={props.onChange}/>
            <SubmitButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" id="IconChangeColor"><path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" id="mainIconPathAttribute" fill="#000000"></path></svg>
            </SubmitButton>
        </Wrapper>
    );
}

export default SearchBar;