import styled from 'styled-components';

const Input = styled.input`
  background-color: #f6f5f3;
  border-radius: .375em;
  padding: 0 1em;
  background-clip: padding-box;
  box-shadow: none;
  border: none;
  transition: border .3s cubic-bezier(.39,.575,.565,1);
  color: var(--black);
  font-size: 1em;
  letter-spacing: .025em;
  font-weight: 300;
  line-height: 2.75em;
  height: 2.75em;
  flex: 1;
  
  &:disabled {
    color: rgba(0,0,0, 0.4);
  }
`;

export default Input;
