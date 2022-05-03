import React from 'react'
import './ToDoCard.css'
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ToDoCard(props) {
    return (
        <div className="card-container">
            <div className="content-wrapper">
                <div className="title-badge">
                    <CheckCircleOutlineIcon/>
                    <h3>{props.task}</h3>
                </div>
                <div className="priority">
                    <h5 className={props.difficulty === 'Hard' ? 'redbg' : (props.difficulty === 'Medium' ? 'bluebg' : 'greenbg')}>{props.difficulty}</h5>
                    <h5 className={props.type === 'Bugfix' ? 'redbg' : (props.type === 'Refactor' ? 'bluebg' : 'greenbg')}>{props.type}</h5>
                </div>
                <div className="due-time">
                    <AccessTimeSharpIcon/>
                    <h4>{props.date}</h4>
                </div>
            </div>
        </div>
    )
}

export default ToDoCard
