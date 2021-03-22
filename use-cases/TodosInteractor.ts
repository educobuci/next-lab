import { Todo } from "../entities/Todo"

export type TodosPresenter = (todos: Array<Todo>) => void

export interface TodosInteractorInterface {
  createTodo(text: string): void
  completeTodo(index: number, complete: boolean): void
  listTodos(): void
}

export class TodosInteractor implements TodosInteractorInterface {
  todos: Array<Todo>
  presenter: TodosPresenter

  constructor(presenter: TodosPresenter) {
    this.todos = []
    this.presenter = presenter
  }

  createTodo(text: string): void {
    this.todos = [...this.todos, { text, complete: false} ]
    this.presenter(this.todos)
  }

  completeTodo(index: number, complete: boolean): void {
    this.todos = this.todos.map((todo, i) => ({ ...todo, complete: index === i ? complete : todo.complete }))
    this.presenter(this.todos)
  }

  async listTodos(): Promise<void> {
    this.todos = await Promise.resolve([{ text: 'Fake Todo from DB', complete: false }])
    this.presenter(this.todos)
  }
}