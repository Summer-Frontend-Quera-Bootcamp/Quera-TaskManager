import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../service/auth";

type UserSubmitForm = {
  username: string;
  email: string;
  password: string;
  acceptTerms?: boolean;
};

const Index: React.FC = () => {
  const ValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required("وارد کردن نام الزامی می‌باشد!")
      .min(4, "حداقل طول نام ۴ کارکتر می‌باشد!")
      .max(150, "حداکثر طول نام ۲۰ کارکتر می‌باشد!")
      .matches(
        /^(?!.*[.+_@-]{2})[a-zA-Z0-9.+_@-]+[a-zA-Z0-9]$/i,
        "- فرمت نام نامعتبر است!"
      ),

    email: yup
      .string()
      .email(" ایمیل صحیح نیست!")
      .required("وارد کردن ایمیل الزامی است!")
      .matches(
        /^(?!.*[.-]{2})[A-Z0-9._-]+[A-Z0-9]+@[A-Z.-]+\.[A-Z]{2,}$/i,
        "فرمت ایمیل نامعتبر است!"
      ),
    password: yup
      .string()
      .required("وارد کردن رمز عبور الزامی می‌باشد!")
      .min(6, "حداقل طول رمز عبور ۶ کارکتر می‌باشد!")
      .max(40, "حداکثر طول رمز عبور ۴۰ کارکتر می‌باشد!"),
    acceptTerms: yup
      .bool()
      .oneOf([true], "برای ثبت نام پذیرفتن قوانین الزامی است!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(ValidationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: UserSubmitForm) => {
    registerUser(data).then((res) => {
      console.log("user", res);
    });
  };

  return (
    <div className="flex flex-col items-center my-auto" dir="rtl">
      <form
        className="needs-validation flex flex-col border border-whith bg-white rounded-lg max-h-[597px] shadow-md z-[1] mb-[50px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="sm:text-HL text-HS text-center pt-[24px] mx-[65.5px]">
          {" "}
          ثبت‌نام در کوئرا تسک منیجر{" "}
        </h1>

        <div className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="username" className="font-normal text-TS">
            نام کامل
          </label>
          <br />
          <input
            type="text"
            autoComplete="off"
            {...register("username")}
            className={`border border-gray-400 pr-3 rounded-md w-full h-[40px] focus:outline-none
            ${
              touchedFields.username && errors.username
                ? "bg-red-50 border border-red-500"
                : ""
            }
            `}
          />
          {errors.username && (
            <div className="text-xs mt-2 mr-2 text-red-600">
              {errors.username?.message}
              <p>- نام باید با حروف و اعداد انگلیسی باشد!</p>
              <p>
                 - شما می توانید در نام کاربری خود فقط از علامت های  (. ـ - + @)
            استفاده کنید!
              </p>
            </div>
          )}
        </div>

        <div className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="email" className="font-normal text-TS">
            ایمیل
          </label>
          <br />
          <input
            type="email"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
            className={`border border-gray-400 pr-3 rounded-md w-full h-[40px] focus:outline-none
            ${
              errors.email && touchedFields.email
                ? "bg-red-50 border border-red-500"
                : ""
            }
            `}
          />
          <div className="text-xs mt-2 mr-2 text-red-600">
            {errors.email?.message}
          </div>
        </div>

        <div className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="password" className="font-normal text-TS ">
            رمز عبور
          </label>
          <br />
          <input
            type="password"
            {...register("password")}
            className={`border border-solid border-1 pr-3 border-gray-400 rounded-md w-full h-[40px] focus:outline-none
            ${
              errors.password && touchedFields.password
                ? "bg-red-50 border border-red-500"
                : ""
            }
            `}
          />
          <div className="text-xs mt-2 mr-2 text-red-600">
            {errors.password?.message}
          </div>
        </div>

        <div
          dir="rtl"
          className="flex flex-col items-center text-right mx-[24px] mt-[20px] "
        >
          <div className="ml-auto flex">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className="hover:text-blue w-[20px] h-[20px]"
            />
            <label htmlFor="acceptTerms" className="text-TS mr-[8px] ">
              قوانین و مقررات را می‌پذیرم.
            </label>
          </div>
          {errors.acceptTerms && (
            <div className="text-xs ml-auto text-red-600">
              {errors.acceptTerms?.message}
            </div>
          )}
        </div>

        <div className="mx-[24px] mt-[32px] mb-[24px] p-[10px]  bg-[#208D8E] rounded-md text-[#FFFFFF] hover-bg-teal-700 text-center">
          <button type="submit" onClick={handleSubmit(onSubmit)}>ثبت‌نام</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
