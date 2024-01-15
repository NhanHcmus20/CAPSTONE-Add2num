import { useState } from "react"
import "../src/App.css"

const API_URL = "this is api url"

function App() {
  const [first, setFirst] = useState(" ")
  const [second, setSecond] = useState(" ")
  const [res, setRes] = useState(" ")

  let add2number = (num1, num2) => {
    let carry = 0
    let sum = ""

    let i = num1.length - 1
    let j = num2.length - 1

    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i--]) : 0
      const digit2 = j >= 0 ? parseInt(num2[j--]) : 0

      const currentSum = digit1 + digit2 + carry
      carry = Math.floor(currentSum / 10)
      const currentDigit = currentSum % 10

      // Prepend the current digit to the result
      sum = currentDigit + sum
    }

    return sum;
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("call api to calculate")
    setRes("set to the result from api")
  }

  return (
    <>
      <div className="wrapper">
        <div className="content-field">
          <h1>Add 2 big number</h1>
          <div className="input-field">
            <form onSubmit={handleSubmit}>
              <label>
                First number:
                <input
                  type="text"
                  // pattern="[0-9]*"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </label>
              <label>
                Second number:
                <input
                  type="text"
                  value={second}
                  onChange={(e) => setSecond(e.target.value)}
                />
              </label>
              <button type="submit">Calculate</button>
            </form>
          </div>
          <div className="result-field">Result: {res}</div>
        </div>
      </div>
    </>
  )
}

export default App
