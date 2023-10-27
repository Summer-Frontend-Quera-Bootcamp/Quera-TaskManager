import { AuthContainer } from "../../../Components/Containers";
const LinkSendPage = () => {
  return (
    <AuthContainer heading=" فراموشی رمز عبور ">
      <p className="text-right" style={{ direction: "rtl" }}>
        لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
      </p>
    </AuthContainer>
  );
};


export default LinkSendPage
