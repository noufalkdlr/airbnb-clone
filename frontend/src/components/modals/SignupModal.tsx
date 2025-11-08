"use client"

import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"
import { hideSignup } from "@/redux/authShowSlice"
import { RootState } from "@/redux/store"

export default function SignupModal() {

  const dispatch = useDispatch()
  const handleClose = () => dispatch(hideSignup()) 
  const show = useSelector((state:RootState) => state.authShow.showSignupModal)

  if(!show) return null
  return (


    <Modal label ="Signup" onClose={handleClose}

    > </Modal>
  )
}
