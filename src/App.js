import './App.css'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Counter } from './components/Counter'
import { CounterProvider } from './context/CounterContext'
import { DataProvider } from './context/DataContext'
import { GameBoard } from './components/GameBoard'

function App() {
  return <GameBoard />
  // return (
  //   <DataProvider>
  //     <CounterProvider>
  //       <div className="App">
  //         <Header />
  //         <Content />
  //         <Counter />
  //       </div>
  //     </CounterProvider>
  //   </DataProvider>
  // )
}

export default App
