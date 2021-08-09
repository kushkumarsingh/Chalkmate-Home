import React from 'react';
import Add from '../../../postModal/images/add.svg'
import Close from '../../../postModal/images/cross.svg'

const topBarStyle={
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '14px 16px',
  background: '#fff',
  borderRadius: '14px 14px 0px 0px',
  borderBottom: '1px solid #eee',
  position: 'sticky',
}

export default function TopBar (props){
    return(
            <div style={topBarStyle}>
              <p style={{color:'#000', font: '15px/17px Montserrat', letterSpacing: '0px', color: '#000000',alignItems:'center' ,display:'flex', fontWeight:'600'}}><img style={{paddingRight:'10px'}} src={Add} alt="Add"/>{props.title}</p>
              <button onClick={props.close} style={{position:'relative', cursor:"pointer", backgroundColor: '#fff', borderRadius:'100%', border:"none"}}>
                <img src={Close} alt="X"/>
              </button>
            </div>
    )
}