import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import { db } from './fire'
import { AuthContext } from './Auth'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await db.signInWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch(error) {
        alert(error)
      }
    }, [history]
  )

  const { currentUser } = useContext(AuthContext)

  if(currentUser) {
    return <Redirect to="/" />
  }

  return (
    <section>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password:
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </section>
  )
}

export default withRouter(Login)