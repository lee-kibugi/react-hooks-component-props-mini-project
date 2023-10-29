import React from 'react'


export default function Article( {
  id,
  title,
  date = "January 1, 1970",
  preview,
})
//  const defaultDate = "January 1, 1970"
{
  return (
    <div>
      <article key={id}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
      </div>
  )
}
