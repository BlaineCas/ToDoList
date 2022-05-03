import React, { useCallback, useState } from 'react'
import ToDoCard from './ToDoCard'
import './ToDoContainer.css'
import Modalu from './Modalu';


function ToDoContainer() {

    const [cardArray, setCardArray] = useState([])
    const [progressArray, setProgressArray] = useState([])
    const [doneArray, setDoneArray] = useState([])

    const handleMoveToProgress = () => {
        console.log('muie')
    }

    const handleCallbackModal = useCallback((item) => {
        setCardArray(oldArray => [...oldArray, item])
    },[])
    console.log(cardArray)
    return (
        <div className="task-container">
            <div className="to_do_container">
                <div className="status_add">
                    <h2>To Do:</h2>
                    <Modalu parentCallback={handleCallbackModal}/>
                </div>
                <div className="to_do">
                    {cardArray.map((card) =>
                        <ToDoCard
                        task={card.task}
                        type={card.type}
                        difficulty={card.difficulty}
                        date={card.date}
                        onClick={handleMoveToProgress}/>
                    )}
                </div>
            </div>
            <div className="in_progress_container">
                <div className="status_add">
                    <h2>In Progress:</h2>
                    <Modalu parentCallback={handleCallbackModal}/>
                </div>
                <div className="to_do">
                </div>
            </div>
            <div className="done_container">
                <div className="status_add">
                    <h2>Done:</h2>
                    <Modalu parentCallback={handleCallbackModal}/>
                </div>
                    <div className="to_do">
                    </div>
                </div>
        </div>
    )
}

export default ToDoContainer
