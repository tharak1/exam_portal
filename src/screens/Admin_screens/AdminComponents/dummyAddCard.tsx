import { Card } from '@mui/material'
import React from 'react'
import Modal from './Modal';


const DummyAddCard:React.FC = () => {
  return (
<Card
      sx={{
        height: 370,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid',
        borderColor: 'rgba(0, 0, 0, 0.12)',
        position: 'relative',
      }}
    >
<Modal/>
    </Card>
  )
}

export default DummyAddCard
