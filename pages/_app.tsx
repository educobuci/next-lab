import React from 'react'
import 'tailwindcss/tailwind.css'
import { TodosInteractor } from 'use-cases/TodosInteractor'

function MyApp({ Component, pageProps }) {
  let interactor: TodosInteractor
  const create = (present) => interactor || (interactor = new TodosInteractor(present))
  const props = { ...pageProps, create }
  return <Component { ...props } />
}

export default MyApp
