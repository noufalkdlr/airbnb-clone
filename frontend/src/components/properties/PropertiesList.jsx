import React from 'react'
import PropertiesItem from "@/components/properties/PropertiesItem"


export default function PropertiesList() {
  return (
    <div className='flex gap-6' >
      <PropertiesItem/>
      <PropertiesItem/>
      <PropertiesItem/>
    </div>
  )
}
