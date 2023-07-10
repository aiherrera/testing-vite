import { Greeting } from './components/greeting'

function App() {
  return (
    <div className="flex h-screen items-center w-full justify-center">
      <p>Hey there, &nbsp;</p>
      <Greeting name="Alain" />
    </div>
  )
}

export default App
