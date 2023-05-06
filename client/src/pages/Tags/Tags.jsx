import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagList= [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript and its various dialects/implementations."
        },
        
        {
        id: 2,
        tagName: "python",
        tagDesc: "For questions regarding programming in Python and its various libraries and frameworks."
        },
        
        {
        id: 3,
        tagName: "java",
        tagDesc: "For questions regarding programming in Java and its various libraries and frameworks."
        },
        
        {
        id: 4,
        tagName: "csharp",
        tagDesc: "For questions regarding programming in C# and its various libraries and frameworks."
        },
        
        {
        id: 5,
        tagName: "ruby",
        tagDesc: "For questions regarding programming in Ruby and its various libraries and frameworks."
        },
        
        {
        id: 6,
        tagName: "php",
        tagDesc: "For questions regarding programming in PHP and its various libraries and frameworks."
        },
        
        {
        id: 7,
        tagName: "html",
        tagDesc: "For questions regarding HTML markup language and its usage in web development."
        },
        
        {
        id: 8,
        tagName: "css",
        tagDesc: "For questions regarding Cascading Style Sheets (CSS) and its usage in web development."
        },
        
        {
        id: 9,
        tagName: "reactjs",
        tagDesc: "For questions regarding programming in ReactJS and its usage in building user interfaces for web applications."
        },
        
        {
        id: 10,
        tagName: "angular",
        tagDesc: "For questions regarding programming in AngularJS and its usage in building web applications."
        },
        
        {
        id: 11,
        tagName: "nodejs",
        tagDesc: "For questions regarding programming in NodeJS and its usage in building server-side web applications."
        },
        
        {
        id: 12,
        tagName: "sql",
        tagDesc: "For questions regarding Structured Query Language (SQL) and its usage in managing relational databases."
        }]

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for other to find an answer your question.</p>
        <div className="tags-list-container">
            {
                tagList.map((tag) =>(
                    <TagsList tag={tag} key={tagList.id}/>
                ))
            }
        </div>
        </div>
       
    </div>
  )
}

export default Tags