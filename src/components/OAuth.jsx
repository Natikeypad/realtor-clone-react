import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className="w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900 flex justify-center items-center">
      <FcGoogle className="bg-white rounded-full mr-2 text-2xl"/>
      Continue with Google
    </button>
  )
}
