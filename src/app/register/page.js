"use client";
import { PrimaryBtn } from "@/components/common/buttons/Buttons";
import { AuthContext } from "@/providers/AuthProvider";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MainHeader from "@/components/shared/Header";

const UserRegisterPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, createAccount, userProfile, setReload } =
    useContext(AuthContext);

  const [isPassShow, setIsPassShow] = useState(false);

  const onSubmit = (data) => {
    const { password, email, user_name } = data;

    // register a user using firebase
    createAccount(email, password)
      .then((userCredentials) => {
        Swal.fire({
          title: `${data.user_name}`,
          text: " Thanks for register here!",
          icon: "success",
          customClass: {
            title: "!text-green-500",
          },
        });
        console.log(userCredentials);
        // clear the form
        reset();

        // Update a user's profile
        userProfile({
          displayName: user_name,
        })
          .then(() => {
            setReload(true);
            console.log("Profile updated");
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <MainHeader />
      <div className="flex items-center justify-center p-7 mt-11 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-y-4 p-8 bg-slate-100 rounded-lg sm:min-w-[435px]"
        >
          <h3 className="text-2xl font-semibold">User Registration Form</h3>
          <FormControl>
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              {...register("user_name", {
                required: true,
              })}
              className={`${errors.user_name && "!border !border-red-500"}`}
            />
            {errors.user_name && (
              <p className="text-red-500 mt-2 text-sm">
                This field is required!
              </p>
            )}
          </FormControl>
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
          <PrimaryBtn type="submit">Register Now</PrimaryBtn>
        </form>
      </div>
    </>
  );
};

export default UserRegisterPage;
