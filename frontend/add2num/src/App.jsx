import { useState, useEffect } from "react"
import "../src/App.css"
import database from "../firebase"
import { getDatabase, ref, push, get, child, update } from "firebase/database"
import Log from "./components/Log"

function App() {
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [res, setRes] = useState("")
  const [log, setLog] = useState({})
  const dbRef = ref(getDatabase())

  const getResultLog = async () => {
    try {
      const snapshot = await get(child(dbRef, `OPS`))
      if (snapshot.exists()) {
        setLog(snapshot.val())
        console.log(snapshot.val()) // Log the updated state
      } else {
        console.log("No data available")
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getResultLog()
  }, [res])

  const writeResultLog = (num1, num2, res) => {
    const db = getDatabase()

    const newcal = {
      Num1: num1,
      Num2: num2,
      Res: res,
      // ... other properties of the log
    }

    const opsRef = ref(db, "OPS")
    const newLogRef = push(opsRef)
    const newLogKey = newLogRef.key

    const updates = {}
    update(newLogRef, newcal) // Updated this line

    update(ref(db), updates)

    getResultLog()
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = add2number(first, second)
    await setRes(result)
    await writeResultLog(first, second, result)
  }

  return (
    <>
      <div className="wrapper">
        <div className="content-field">
          <h1>Add 2 big numbers</h1>
          <div className="input-field">
            <form onSubmit={handleSubmit}>
              <label>
                First number:
                <input
                  type="text"
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
        <div className="log-field content-field">
          <h1>Previous calculations</h1>
          {Object.values(log).map(
            ({ Num1, Num2, Res }, index) =>
              Res !== "" && (
                <Log
                  key={index}
                  num1={Num1}
                  num2={Num2}
                  res={Res}
                />
              )
          )}
        </div>
      </div>
    </>
  )
}

export default App
