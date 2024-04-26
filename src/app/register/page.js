"use client";
import { PrimaryBtn } from "@/components/common/buttons/Buttons";
import { AuthContext } from "@/providers/AuthProvider";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";

const UserRegisterPage = () => {
  const {firebaseUI} = useContext(AuthContext);
  return (
    <>
      <div className="flex items-center justify-center p-7 mt-11 ">
        <form className="flex flex-col items-center gap-y-4 p-8 bg-slate-100 rounded-lg">
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
      </div>

      {/* phone auth */}
      {firebaseUI}
    </>
  );
};

export default UserRegisterPage;
