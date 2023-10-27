import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { InputInvite } from "../../../UseFullInputs";
import PermissionModal from "../PermissionModal";

type IShareModal = {
  onClose: (permissionId: number) => void;
  userPermission: number;
};
type ModalsStatus = {
  showModal: boolean;
  showPermissionModal: boolean;
};
const ShareProjectModal = ({ onClose, userPermission }: IShareModal) => {
  const [modalsStatus, setModalsStatus] = useState<ModalsStatus>({
    showModal: true,
    showPermissionModal: false,
  });
  const [selectedPermission, setSelectedPermission] =
    useState<number>(userPermission);

  const permissions = [
    "دسترسی کامل",
    "دسترسی ویرایش",
    "دسترسی کامنت",
    "دسترسی مشاهده",
  ];
  const handleClose = () => {
    onClose(selectedPermission);
    setModalsStatus((prevState) => ({ ...prevState, showModal: false }));
  };

  const handleChange = (id: number) => {
    setSelectedPermission(id);
  };
  return (
    <>
      {modalsStatus.showModal && (
        <div className="w-[470px] absoulte inset-0 mx-auto mt-[150px] bg-white rounded-3xl drop-shadow-2xl p-[20px]">
          <div className="flex flex-col gap-m">
            <div className="w-full flex flex-row-reverse justify-start items-center mb-s gap-[80px]">
              <IoClose
                size="22"
                className="text-gray-darker cursor-pointer duration-300 active:text-red-primary hover:text-red-primary"
                onClick={handleClose}
              />
              <h3 className="font-extrabold text-[24px]">
                به اشتراک گذاری پروژه
              </h3>
            </div>
            <InputInvite onClick={() => {}} />
            <div className="flex flex-row-reverse justify-between">
              <label className="flex flex-row gap-xs items-center">
                لینک خصوصی
                <FiLink />
              </label>
              <button className="px-[12px] pt-[2px] pb-[3px] border rounded-md">
                کپی لینک
              </button>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="text-gray-primary text-right">
                اشتراک گذاشته شده با
              </span>
              <div className="grid grid-rows-2 gap-xs">
                <div className="flex flex-row-reverse items-center gap-xs">
                  <div className="bg-[url('../src/assets/prof.jpg')] bg-cover bg-center w-[34px] h-[37px] rounded-full" />
                  <label>من</label>
                  <span className="bg-blue-secondary rounded-md text-blue-primary py-[4px] px-[8px]">
                    Workspace Owner
                  </span>
                  <button className="px-[12px] pt-[2px] pb-[3px] border rounded-md mr-auto">
                    دسترسی کامل
                  </button>
                </div>
                <div className="flex flex-row-reverse items-center gap-xs">
                  <div className="bg-orange-secondary w-[34px] h-[37px] rounded-full" />
                  <span className="px-[8px]">smail@mail.com</span>
                  <button
                    className="flex flex-row gap-xs items-center px-[12px] pt-[2px] pb-[3px] border rounded-md mr-auto"
                    onClick={() => {
                      setModalsStatus((prevState) => ({
                        ...prevState,
                        showPermissionModal: !prevState.showPermissionModal,
                      }));
                    }}
                  >
                    {modalsStatus.showPermissionModal ? (
                      <IoIosArrowBack />
                    ) : (
                      <IoIosArrowForward />
                    )}

                    {permissions[selectedPermission]}
                  </button>
                  {modalsStatus.showPermissionModal && (
                    <div className="fixed mr-[429px]">
                      <PermissionModal
                        onChange={(id) => {
                          handleChange(id);
                        }}
                        userPermission={userPermission}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareProjectModal;
