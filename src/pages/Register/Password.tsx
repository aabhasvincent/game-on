import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./register.scss";
import {  useNavigate } from "react-router-dom";

type PasswordForm = {
  password: string;
  confirmPassword: string;
};

export const Password = () => {
  const passwordFormRef = useRef(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<PasswordForm>();

  const createUser = (pass: string) => {
    var userData = new FormData();
    const tempData = JSON.parse(localStorage.getItem("userData") as string);

    for (var key in tempData) {
      userData.append(key, tempData[key]);
    }
    userData.append("password", pass);

    fetch(`http://localhost:4000/api/signup`, {
      method: "POST",
      body: userData,
    }).then(async (response: any) => {
      const responseBody = await response.json();
      if (response.status === 200) {
        
        navigate("/login");
      } else {
        if (responseBody?.message && responseBody?.errorCode === "E11000") {
          navigate("/login");
        } else {
        }
      }
    });
  };

  const validatePassword = () => {
    if (passwordRef?.current?.value !== confirmPasswordRef?.current?.value) {
      setError("confirmPassword", {
        type: "custom",
        message: "Passwords mismatch",
      });
    } else {
      createUser(passwordRef?.current?.value || "");
    }
  };

  return (
    <div className="registrationPage">
      <div className="registrationForm">
        <h1 className="text-2xl font-bold mb-2">Password Creation</h1>
        <form ref={passwordFormRef}>
          <label>Create new Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
            ref={passwordRef}
            onChange={() => errors && clearErrors()}
          ></input>

          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", { required: true })}
            placeholder="password"
            ref={confirmPasswordRef}
            onChange={() => errors && clearErrors()}
          ></input>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}

          <button type="button" onClick={validatePassword}>
            Done
          </button>
        </form>
      </div>
    </div>
  );
};
