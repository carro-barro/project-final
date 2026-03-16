import { useState } from "react"
import { useUserStore } from "../../stores/useUserStore"

export const Users = () => {
  const users = useUserStore((state) => state.users)
  const addUser = useUserStore((state) => state.addUser)
  const [newUser, setNewUser] = useState({email: "", password: ""})

  const handleAddUser = () => {
    addUser(newUser)
  }

  return (
    <section>
      <input 
        type="email"
        value={newUser.email}
        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
        placeholder="example@gmail.com"
      />

    </section>
  )

}