import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { Theme } from "./Theme"
import { Routes, Route } from "react-router"
import { Layout } from "./components/assets/Layout"
import { Home} from "./pages/Home"
import { Clothes } from "./pages/Clothes"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { useState, useEffect } from "react"
import { API_BASE_URL } from "./constants"

export const App = () => {
  const [clothes, setClothes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchClothes = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL/clothes}`)

      if (!response.ok) {
        setError(true)
      }

      const data = await response.json()
      setClothes(data.response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClothes()
  }, [])

  return (
    <ThemeProvider theme={Theme}>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/clothes" element={<Clothes/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </ThemeProvider>
  )
}
