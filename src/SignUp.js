import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import { auth, db } from './fire'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault()
    const {email, password} = event.target.elements
    try {
      await db.createUserWithEmailAndPassword(email.value, password.value)
      history.push('/')
    } catch(error) {
      alert(error)
    }
  }, [history])

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  )
}

export default withRouter(SignUp)