import React from 'react'

interface ButtonProps {
   text: string; 
  }

function Button({text}: ButtonProps) {
  return (
    <button className="w-full bg-white text-red-800 rounded-full py-3 cursor-pointer">
      {text}
    </button>
  )
}

export default Button
