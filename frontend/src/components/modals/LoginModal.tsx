
"use client"

import { useSelector, useDispatch } from "react-redux"


import Modal from "./Modal"
import { hideLogin, showLogin } from "@/redux/authShowSlice"
import { RootState } from "@/redux/store"


export default function LoginModal() {

  const dispatch = useDispatch()

  const show = useSelector((state:RootState) => state.authShow.showLoginModal) 
  
  const handleClose = () => dispatch(hideLogin())


  if(!show) return null;

  return (
    <Modal label ="Login" onClose={handleClose}> </Modal>
  )
}
