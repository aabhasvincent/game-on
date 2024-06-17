import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./register.scss";
import { useRef } from "react";
import { Outlet } from "react-router";

type RegistrationForm = {
  name: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  dob: string;
  username: string;
};

export const Register = () => {
  const [registrationStatus, setRegistrationStatus] =
    React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<RegistrationForm>();

  const registrationFormRef = useRef(null);

  const checkUser = () => {
    const userData = new FormData(registrationFormRef.current as any);
    fetch(`http://localhost:4000/api/checkUser`, {
      method: "POST",
      body: userData,
    }).then(async (response: any) => {
      if (response.status === 200) {
        const responseBody = await response.json();
        if (responseBody?.message) {
          setError("email", {
            type: "custom",
            message: responseBody?.message,
          });
        } else {
          const tempData = {
            name:userData.get('name'),
            lastName:userData.get('name'),
            phoneNumber: userData.get('phoneNumber'),
            email: userData.get('email'),
            dob: userData.get('dob'),
            username: userData.get('username'),
          }
          
          localStorage.setItem("userData", JSON.stringify(tempData));
          setRegistrationStatus(true);
        }
      }
    });
  };

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    checkUser();
  };

  const getEmailError = () =>
    errors.email?.type === "required" ? (
      <p className="error" role="alert">
        Email is required
      </p>
    ) : (
      <p className="error">{errors.email?.message}</p>
    );

  return !registrationStatus ? (
    <div className="page">
      <div className="forms">
        <h1 className="text-2xl font-bold mb-2">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          name="registrationForm"
          ref={registrationFormRef}
        >
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Name"
          ></input>
          {errors.name && <p className="error">This field is required</p>}

          <label>Last Name</label>
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          ></input>
          {errors.lastName && <p className="error">This field is required</p>}

          <label>Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
          ></input>
          {getEmailError()}

          <label>Phone Number</label>
          <input {...register("phoneNumber")} placeholder="----------"></input>

          <label>Date of birth</label>
          <input {...register("dob")} placeholder="dd/mm/yy"></input>

          <label>Username</label>
          <input {...register("username")} placeholder="username"></input>
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  ) : (
    <Outlet />
  );
};
