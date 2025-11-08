"use client";

import React, { useState } from "react";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";
import { useDispatch, useSelector } from "react-redux";
import { showLogin, showSignup } from "@/redux/authShowSlice";

import { RootState, AppDispatch } from "@/redux/store";

export default function MenuLink() {
  const dispatch = useDispatch();
  const { showLoginModal, showSignupModal } = useSelector(
    (state: RootState) => state.authShow
  );

  return (
    <div className="bg-white border border-neutral-300 rounded-md   w-40">
      <div className="">
        <div>
          <p
            onClick={() => dispatch(showLogin())}
            className="cursor-pointer px-6 pt-3 pb-1 hover:bg-neutral-300"
          >
            login
          </p>
        </div>
        <div>
          <p
            onClick={() => dispatch(showSignup())}
            className="cursor-pointer px-6 pb-3 pt-1 hover:bg-neutral-300"
          >
            Sign Up
          </p>
        </div>
      </div>
      {showLoginModal && <LoginModal />}
      {showSignupModal && <SignupModal />}
    </div>
  );
}
