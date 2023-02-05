import { FormControl, InputLabel } from '@mui/material';
import * as React from 'react';
import Select from '@mui/material/Select';

const SelectCustom = ({needsLabel, label, labelId, callback, required, id}) => (
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
    </Select>
  </FormControl>
)

export default SelectCustom;