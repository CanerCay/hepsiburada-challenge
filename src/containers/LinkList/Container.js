import styled from "styled-components";

const Container = styled.section`
  padding: 4em;
  max-width: 500px;
  margin: auto;

  hr {
    margin: 20px 0;
    border-width: 1px;
  }
  
  .link-list {
    min-height: 372px;
  
    li {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      
      .right__content {
        flex: 1;
        padding: 0 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      
        p {
          margin: 5px 0;
        }
        
        a {
          color: ${props => props.theme.name === 'light' ? 'var(--black)' : 'var(--white)'};
          margin: 5px 0;
        }
        
        .vote {
          font-size: 0.7em;
          display: flex;
          justify-content: space-around;
          
          a {
            color: ${props => props.theme.color}; 
          }
        }
      }
    }
  }
  
  
  .pagination {
    display: inline-block;
    padding:0 15px;
    
    li {
      display: inline-block;
      padding:0 15px;
      
      &.active {
        color: ${props => props.theme.color};
      }
    }
  }
`;

export default Container;
