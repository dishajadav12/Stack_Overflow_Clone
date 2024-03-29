import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
      <QuestionsDetails/>
    </div>
    <RightSidebar/>
</div>
  )
}

export default DisplayQuestion