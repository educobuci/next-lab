import Head from 'next/head'
import { useState } from 'react'
import Form from './Form'

export default function Home() {
  const [todos, setTodos] = useState([])
  const setComplete = (index: number, complete: boolean) => {
    setTodos(todos.map((todo, i) => ({ ...todo, complete: index === i ? complete : todo.complete }) ))
  }
  
  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-white bg-gray-100 flex flex-col items-center justify-center sm:py-12">
      <Head>
        <title>Todo Next</title>
      </Head>
      <main>
        <h1 className="text-4xl text-center mb-4 font-thin">todo next</h1>
        <div className="bg-white p-4 rounded-lg shadow-md w-500">
          <Form onSubmit={(text) => setTodos([...todos, { text, complete: false }])} />
          <ul className="mt-2">
            {
              todos.map(({text, complete}, index) =>
                <li key={index}>
                  <input onChange={(e) => setComplete(index, e.target.checked)} id={`box${index}`} checked={ complete } type="checkbox" className="border-gray-500 rounded-full" />
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
