import React from 'react'
import './RightSidebar.css'
import Pen from '../../assets/pen-solid.svg'
import Message from '../../assets/message-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h5>The overflow blog</h5>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                <img src={Pen} alt="pen" width='12' />
                <p>The open-source game engine you’ve been waiting for: Godot</p>
              </div>
              <div className='right-sidebar-div-2'>
                <img src={Pen} alt="pen" width='12' />
                <p>How Intuit democratizes AI development across teams through reusability.</p>
              </div>
          </div>
          <h5>Featured on Meta</h5>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                <img src={Message} alt="comment" width='12' />
                <p> We've added a "Necessary cookies only" option to the cookie consent popup.</p>
              </div>
              <div className='right-sidebar-div-2'>
                <img src={Message} alt="comment" width='12' />
                    <p>Review queue workflows -Final release...</p>
              </div>
              <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="comment" width='12' />
                <p>Temporary policy: ChatGPT is banned</p>
              </div>
          </div>
          <h5>Hot Meta Posts</h5>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                <span  className='meta-posts-num' >38</span>
                <p>Staging Ground Beta 1 Recap, and Reviewers needed for Beta 2.</p>
              </div>
              <div className='right-sidebar-div-2'>
                <span className='meta-posts-num'>12</span>
                <p>Why was this spam flag declined, yet the question marked as spam? </p>
              </div>
              <div className='right-sidebar-div-2'>
                <span className='meta-posts-num'>64</span>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
              </div>
          </div>
    </div>
  )
}

export default Widget