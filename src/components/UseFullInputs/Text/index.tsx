import { RegisterOptions, UseFormRegister } from "react-hook-form";

type Text =  {
  label: string;
  name: string;
  type?: "email" | "password" | "text";
  placeHolder?: string;
  value?: string;
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
  onChange?: () => void;
}

export const InputText = ({
  label,
  type = "text",
  placeHolder,
  name,
  value,
  options,
  onChange,
  register,
}: Text) => {
  return (
    <div className="flex flex-col text-right">
      <label className="text-right" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className="border border-gray-primary rounded-md p-xs my-xs w-full text-right"
        {...(register !== undefined && { ...register(name, options) })}
      />
    </div>
  );
};
