// import { toDo } from "../types/todo"

import { toDo } from "../types/todo"

// interface TodoItemProps {
//    Todo: toDo
// }

// export default function TodoItem({ Todo }: TodoItemProps) {
//    return (
//       <div>
//          <label  className="border rounded-md p-3 gap-2  flex items-center align-middle  bg-slate-400">
//             <input
//             checked={Todo.completed}

//             type="checkbox"
//              className="scale-125"
//              />
//              <span className={Todo.completed?"line-through text-red-300":""}>
//                {Todo.title}
//              </span>
//       </label>
//       </div>
//    )
// }

interface TodoItemProps {
   xx:toDo
}
export const TodoItem = ({xx}:TodoItemProps)=>{
   return(
      <div>
         <label>
            <input type="checkbox" checked={xx.completed} className="scale-125"/>
            <span className={xx.completed?"line-through":""}>
               {xx.title}
            </span>
            
         </label>
      </div>
   )

}