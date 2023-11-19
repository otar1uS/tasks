import { useEffect, useState } from "react";
import Input from "./Input";
import useAuthDispatch from "../context/AuthContext";

function RegisterOptions({ isItRegister }: { isItRegister: boolean }) {
  const { stateUser, setStateUser } = useAuthDispatch();

  const { username, email, password } = stateUser;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setStateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //     e.preventDefault();
  //     const data = { username, email, password };
  //     if (isItRegister) {
  //       dispatch(createPost({ ...data, endpoint: `users/register` }));
  //       setStateUser({
  //         username: "",
  //         email: "",
  //         password: "",
  //       });
  //     }

  //     if (!isItRegister) {
  //       dispatch(createPost({ ...data, endpoint: `users/login` }));
  //     }
  //   };

  //   useEffect(() => {
  //     return () => {
  //       dispatch(clearError());
  //     };
  //   }, [isItRegister, dispatch]);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2">
      <div className="bg-gray-100 p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          {isItRegister ? "Register" : "Login"}
        </h2>
        <p className="text-gray-700 text-[12px] font-medium mb-3">
          Nice to meet you! Enter your details to{" "}
          {isItRegister ? "Register" : "Login"}.
        </p>
        <form onSubmit={""}>
          {isItRegister && (
            <Input
              type="text"
              name="username"
              label="Your Name"
              value={username}
              onChange={handleChange}
              required
            />
          )}

          <Input
            type="email"
            id="email"
            name="email"
            label="Your Email"
            value={email}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className={`w-full shadow-md  bg-gray-900 hover:bg-gray-950 text-white     p-2 rounded-md  transition-colors`}
          >
            {isItRegister ? "Register" : "Login"}
          </button>
        </form>
      </div>

      {/* {registerError && (
      <div className="w-96 h-[3rem] flex items-center bg-white rounded justify-center text-red-600">
        <p>{registerError.error || registerError.message.error}</p>
      </div>
      )}  */}
    </div>
  );
}

export default RegisterOptions;
