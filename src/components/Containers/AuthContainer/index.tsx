type IAuthContainer = {
  heading: string;
  children: React.ReactNode;
};

export const AuthContainer = ({ heading, children }: IAuthContainer) => {
  return (
    <div className="flex flex-col items-center w-[640px] rounded-m drop-shadow-2xl bg-white rounded-3xl p-m">
      <h1 className=" font-extrabold text-[32px] my-m">{heading}</h1>
      <div className="w-full h-fit">{children}</div>
    </div>
  );
};
