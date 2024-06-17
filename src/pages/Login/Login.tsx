import { SubmitHandler, useForm } from "react-hook-form";
import "../../index.css";
import { useRef , useState} from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const [error, setError] = useState('');
  const { dispatch } = useAuthContext();
  const loginFormRef = useRef(null);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    const formData = new FormData(loginFormRef?.current as any);
    fetch(`http://localhost:4000/api/login`, {
      method: "POST",
      body: formData,
    }).then(async (res) => {
      const resbody = await res.json();
      if (resbody?.error) {
        setError(resbody.error);
        console.log(resbody.error);
      } else {
        localStorage.setItem('user', JSON.stringify(resbody));
        dispatch({ type: "LOGIN", payload: resbody });
        navigate('/names' , {replace : true})
      }
    });
  };

  return (
    <div className="page loginPage">
      <div className="forms loginForm">
        <h1 className="text-2xl font-bold mb-2">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)} ref={loginFormRef}>
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          ></input>
          {errors.email && (
            <p className="error">This field is required</p>
          )}
          <br></br>
          <label>Password</label>
          <input {...register("password")} type="password"></input>
          {
            error && <p className="error">{error}</p>
           }
          <button type="submit">Login</button>
           
        </form>
      </div>
    </div>
  );
};
