import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Slide,
  Button,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import TaskFilter from "./taskFillter";

const Filter = () => {
  const [open, setOpen] = useState(true);
  const [list, setList] = React.useState([{ id: 1 }]);

  const closeModal = () => {
    setOpen(false);
  };

  const addList = () => {
    const newItem = { id: list.length + 1 };
    setList([...list, newItem]);
  };
  const removeList = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <Dialog open={open} onClose={closeModal}>
        <DialogContent>
          <Box className="w-[550px] max-h-[306px]">
            <div className="flex flex-row-reverse items-center justify-between">
              <Typography
                style={{
                  fontFamily: "Yekan",
                  fontSize: "24px",
                  fontWeight: "800",
                  textAlign: "right",
                }}
              >
                فیلترها
              </Typography>
              <CloseIcon
                style={{ cursor: "pointer", fontSize: "medium" }}
                onClick={closeModal}
              />
            </div>
            {list.map((item) => (
              <Slide in={true}>
                <div
                  className="flex flex-row-reverse items-center"
                  key={item.id}
                >
                  <TaskFilter key={item.id} />
                  <svg
                    className="cursor-pointer mr-auto"
                    onClick={() => removeList(item.id)}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.0081 17.5818H6.33402C5.49009 17.5818 4.78883 16.9305 4.72595 16.0882L4.00293 6.29712H15.315L14.6161 16.0841C14.5557 16.9281 13.8536 17.5818 13.0081 17.5818V17.5818Z"
                      stroke="#FA5252"
                      stroke-width="1.20907"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.67255 9.52124V14.3575"
                      stroke="#FA5252"
                      stroke-width="1.20907"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.22412 6.29707H16.1209"
                      stroke="#FA5252"
                      stroke-width="1.20907"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7028 6.29719L12.8863 4.11925C12.6501 3.48972 12.0488 3.073 11.3766 3.073H7.96859C7.29634 3.073 6.69503 3.48972 6.45886 4.11925L5.64233 6.29719"
                      stroke="#FA5252"
                      stroke-width="1.20907"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.4374 9.52124L12.0908 14.3575"
                      stroke="#FA5252"
                      stroke-width="1.20907"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.9077 9.52124L7.2543 14.3575"
                      stroke="#FA5252"
                      stroke-width="1.20907"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Slide>
            ))}
            <div className="mt-[24px] text-right">
              <Button
                style={{
                  color: "#208D8E",
                  fontFamily: "Yekan",
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "12px",
                  textAlign: "right",
                }}
                onClick={addList}
              >
                افزودن فیلتر جدید
              </Button>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Filter;
