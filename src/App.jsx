import { useState } from "react"
import Principal from "./pages/Principal"
import Dados from "./components/Dados"


const App = () => {
    const name = 'Arthur'
    const profissao = 'Programador'
    const idade = 16

return (
    <>
        <Principal />
        <Dados nome={name} y={profissao} z={idade}/>
    </>
    
)
}
export default App  