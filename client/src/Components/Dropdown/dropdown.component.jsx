import React from 'react';
import { useEffect } from 'react';

import {Dropdown} from 'reactjs-dropdown-component';

import './dropdown.style.scss';

const FormDrop = ({handleChange, list, name, title}) => {

  return(
    <div className="form-dropdown">
        <Dropdown 
        name = {name}
        title = {title}
        list = {list}
        onChange = {handleChange}
        styles={{
          wrapper: { width: '100%'},
          
        }}
        />
    </div>
  );
}

export default FormDrop;