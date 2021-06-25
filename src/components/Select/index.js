import ReactSelect from "react-select";
import React from "react";
import {withTheme} from "styled-components";

const Select = (props) => {
  return <ReactSelect {...props} styles={{
    option: (provided, state) => ({
      ...provided,
      padding: '1em',
      color: state.isSelected ? 'var(--white)' : 'var(--black)',
      backgroundColor: state.isSelected ? props.theme.name === 'light' ? 'var(--black)' : props.theme.color : 'var(--white)',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '7px 15px',
    }),
    control: (provided) => ({
      ...provided,
      marginBottom: '1em',
    })
  }}/>
};

export default withTheme(Select);
