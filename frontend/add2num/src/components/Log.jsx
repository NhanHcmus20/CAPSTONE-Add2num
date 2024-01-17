import React from "react"

export default function Log({ num1, num2, res }) {
  return (
    <div>
      <div className="num1">
        {num1} + {num2} = {res}
      </div>
      <hr />
    </div>
  )
}
