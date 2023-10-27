import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Rouls from "../../../Components/RoulsModal";
export type FieldValues = Record<string, unknown>;

import { ButtonPrimary } from "../../../Components/UseFullButtons";
import { AuthContainer } from "../../../Components/Containers";
import { InputText } from "../../../Components/UseFullInputs";
import { useAppDispatch, useAppSelector } from "../../../Features/Hooks/Hooks";
import {
  register as registerApi,
  reset,
} from "../../../Features/auth/authSlice/authSlice";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "نام کامل حدافل باید ۳ کاراکتر باشد" }),
  email: z.string().email({ message: "این ایمیل معتبر نیست" }),
  password: z
    .string()
    .min(8, "رمز عبور حداقل باید ۸ کاراکتر باشد")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[0-9])/,
      "رمز عبور باید شامل یک عدد و یک حرف بزرگ باشد"
    )
    .max(32, "رمز عبور نمیتواند بیشتر از ۳۲ کاراکتر باشد"),
  guideline: z.boolean().refine((value) => value === true, {
    message: "لطفا مقررات را مطالعه و قبول کنید",
  }),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });
  const [openRoulsModal, setOpenRoulsModal] = useState<boolean>(false);
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading, isError, message } = useAppSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error(`${message}`);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.dismiss();
      toast.success(`ثبت نام با موفقیت انجام شد ✅`, {
        autoClose: 1000,
        rtl: true,
      });
      Navigate("/login");
      dispatch(reset());
    }
  }, [isSuccess, isError, message, isLoading, Navigate, dispatch]);
  const onSubmit = ({ username, email, password }: FieldValues) => {
    dispatch(
      registerApi({
        username,
        email,
        password,
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthContainer heading=" ثبت‌نام در کوئرا تسک منیجر ">
          <div className="flex flex-col">
            <div>
              <InputText
                name="username"
                register={register}
                label="نام کامل"
                type="text"
              />
              {errors.username && (
                <p className="text-red-primary text-right">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mt-m">
              <InputText
                name="email"
                register={register}
                label="ایمیل"
                type="text"
              />
              {errors.email && (
                <p className="text-red-primary text-right">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="my-m">
              <InputText
                name="password"
                register={register}
                label="رمز عبور"
                type="password"
              />
              {errors.password && (
                <p className="text-red-primary text-right">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div dir="rtl" className="flex items-center">
              <input
                type="checkBox"
                id="guideline"
                className="w-m h-m cursor-pointer rounded"
                {...register("guideline")}
              />
              <label
                htmlFor="guideline"
                className="mx-xs font-bold cursor-pointer"
                onClick={() => setOpenRoulsModal(true)}
              >
                قوانین و مقررات را می‌پذیرم.
              </label>
            </div>
            {errors.guideline && (
              <p className="text-red-primary text-right">
                {errors.guideline.message}
              </p>
            )}
            <div className="mt-m">
              <ButtonPrimary
                onClick={() => {}}
                bigger={true}
                type="submit"
                disabled={isLoading}
              >
                ثبت‌نام
              </ButtonPrimary>
            </div>
          </div>
        </AuthContainer>
        {openRoulsModal && 
          <Rouls closeModal={setOpenRoulsModal}/>
        }
      </form>
    </>
  );
};

export default Register;
