import { Todo } from "../entities/Todo"

export type TodosPresenter = (todos: Array<Todo>) => void

export interface TodosInteractorInterface {
  createTodo(text: string, presenter: TodosPresenter): void
  completeTodo(index: number, complete: boolean, presenter: TodosPresenter): void
  listTodos(presenter: TodosPresenter): void
}

export class TodosInteractor implements TodosInteractorInterface {
  todos: Array<Todo>

  constructor() {
    this.todos = []
  }

  createTodo(text: string, presenter: TodosPresenter): void {
    this.todos = [...this.todos, { text, complete: false} ]
    presenter(this.todos)
  }

  completeTodo(index: number, complete: boolean, presenter: TodosPresenter): void {
    this.todos = this.todos.map((todo, i) => ({ ...todo, complete: index === i ? complete : todo.complete }))
    presenter(this.todos)
  }

  async listTodos(presenter: TodosPresenter): Promise<void> {
    this.todos = await Promise.resolve([{ text: 'Fake Todo from DB', complete: false }])
    presenter(this.todos)
  }
}