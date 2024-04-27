"use client";
import { PrimaryBtn } from "@/components/common/buttons/Buttons";
import MainHeader from "@/components/shared/Header";
import { AuthContext } from "@/providers/AuthProvider";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const LoginPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn, user } = useContext(AuthContext);
  const router = useRouter();
  const [isPassShow, setIsPassShow] = useState(false);
console.log(router);

  const onSubmit = (data) => {
    const { password, email } = data;

    // register a user using firebase
    logIn(email, password)
      .then((userCredentials) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged In Successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(userCredentials);
        router.push('/');
        // clear the form
        reset();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
      });
  };

  console.log(user);

  return (
    <>
      <MainHeader />
      {/* Login Form */}
      <div className="flex items-center justify-center p-7 mt-11 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-y-4 p-8 bg-slate-100 rounded-lg sm:min-w-[435px]"
        >
          <h3 className="text-2xl font-semibold">Login to your account</h3>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              {...register("email", { required: true })}
              className={`${errors.email && "!border !border-red-500"}`}
            />
            {errors.email && (
              <p className="text-red-500 mt-2 text-sm">
                This field is required!
              </p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type={isPassShow ? "text" : "password"}
              {...register("password", {
                required: true,
                pattern:
                  /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
              })}
              className={`${errors.password && "!border !border-red-500"}`}
            />
            {/* Password error handling */}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 mt-2 text-sm">
                Make a strong password using special characters!
              </p>
            )}
            {/* Password error handling */}
            {errors.password?.type === "required" && (
              <p className="text-red-500 mt-2 text-sm">
                This field is required!
              </p>
            )}
            {/* Password hide show */}
            {isPassShow ? (
              <button
                type="button"
                onClick={() => setIsPassShow(false)}
                className="absolute right-[10px] z-10 text-[1.4rem] top-[55%]"
              >
                <IoEyeOutline />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsPassShow(true)}
                className="absolute right-[10px] z-10 text-[1.4rem] top-[55%]"
              >
                <IoEyeOffOutline />
              </button>
            )}
          </FormControl>
          {/* Register */}
          <PrimaryBtn className="mt-4" type="submit">Login</PrimaryBtn>

          {/* Login Footer */}
          <div className="mt-6 flex items-center justify-center gap-x-3 flex-wrap gap-y-2">
            <p>Don't have an account? </p>
            <Link href="/register" className="text-green-600 transition-all ease-in-out duration-300 hover:text-blue-700 hover:bg-indigo-200">Register here</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
