import React from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div className='gifItem animate__animated animate__backInLeft'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
