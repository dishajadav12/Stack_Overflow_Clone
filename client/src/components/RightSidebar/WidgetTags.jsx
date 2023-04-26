import React from 'react'
import './RightSidebar.css'
const WidgetTags = () => {
  const tags = ['c','css','express','html','firebase','java','javascript','MERN','mongodb','mysql','next.js','node.js','php','python','reactjs'];
  return (
    <div className='widget-tags'>
        <h5>Watch tags </h5>
        <div className='widget-tags-div'>
            {
              tags.map((tag)=> (
                 <p key={tag}>{tag}</p>
              ))
            }
        </div>
    </div>
  )
}

export default WidgetTags
