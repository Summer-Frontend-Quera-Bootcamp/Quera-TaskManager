import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Index: React.FC = () => {
  let greetin = "به کوئرا تسک منیجر خوش برگشتی ";
  let smile = ":)";

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
    console.log("validate Email => ", validateEmail(newEmail));
  };

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const validatePassword = (password: string): boolean => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/u;
    return regex.test(password);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
    console.log("validate password =>", validatePassword(newPassword));
  };

  const handleSubmitting  =async  (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (isValid && isValidPassword) {
      const data =await axios.get("https://quera.iran.liara.run/accounts/");
      console.log("data", data);
      console.log("email", email);
      console.log("password", password);
    }
  };

  return (
    <div className="flex flex-col items-center my-auto mt-[149px]" dir="rtl">
      <form className="flex flex-col bg-white rounded-lg shadow-md z-[1]">
        <h1 className="sm:text-HL text-HS text-center pt-[24px] mx-[65.5px]">
          {" "}
          {greetin}
          {smile}
        </h1>

        <div className="text-right mx-[24px]">
          <label htmlFor="email" className="font-normal text-TS">
            ایمیل
          </label>
          <br />
          <input
            onChange={(e) => handleEmailChange(e)}
            value={email}
            type="email"
            id="email"
            className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"
          />
        </div>

        <div className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="password" className="font-normal text-TS">
            رمز عبور
          </label>
          <br />
          <input
            onChange={(e) => handlePasswordChange(e)}
            value={password}
            type="password"
            id="password"
            className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"
          />
        </div>

        <Link
          to="/forgot"
          className="text-right mx-[24px] mt-[8px] text-[#208D8E] font-extra-bold text-TXS"
        >
          رمز عبور را فراموش کرده‌ای؟
        </Link>

        <button
          className="mx-[24px] mt-[32px] mb-[24px] p-[10px]  bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700 text-center"
          onClick={handleSubmitting}
        >
          ورود
        </button>

        <div className="flex flex-row-reverse m-auto text-TM my-[24px]">
          <Link
            className="text-[#208D8E]  font-extra-bold mr-[7px]"
            to="/SignUp"
          >
            ثبت‌نام
          </Link>
          <p className="font-medium">ثبت‌نام نکرده‌ای؟</p>
        </div>
      </form>
    </div>
  );
};

export default Index;
