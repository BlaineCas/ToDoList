import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector2(props) {
  const [type, setType] = React.useState('');

  const onTrigger = (e) => {
    setType(e.target.value);
    props.parentCallback(e.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={onTrigger}
          autoWidth
          label="Type"
        >
          <MenuItem value={'Bugfix'}>Bugfix</MenuItem>
          <MenuItem value={'Refactor'}>Refactor</MenuItem>
          <MenuItem value={'Implementation'}>Implementation</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}