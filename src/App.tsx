import { dummydata } from "./data/todos"
import {TodoItem} from "./components/TodoItem"


function App() {

  return (
    <>
    <main className="py-10 h-screen bg-slate-300">
      <h1 className="text-3xl font-bold text-center pb-10 ">ToDo List</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
        {dummydata.map((todo)=>(
          <TodoItem xx={todo} />
        ))}
       
        </div>
      </div>
      
    </main>
      
    </>
  )
}

export default App
