"use client"

import React, { useState } from 'react'
import Form from '@components/Form'
import Navbar from "@components/Navbar"

const CreateWork = () => {
  const {work, setWork} = useState({
    creator: "",
    category: "",
    title: "",
    description: "",
    price: "",
    photos: []
  })
  return (
    <>
    <Navbar />
    <Form 
    
    type="Create"
    work={work}
    setWork={setWork}
    />
    </>
  )
}

export default CreateWork