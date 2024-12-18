import React from 'react'
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div>
          <h1 className="text-xl font-extralight">Landing Page</h1> 
          <Card />
          {/* Duplicated Card component */}
          <Card />
          <Card />
          <Card />
    </div>
  )
}

export default Landing
