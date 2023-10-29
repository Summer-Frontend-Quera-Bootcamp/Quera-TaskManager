import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

type IContainerModal = {
  heading?: string;
  width?: string;
  children: React.ReactNode;
  onBack?: () => void;
  onClose: () => void;
};

export const ContainerModal = ({
  heading = "",
  width = "w-[500px]",
  children,
  onBack,
  onClose,
}: IContainerModal) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const ref = useClickAway<HTMLDivElement>(handleClose);

  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className={`flex flex-col items-center ${width}  drop-shadow-2xl bg-white rounded-2xl p-m `}
        >
          <div className="w-full flex justify-between items-center mb-m">
            {onBack !== undefined ? (
              <IoArrowBackOutline
                size="22"
                className="text-gray-darker cursor-pointer duration-300 active:text-brand-primary hover:text-brand-primary"
                onClick={onBack}
              />
            ) : (
              <div className="w-[22px]" />
            )}
            <h3 className=" font-extrabold text-[24px]">{heading}</h3>
            <IoClose
              size="22"
              className="text-gray-darker cursor-pointer duration-300 active:text-red-primary hover:text-red-primary"
              onClick={handleClose}
            />
          </div>
          <div className="w-full h-fit">{children}</div>
        </div>
      )}
    </>
  );
};
