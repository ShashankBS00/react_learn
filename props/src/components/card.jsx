import React from 'react'

const card = (props) => {
    console.log(props); 
  return (
    <div class="card">
  <h2>{props.user }</h2>
    <img src={props.img} alt="Nature" style={{width:"100%"}} />
  <p>This is a simple card design using only CSS.</p>
  <button>Read More</button>
</div>

  )
}

export default card
