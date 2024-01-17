// App.test.js
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

test("add2number function works correctly with positive numbers", () => {
  const { getByLabelText, getByText } = render(<App />)

  const firstInput = getByLabelText("First number:")
  userEvent.type(firstInput, "123")

  const secondInput = getByLabelText("Second number:")
  userEvent.type(secondInput, "456")

  const calculateButton = getByText("Calculate")
  userEvent.click(calculateButton)

  const resultField = getByText("Result: 579")
  expect(resultField).toBeInTheDocument()
})

test("add2number function works correctly with negative numbers", () => {
  const { getByLabelText, getByText } = render(<App />)

  const firstInput = getByLabelText("First number:")
  userEvent.type(firstInput, "-50")

  const secondInput = getByLabelText("Second number:")
  userEvent.type(secondInput, "-30")

  const calculateButton = getByText("Calculate")
  userEvent.click(calculateButton)

  const resultField = getByText("Result: -80")
  expect(resultField).toBeInTheDocument()
})

test("add2number function works correctly with one empty input", () => {
  const { getByLabelText, getByText } = render(<App />)

  const firstInput = getByLabelText("First number:")
  userEvent.type(firstInput, "123")

  // Leave the second input empty

  const calculateButton = getByText("Calculate")
  userEvent.click(calculateButton)

  const resultField = getByText("Result: 123")
  expect(resultField).toBeInTheDocument()
})

test("add2number function works correctly with both empty inputs", () => {
  const { getByText } = render(<App />)

  const calculateButton = getByText("Calculate")
  userEvent.click(calculateButton)

  const resultField = getByText("Result: ")
  expect(resultField).toBeInTheDocument()
})
