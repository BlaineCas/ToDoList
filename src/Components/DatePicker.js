import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(null);
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  const onTrigger = (newValue) => {
    handleChange(newValue)
    newValue > tomorrow ? props.parentCallback(newValue.toLocaleDateString()) : props.parentCallback('')
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Due Time"
        value={value}
        minDate={tomorrow}
        onChange={onTrigger}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}