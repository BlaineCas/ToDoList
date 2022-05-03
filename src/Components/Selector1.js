import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector1(props) {
  const [difficulty, setDifficulty] = React.useState('');

  const onTrigger = (e) => {
    setDifficulty(e.target.value);
    props.parentCallback(e.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={difficulty}
          onChange={onTrigger}
          autoWidth
          label="Difficulty"
        >
          <MenuItem value={'Hard'}>Hard</MenuItem>
          <MenuItem value={'Medium'}>Medium</MenuItem>
          <MenuItem value={'Easy'}>Easy</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}