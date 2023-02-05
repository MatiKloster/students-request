import { FormControl, InputLabel, MenuItem } from '@mui/material';
import * as React from 'react';
import Select from '@mui/material/Select';
import { useCallback, useEffect, useState } from 'react';

const SelectCustom = ({needsLabel, label, labelId, callback, required, id, path}) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5273/"+ path)
        .then(response => response.json())
        .then(data => setItems(data));
  },[path]);

  return (
    <FormControl fullWidth>
    {needsLabel &&
      <InputLabel id={id}>{label}</InputLabel>}
    <Select
      labelId={labelId}
      id={id}
      label={label}
      onChange={callback}
      required={required}
    >
      {items.map((item) => 
        <MenuItem value={item} >
          
        </MenuItem>)}
    </Select>
  </FormControl>
  )
}

export default SelectCustom;