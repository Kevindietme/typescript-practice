import React from 'react'
import { Tform, defaultForm } from '../interface'

const Form = () => {
  const [form, setForm] = React.useState<Tform>(defaultForm)
  const [counter, setCounter] = React.useState<number>(0)
  const [counterMultiply, setCounterMultiply] = React.useState<number>(1)
  
  //@ts-ignore
  const handleFormInput = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement
    setForm({...form, [target.name]: target.value})
  }

  const handleButton = () => {
      setCounter(previous => previous + 1)
    }

  const handleButtonMultiply = () => {
    setCounterMultiply(previous => previous * 5)
  }

  const handleFormSubmit = () => {
 
  fetch('http://localhost:4000', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(form)
})

}

  return(
    <>
    <form action='submit'>
      <label htmlFor=''>First Name</label>
      <input type='text' name="firstName" onChange={e => handleFormInput(e)} />
      < br />

      <label htmlFor=''>Last Name</label>
      <input type='text' name="LastName" onChange={e => handleFormInput(e)} />
      < br />

      <label htmlFor=''>Email</label>
      <input type='text' name="email" onChange={e => handleFormInput(e)} />
      < br />

      <label htmlFor=''>Password</label>
      <input type='text' name="password" onChange={e => handleFormInput(e)} />
      </form>
      <button onClick={handleFormSubmit}>Submit</button>
      <button onClick={handleButton}>{counter}</button>
      <button onClick={handleButtonMultiply}>{counterMultiply}</button>
    
      </>
  )
}

export default Form