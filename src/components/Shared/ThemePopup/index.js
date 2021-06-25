import React from 'react';
import PropTypes from "prop-types";
import styled, {withTheme} from 'styled-components';

import Icon from '../../Icon'
import StyledPopup from "../../Modal";
import Button from "../../Button";
import StyledSlider from "../../Slider";
import {colors, themes} from "../../../theme/constant";

const ThemePopup = styled(StyledPopup)`
  &-overlay {
    justify-content: flex-end;
  }
  
  &-content {
    margin: 0 !important;
    width: 400px;
    max-height: calc(100vh - 104px);
    top: 40px;
    border: 1px solid var(--light-gray);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    display: flex;
    flex-direction: column;
    transition: right 1s, transform 1s;
    -webkit-animation: rightToLeft 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    
    .body {
      flex: 1;
    }
  }

  @keyframes rightToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const TriggerButton = styled(Button)`
    position: fixed;
    right: 0;
    bottom: 40px;
    z-index: 1;
`;

const ItemWrapper = styled.div`
  padding: 20px;
  margin-top: 15px;
  border-radius: 6px;
  background-color: var(--white-smoke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  .fontsize--min {
    font-size: 0.8em;
    margin-right: 20px;
  }
  
  .fontsize--max {
    font-size: 1.2em;
    margin-left: 20px;
  }
`;

const Color = styled.a`
  padding: 0;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ThemeButton = styled(Button)`
    align-items: center;
    display: flex;
    justify-content: center;
    border-style: solid;
`;

const Wrapper = ({theme, setTheme}) => {
  return (
    <ThemePopup
      trigger={<TriggerButton>Theme Settings</TriggerButton>}
      position='right center'
      modal
    >
      {(close) => {
        return (
          <>
            <div className="header">

            </div>
            <div className="body">
              <h4>Font Size</h4>
              <ItemWrapper>
                <div className='fontsize--min'>
                  Aa
                </div>
                <StyledSlider
                  min={0.8}
                  max={1.2}
                  defaultValue={theme.fontSize.slice(0, -2)}
                  marks={{0.8: '', 0.9: '', 1: '', 1.1: '', 1.2: ''}}
                  step={null}
                  onChange={(value) => {
                    setTheme({
                      ...theme,
                      fontSize: `${value}em`
                    })
                  }}
                />
                <div className='fontsize--max'>
                  Aa
                </div>
              </ItemWrapper>
              <h4> Colors </h4>
              <ItemWrapper>
                {colors.map((color) => {
                  return (
                    <Color
                      key={color}
                      onClick={() => {
                        setTheme({
                          ...theme,
                          color,
                        });
                      }}
                      style={{
                        backgroundColor: color,
                      }}>
                      {theme.color === color && <Icon name="close" color="#fff"/>}
                    </Color>
                  )
                })}
              </ItemWrapper>
              <h4> Background </h4>
              <ItemWrapper>
                {themes.map((th) => {
                  return (
                    <ThemeButton
                      key={th.name}
                      style={{
                        backgroundColor: th.color,
                        borderColor: theme.color,
                        borderWidth: th.name === theme.name ? '3px' : '0',
                      }}
                      onClick={() => {
                        setTheme({
                          ...theme,
                          name: th.name,
                          backgroundColor: th.color,
                        })
                      }}/>
                  )
                })}
              </ItemWrapper>

            </div>
            <div className="footer">
              <Button transparent onClick={close}>
                <Icon name="close" color="#fff"/>
              </Button>
            </div>
          </>
        )
      }}
    </ThemePopup>
  );
};

Wrapper.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};

export default withTheme(Wrapper);
