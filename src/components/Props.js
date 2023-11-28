import React from 'react'
const list = {
  salary: 100,
  position: "full-time",
  company: "kayhan pardaz"
}
const Props = () => {
  return (
    <div>
      <h1>{list.salary}</h1>
      <h1>{list.position}</h1>
      <h1>{list.company}</h1>
    </div>
  )
}

export default Props;