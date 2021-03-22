import { Todo } from 'entities/Todo'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { TodosPresenter, TodosInteractorInterface } from '../use-cases/TodosInteractor'
import Form from './Form'

export type TodoInteractorFactory = {
  create: (presenter: TodosPresenter) => TodosInteractorInterface
}

export default function Home(factory: TodoInteractorFactory) {
  const [todos, setTodos] = useState(new Array<Todo>())
  const interactor = factory.create(setTodos)
  useEffect(() => { interactor.listTodos() }, [])
  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-white bg-gray-100 flex flex-col items-center justify-center sm:py-12">
      <Head>
        <title>Todo Next</title>
      </Head>
      <main>
        <h1 className="text-4xl text-center mb-4 font-thin">todo next</h1>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: 500 }}>
          <Form onSubmit={(text) => interactor.createTodo(text) } />
          <ul className="mt-2">
            {
              todos.map(({text, complete}, index) =>
                <li key={index}>
                  <input id={`box${index}`}
                    onChange={(e) => interactor.completeTodo(index, e.target.checked)} 
                    checked={ complete } type="checkbox" className="border-gray-500 rounded-full" />
                  <label htmlFor={`box${index}`}
                    style={{ textDecoration: complete ? 'line-through' : '' }}
                    className="text-gray-500 ml-2">{ text }</label>
                </li>
              )
            }
          </ul>
        </div>
      </main>
    </div>
  )
}