import React from 'react'

export default function Posts({id, title, body}) {
  return (
    <div className='m-2 p-3 bg-blue-600'>
        <li key={id}>
            <a href={`/posts/${id}`}>{title}</a>
        </li>
        <p>{body}</p>
    </div>
  )
}
