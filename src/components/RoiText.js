import styled from 'styled-components'

const RoiText = styled.h2`
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  margin: 20px 0 10px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

export default RoiText;