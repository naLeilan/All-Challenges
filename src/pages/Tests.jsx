/***********************/
/***********************/
/***********************/
/***********************/
/***********************/
/****************uuid */
import { v4 as uuidv4 } from "uuid";

const todos = [
  { task: "mow the yard", id: uuidv4() },
  { task: "Work on Odin Projects", id: uuidv4() },
  { task: "feed the cat", id: uuidv4() },
];

export default function Tests() {
  return (
    <ul>
      {todos.map((todo) => (
        // here we are using the already generated id as the key.
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
/********************** */
