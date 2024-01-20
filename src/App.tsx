import { decrement, increment, incrementByAmount } from "./redux/features/counter/CounterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"


function App() {

const {count} = useAppSelector((state) => state.counter)
const dispatch=useAppDispatch()

  return (
    <>
      <div>
        <div>
          <button onClick={()=>dispatch(increment())}>increment</button>
        </div>
        <div>
          <button onClick={()=>dispatch(incrementByAmount(10))}>increment By Amount</button>
        </div>
        <div>{count}</div>
        <div>
          <button  onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
