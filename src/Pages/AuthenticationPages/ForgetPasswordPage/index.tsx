import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export type FieldValues = Record<string, unknown>;
import { ButtonPrimary } from "../../../Components/UseFullButtons";
import { AuthContainer } from "../../../Components/Containers";
import { InputText } from "../../../Components/UseFullInputs";
import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch,useAppSelector } from "../../../Features/Hooks/Hooks";
import {
  forgot as forgotApi,
  reset,
} from "../../../Features/auth/authSlice/authSlice";
const schema = z.object({
  email: z.string().email({ message: "این ایمیل معتبر نیست" }),
});

type IFormValues = z.infer<typeof schema>;

const ForgetPass = () => {
  const [formVisiblity, setFormVisiblity] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading, isError, message } = useAppSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error(message as string);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.dismiss();
      toast.success(`لطفا ایمیل خود را بررسی کنید 😀`, {
        rtl: true,
      });
      Navigate("/linksend");
      dispatch(reset());
    }
  }, [isSuccess, isError, message, isLoading, Navigate, dispatch]);
  const onSubmit = (data: FieldValues) => {
    dispatch(
      forgotApi({
        email: data.email,
      })
    );
  };
  return (
    <>
      {formVisiblity && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthContainer heading=" فراموشی رمز عبور ">
            <InputText
              register={register}
              name="email"
              label="ایمیل خود را وارد کنید"
              type="text"
            />
            {errors.email && (
              <p className="text-red-primary text-right">
                {errors.email.message}
              </p>
            )}
            <div className="mt-m mb-m">
              <ButtonPrimary onClick={() => {}} bigger={true} type="submit"  disabled={isLoading}>
                دریافت ایمیل بازیابی رمز عبور
              </ButtonPrimary>
            </div>
          </AuthContainer>
        </form>
      )}

     
    </>
  );
};

export default ForgetPass;
