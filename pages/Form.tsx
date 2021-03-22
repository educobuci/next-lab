import { useState } from "react"

export type FormProps = {
  onSubmit: (value: string) => void
}

export default function Form({ onSubmit }: FormProps) {
  const [text, setText] = useState('')
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(text)
      setText('')
    }}>
      <input
        value={ text }
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-3"
        />
    </form>
  )
}