import styled from "styled-components";
import Popup from "reactjs-popup";

const StyledPopup = styled(Popup)`
  &-overlay {
      background: rgba(0, 0, 0, 0.25);
  }
  &-content {
    border-radius: 6px;
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0 0 16px 0 rgba(50, 50, 50, 0.7);
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    padding: 20px;
    
    .header {
      padding-bottom: 10px;      
    }
    
    .footer {
      text-align: center;
      display: flex;
      justify-content: space-around;
    }
  }
  
  @keyframes anvil {
  0% {
    transform: scale(1) translateY(0px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  1% {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
  }
`;

export default StyledPopup;
