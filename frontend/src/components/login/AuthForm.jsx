import styled from 'styled-components'
import { useState } from 'react'


export const AuthForm = () => {
  const [newUser, setNewUser] = useState({email: "", password: ""})
  
  return (
    <form>
      <input 
        type="email"
        value={newUser.email}
        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
        placeholder="example@gmail.com"
      />
      <input 
        type="password"
        value={newUser.password}
        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
      />
    </form>
  )
}