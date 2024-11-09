
import './App.css'

function App() {

  const btnclick = (value) => {
    alert(`${value} button clicked`)
  }

  return (
    <>

      <h3>React core Concent ration</h3>

      <button onClick={() => btnclick('first')}>first button </button>
      <button onClick={() => btnclick('second')}>second button </button>
      <button onClick={() => btnclick('third')}>third button </button>
      <button onClick={() => btnclick('fourth')}>fourth button </button>

    </>
  )
}

export default App
