import React 　from 'react'
import {DELETE_SCHEDULE} from '../action/index'

import {Checkbox,Modal,Fade,Backdrop} from '@material-ui/core';

const scheduleElement = ({schedule,board,dispatch,paper,isOpen,handleToggle,modalStyle,modal})=>{
    const month = schedule.date.substring(5,7)
    const date = schedule.date.substring(8)
    const time = schedule.time
    const title = schedule.title
    const description = schedule.description
    const id = schedule.id

    // const body = (
    //     <div style={modalStyle} className={modal}>
    //       <h2 id="simple-modal-title">Text in a modal</h2>
    //       <p id="simple-modal-description">
    //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //       </p>
    //     </div>
    //   );

    const deleteSchedule = (e) =>{
        e.preventDefault()
        if(!window.confirm(`削除しますか？ (title=${title})`)){
            return 
        }

        dispatch({
            type: DELETE_SCHEDULE,
            id: id
        })
    }


    return(
        <>
        <div className={board}>
            <p  style={{margin:'0',textAlign:'left'}}> 
                date:{`${month}/${date}`} <br/>
                time:{time} <br/>
                title:{title} <br/>
                description:{description}
            </p>
            {/* <input type="checkbox"  onChange={(e)=>deleteSchedule(e)} checked={false}/> */}
            <Checkbox  onChange={(e)=>deleteSchedule(e)}  color="default" style={{width:'20px',height:'20px'}} checked={false}/>
        </div>
        <button type="button" onClick={handleToggle}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={modal}
        open={isOpen}
        onClose={handleToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>       
        </>
    )
}

export default scheduleElement