import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;

const StyledLabel = styled.label`
  text-align: left;
  display: block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 20px;
  text-align: center;
`;

function RoiField(props) {
    return (
        <Wrapper>
            <form>
                <StyledLabel>{props.label}</StyledLabel>
                <StyledInput type={"number"} required={true} value={props.value} onChange={props.onChange}/>
            </form>
        </Wrapper>
    );
}

export default RoiField;