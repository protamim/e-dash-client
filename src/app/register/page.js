"use client";
import { PrimaryBtn } from "@/components/common/buttons/Buttons";
import { AuthContext } from "@/providers/AuthProvider";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
// firebase UI css
import "firebaseui/dist/firebaseui.css";
import { useContext } from "react";


const UserRegisterPage = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

  return (
    <>
      <div className="flex items-center justify-center p-7 mt-11 ">
        <form className="flex flex-col items-center gap-y-4 p-8 bg-slate-100 rounded-lg hidden">
          <h3 className="text-2xl font-semibold">User Registration Form</h3>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          {/* Register */}
          <PrimaryBtn type="submit">Verify</PrimaryBtn>
        </form>

        {/* phone */}
        <div className="phone-auth-container"></div>
      </div>
    </>
  );
};

export default UserRegisterPage;
