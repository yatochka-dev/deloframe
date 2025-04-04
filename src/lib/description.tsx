import React from 'react'

export default function descriptionGenerator(...vars: string[]) {
  return (
    <>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        Доступные переменные:
        <ul>
          {vars.map((v, i) => (
            // add two <br/> tags between items
            <li key={i}>
              <strong style={{ color: 'whitesmoke' }}>{v}</strong>,
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
