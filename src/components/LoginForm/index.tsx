import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../service/auth";

type LoginFormUser = {
  username: string;
  password: string;
};

const ValidationSchema = yup.object().shape({
  username: yup
      .string()
      .required("وارد کردن نام الزامی می‌باشد!")
      .min(4, "حداقل طول نام ۴ کارکتر می‌باشد!")
      .max(150, "حداکثر طول نام ۲۰ کارکتر می‌باشد!")
      .matches(
        /^(?!.*[.+_@-]{2})[a-zA-Z0-9.+_@-]+[a-zA-Z0-9]$/i,
        " فرمت نام نامعتبر است!"
      ),

    password: yup
    .string()
    .required("وارد کردن رمز عبور الزامی می‌باشد!")
    .min(6, "حداقل طول رمز عبور ۶ کارکتر می‌باشد!")
    .max(40, "حداکثر طول رمز عبور ۴۰ کارکتر می‌باشد!")
});

const Index: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors,touchedFields },
  } = useForm<LoginFormUser>({
    resolver: yupResolver(ValidationSchema),
    mode:"onChange"
  });

  const onSubmit = (data: LoginFormUser) => {
    // // console.log(JSON.stringify(data, null, 2));
    loginUser(data).then((res) => {
      if (res.status === 200) {
        const date = res.data;
       localStorage.setItem("token",date.token);
       localStorage.setItem("user",JSON.stringify(data))
        console.log(date);
      }
    });
  };

  return (
    <div className="flex flex-col items-center my-auto mt-[149px]" dir="rtl">
      <form
        className="flex flex-col bg-white rounded-lg shadow-md z-[1]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="sm:text-HL text-HS text-center pt-[24px] mx-[65.5px]">
          به کوئرا تسک منیجر خوش برگشتی :)
        </h1>

        <div className="text-right mx-[24px]">
          <label htmlFor="email" className="font-normal text-TS">
            نام کاربری
          </label>
          <br />
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="username"
                autoComplete="off"
                {...field}
                className={`border pr-3 border-gray-400 rounded-md w-full h-[40px] focus:outline-none ${
                  touchedFields.username && errors.username
                  ? "bg-red-50 border border-red-500"
                  : ""
                }`}
              />
            )}
          />
            <div className="text-xs mt-2 mr-2 text-red-600">
              {errors.username?.message}
            </div>
        </div>

        <div className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="password" className="font-normal text-TS">
            رمز عبور
          </label>
          <br />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="password"
                autoComplete="off"
                {...field}
                className={`border pr-3 border-gray-400 rounded-md w-full h-[40px] focus:outline-none ${
                  touchedFields.password && errors.password
                  ? "bg-red-50 border border-red-500"
                  : ""
                }`}
              />
            )}
          />
            <div className="text-xs mt-2 mr-2 text-red-600">
              {errors.password?.message}
            </div>
        </div>

        <Link
          to="/forgot"
          className="text-right mx-[24px] mt-[8px] text-[#208D8E] font-extra-bold text-TXS"
        >
          رمز عبور را فراموش کرده‌ای؟
        </Link>

        <button
        
          type="submit"
          className="mx-[24px] mt-[32px] mb-[24px] p-[10px] bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700 text-center"
        >
          ورود
        </button>

        <div className="flex flex-row-reverse m-auto text-TM my-[24px]">
          <button
            className="text-[#208D8E] font-extra-bold mr-[7px]"
            // to="/SignUp"
            onClick={handleSubmit(onSubmit)}
          >
            ثبت‌نام
          </button>
          <p className="font-medium">ثبت‌نام نکرده‌ای؟</p>
        </div>
      </form>
    </div>
  );
};

export default Index;







