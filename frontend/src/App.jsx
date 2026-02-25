import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { Theme } from "./Theme"
import { Routes, Route } from "react-router"
import { Layout } from "./components/assets/Layout"
import { Home} from "./pages/Home"
import { Clothes } from "./pages/Clothes"

export const App = () => {

  return (
    <ThemeProvider theme={Theme}>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/clothes" element={<Clothes/>} />
        </Route>
      </Routes>
      </ThemeProvider>
  )
}
