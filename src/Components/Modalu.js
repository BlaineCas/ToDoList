import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Backdrop, TextField } from '@mui/material';
import Selector1 from './Selector1'
import Selector2 from './Selector2'
import Fade from '@mui/material/Fade';
import BasicDatePicker from './DatePicker';
import Button from '@mui/material/Button'
import './Modalu.css'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:500,
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px',
};

function Modalu(props) {
  const [item,setItem] = React.useState({
    task:'',
    difficulty:'',
    type:'',
    date:''
  })

  const onTrigger = () => {
    if(item.task !== '' && item.difficulty !=='' && item.date !== '' && item.type !== '')
      {props.parentCallback(item)}
    handleClose()
  }

  const resetValues = () => {
    setItem({
    task:'',
    difficulty:'',
    type:'',
    date:''
  })}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetValues()
    setOpen(false)
  }
  const [err, setError] = React.useState(false);
  const handleSuccess = () => setError(false);
  const handleError = () => setError(true);
  const handleOnClick = () => {
    handleOpen()
    handleSuccess()
  }

  const handleTextField = (e) => {
    e.target.value.length > 20 ? handleError() : handleSuccess()
    if(e.target.value.length <= 20)
      {setItem(prevItem => ({
        ...prevItem,
        task:e.target.value
      }))}
    else
      {setItem(prevItem => ({
        ...prevItem,
        task:''
      }))}
  }

  const handleCallbackSelector2 = React.useCallback((childData) =>{
    setItem(prevItem => ({
      ...prevItem,
      type:childData
    }))},[])

  const handleCallbackSelector1 = React.useCallback((childData) =>{
      setItem(prevItem => ({
        ...prevItem,
        difficulty:childData
      }))},[])

  const handleCallbackDate = React.useCallback((childData) =>{
      setItem(prevItem => ({
        ...prevItem,
        date:childData
      }))},[])
  return (
    <div>
      <IconButton  aria-label='add task' onClick={handleOnClick}>
        <AddIcon/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Box sx={style}>
          <div id="modal-modal-title" className='form-text'>
            <h2>Add Task</h2>
          </div>
          <div id="modal-modal-description" className='form-class'>
            <form className='form'>
              <TextField
                error = {err}
                id="outlined-basic"
                label="Task Description"
                variant="outlined"
                onChange={handleTextField}/>
              <Selector1 parentCallback={handleCallbackSelector1}/>
              <Selector2 parentCallback={handleCallbackSelector2}/>
              <BasicDatePicker parentCallback={handleCallbackDate}/>
            </form>
            <div className="btn-cls">
              <Button variant='contained' className='button-cls' size='large' onClick={onTrigger}>Submit</Button>
            </div>
          </div>
        </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Modalu