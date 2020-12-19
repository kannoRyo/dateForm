import React 　from 'react'
import {DELETE_SCHEDULE} from '../action/index'

import {Modal,Fade,Backdrop, Button, IconButton} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'

const scheduleElement = ({schedule,board,dispatch,content,paper,isOpen,handleToggle,modalStyle,modal})=>{
    const month = schedule.date.substring(5,7)
    const date = schedule.date.substring(8)
    const time = schedule.time
    const title = schedule.title
    const description = schedule.description
    const id = schedule.id

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
            <div style={{display:'flex'}}>
            <div>
            <div className={content}> 
                <p >date:{`${month}/${date}`} </p>
                <Button onClick={handleToggle} variant="contained" style={{backgroundColor:'#39475D',color:'#fcfcfc',margin:'14px 0px 0px 30px',width:'220px',height:'33%'}} >aaaaa</Button>
            </div>
            <p style={{textAlign:'left',fontSize:'20px',fontFamily:'Noto Sans JP',marginTop:'0'}}>title:{title}</p>
            </div>
            </div>

            <IconButton aria-label="delete" onClick={(e)=>deleteSchedule(e)}  style={{width:'20px',height:'20px'}} >
            <DeleteOutlineOutlinedIcon size="large"/>
            </IconButton>
        </div>
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
          <div className={paper} >
    <h2 id="transition-modal-title">{`${month}/${date}`}の予定（{time}）</h2>
            <p id="transition-modal-description" style={{fontSize:'20px',fontFamily:'Noto Sans JP'}}>タイトル:{title}</p>
            <p id="transition-modal-description" style={{fontSize:'20px',fontFamily:'Noto Sans JP'}}>詳細:{description}</p>
          </div>
        </Fade>
      </Modal>       
        </>
    )
}

export default scheduleElement