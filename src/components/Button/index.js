import styled from 'styled-components'
import React from "react";

const Button = styled.a`
  border-radius: 3px;
  padding: 0.75em 1.25em;
  font-size: 1em;
  border: none;
  background-color: ${props => props.theme.color};
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.block && 'width: 100%'};

  &:disabled {
    opacity: 0.6;
  }
`;

const StyledButton = React.forwardRef(({loading, children, ...props}, ref) => {
  return (
    <Button {...props} innerRef={ref}>
      {loading ? 'Loading' : children}
    </Button>
  )
});

export default StyledButton;
