import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm.js'
import LoginCreate from './LoginCreate.js'
import LoginPasswordLost from './LoginPasswordLost.js'
import LoginPasswordReset from './LoginPasswordReset.js'
import { UserContext } from '../../UserContext.js'
import styles from './Login.module.css'


const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="create" element={<LoginCreate />}/>
          <Route path="lost" element={<LoginPasswordLost />}/>
          <Route path="reset" element={<LoginPasswordReset />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login
