import React from 'react'
import "./style.scss"
import Arrow from '../../shared/arrow'

const BlogCard = ({ user,date,image,title,description}) => {
  return (
    <div className='blog_card'>
            <div className="image_section">
                <img src={image} alt={title} />
            </div>
            <div className="content_section">
                <div className="info_bar">
                    <div className="user_name">By { user}</div>
                    <div className="posted_date">{date}</div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='readmore_cta'>
                     <span className="text">Read More</span>
                     <Arrow />
                </div>
            </div>
    </div>
  )
}

export default BlogCard