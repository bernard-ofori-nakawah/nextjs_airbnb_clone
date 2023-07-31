"use client"

import Modal from "./Modal"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import axios from "axios"
import Heading from "../Heading"
import Input from "../Input"

const RegisterModal = () => {
  const RegisterModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register, 
    handleSubmit, 
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        RegisterModal.onClose()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subTitle="Create an account for free" />
      <Input />
    </div>
  )

  return (<Modal disabled={isLoading} isOpen={RegisterModal.isOpen} title="Register" actionLabel="Continue" onClose={RegisterModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} />)
}

export default RegisterModal