import { Todo } from "../entities/Todo"

export type PersentTodos = (todos: Array<Todo>) => void

export interface TodoInteractorInterface {
  createTodo(text: string): void
  completeTodo(index: number, complete: boolean): void
  listTodos(): void
}

export class TodoInteractor implements TodoInteractorInterface {
  todos: Array<Todo>
  presenter: PersentTodos

  constructor(todos: Array<Todo>, presenter: PersentTodos) {
    this.todos = todos
    this.presenter = presenter
  }

  createTodo(text: string): void {
    this.presenter([...this.todos, { text, complete: false} ])
  }

  completeTodo(index: number, complete: boolean): void {
    this.presenter(this.todos.map((todo, i) => ({ ...todo, complete: index === i ? complete : todo.complete })))
  }

  async listTodos(): Promise<void> {
    this.todos = await Promise.resolve([{ text: 'Fake Todo from DB', complete: false }])
    this.presenter(this.todos)
  }
}