import { useState, useEffect } from "react"
import "../src/App.css"
import database from "../firebase"
import { getDatabase, ref, onValue, get, child, set } from "firebase/database"
import Log from "./components/Log"
function App() {
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [res, setRes] = useState("")
  const [log, setLog] = useState({})
  const dbRef = ref(getDatabase())

  const getResultLog = () => {
    get(child(dbRef, `OPS`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setLog(snapshot.val())
          // console.log(log)
        } else {
          console.log("No data available")
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  useEffect(() => {
    setLog(getResultLog())
    console.log(log["Num1"])
  }, [])

  // function writeResultLog(num1, num2, res) {
  //   const db = getDatabase()
  //   set(ref(db, "OPS"), {
  //     Num1: num1,
  //     Num2: num2,
  //     Res: res,
  //   })
  // }
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

      sum = currentDigit + sum
    }

    return sum
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setRes(add2number(first, second))
    console.log(res)
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
        {/* <Log
          num1={log.Num1}
          num2={log.Num2}
          res={log.Res}></Log> */}
      </div>
    </>
  )
}

export default App
