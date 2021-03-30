import React from 'react'
import 'tailwindcss/tailwind.css'
import { TodosInteractor } from 'use-cases/TodosInteractor'

function MyApp({ Component, pageProps }) {
  const props = { ...pageProps, interactor: new TodosInteractor() }
  return <Component { ...props } />
}

export default MyApp
