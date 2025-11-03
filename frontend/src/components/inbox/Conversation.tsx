import React from 'react'

export default function Conversation() {
  return (
    <div className='flex flex-col gap-4 border border-neutral-300 rounded-xl p-6'>
        <h2 className='text-xl font-medium'>John Doe</h2>
        <p className='text-blue-700 cursor-pointer'>Go to Conversation</p>
    </div>
  )
}
