import React from 'react'

export default function Card({img, name, text, classn}) {
  return (
    <div className={'card ${classn}'} style={{width: '18rem'}}>
  <img src={img} className="card-img-top w-100" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{text}</p>
    <p className="btn btn-primary">Go somewhere</p>
  </div>
</div>

  )
}
