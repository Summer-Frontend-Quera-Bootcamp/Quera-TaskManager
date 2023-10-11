// ========== import needed packages ==========
import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  TextField,
  Paper,
  Grid,
  Slide,
  Box,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import BlockIcon from "@mui/icons-material/Block";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { Button } from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik } from "formik";
import { FormControl, FormHelperText } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import * as yup from "yup";
interface Icreateworkspace extends React.PropsWithRef<any> {
  onSubmit: (e: FormProps) => FormProps | any;
}
const validationSchema = yup.object({
  title: yup.string().required(".لطفا نام ورک‌اسپیس را وارد کنید"),
});
type FormProps = {
  title: string;
  color: string;
};

export const CreateWorkspace: React.FC<Icreateworkspace> = ({
  onSubmit
}) => {
  const [hasValidationErrors, setHasValidationErrors] = useState(false);
  const formik = useFormik<FormProps>({
    initialValues: {
      title: "",
      color: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length === 0) {
        closeModal();
      } else {
        setHasValidationErrors(true);
      }
    },
  });

  const handleSubmit = () => {
    formik.submitForm();
    onSubmit({ title: formik.values.title, color: formik.values.color });
  };
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const colors = [
    "#4C6EF5",
    "#228BE6",
    "#15AABF",
    "#12B886",
    "#208D8E",
    "#40C057",
    "#82C91E",
    "#FAB005",
    "#FD7E14",
    "#FA5252",
    "#E64980",
    "#BE4BDB",
    "#7950F2",
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    formik.values.color = color
  };

  const [selectedColor, setSelectedColor] = useState("");

  const colorOptions = colors.map((color) => (
    <div
      key={color}
      style={{
        width: selectedColor === color ? "28px" : "20px",
        height: selectedColor === color ? "28px" : "20px",
        borderRadius: "40%",
        marginRight: "10px",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => handleColorChange(color)}
    >
      {selectedColor === color && (
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        ></div>
      )}
    </div>
  ));

  const closeModal = () => {
    setOpen(false);
    formik.values.title = "";
    formik.values.color = "";
    setCurrentPage(1);
    setSelectedColor("");
  };

  const handleNextPage = () => {
    if (!formik.values.title) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getFirstLetter = (word: string) => {
    if (word && word.length > 0) {
      return word[0];
    }
    return "";
  };

  const getLastWordFirstLetter = (text: string) => {
    if (!text || text.length === 0) return "";
    const words = text.split(/\s+/);
    const lastWord = words[words.length - 1];
    return lastWord.charAt(0);
  };

  return (
    <>
      <Button
        style={{
          color: "black",
          backgroundColor: "#D3D3D3",
          width: "274px",
          height: "24px",
          fontFamily: "Yekan",
          fontSize: "12px",
          fontWeight: "bolder",
          marginTop: "13px",
        }}
        endIcon={<AddBoxOutlinedIcon />}
        onClick={() => setOpen(true)}
      >
        ساختن اسپیس جدید
      </Button>

      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={(e) => formik.handleSubmit(e)}>
          <DialogContent>
            {currentPage === 1 && (
              <Slide in={currentPage === 1} direction="left">
                <Stack className="w-[500px] h-[220px]" alignItems={"center"}>
                  <button onClick={closeModal} style={{ marginLeft: "auto" }}>
                    <CloseIcon></CloseIcon>
                  </button>
                  <Typography
                    style={{
                      fontFamily: "Yekan",
                      fontSize: "24px",
                      fontWeight: "800",
                      marginBottom: "40px",
                      textAlign: "center",
                    }}
                  >
                    ساختن ورک‌اسپیس جدید
                  </Typography>
                  <div>
                    <Typography
                      style={{
                        textAlign: "right",
                        fontFamily: "Yekan",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        marginRight: "24px",
                      }}
                    >
                      نام ورک‌اسپیس
                    </Typography>
                    <FormControl
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
                      style={{ margin: "8px 24px", width: "415px" }}
                    >
                      <TextField
                        variant="outlined"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        name="title"
                        id="title"
                        error={
                          formik.touched.title && Boolean(formik.errors.title)
                        }
                      />
                      {formik.touched.title && Boolean(formik.errors.title) && (
                        <FormHelperText
                          style={{
                            fontFamily: "Yekan",
                            textAlign: "right",
                            fontSize: "small",
                            paddingTop: "10px",
                          }}
                        >
                          {formik.errors.title}{" "}
                          <ErrorOutlineIcon
                            style={{ fontSize: "medium", color: "red" }}
                          />
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                </Stack>
              </Slide>
            )}
            {currentPage === 2 && (
              <Slide in={currentPage === 2} direction="right">
                <Stack className="w-[501px] h-[190px]">
                  <div style={{ display: "flex" }}>
                    <button
                      onClick={handlePrevPage}
                      style={{ marginRight: "auto" }}
                    >
                      <ArrowBackIcon></ArrowBackIcon>
                    </button>
                    <button onClick={closeModal} style={{ marginLeft: "auto" }}>
                      <CloseIcon></CloseIcon>
                    </button>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Yekan",
                      fontSize: "24px",
                      fontWeight: "800",
                      marginBottom: "40px",
                      textAlign: "center",
                    }}
                  >
                    ساختن ورک‌اسپیس جدید
                  </Typography>
                  <Grid container justifyContent="flex-end">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        marginRight: "15px",
                        gap: 16,
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Yekan", fontWeight: "lighter" }}
                      >
                        رنگ ورک‌اسپیس
                      </Typography>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <BlockIcon style={{ fontSize: "large" }} />
                        {colorOptions}
                      </div>
                    </div>
                    <Paper
                      className="w-[70px] h-[70px] flex justify-center items-center "
                      style={{
                        backgroundColor: selectedColor
                          ? selectedColor
                          : "#7D828C",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Yekan",
                          color: "white",
                          fontWeight: "800",
                          fontSize: "24px",
                        }}
                      >
                        {getFirstLetter(formik.values.title)}{" "}
                        {getLastWordFirstLetter(formik.values.title)}
                      </Typography>
                    </Paper>
                  </Grid>
                </Stack>
              </Slide>
            )}
            {currentPage === 3 && (
              <Slide in={currentPage === 3} direction="up">
                <Stack className="w-[501px] h-[272px]">
                  <div style={{ display: "flex" }}>
                    <button
                      onClick={handlePrevPage}
                      style={{ marginRight: "auto" }}
                    >
                      <ArrowBackIcon></ArrowBackIcon>
                    </button>
                    <button onClick={closeModal} style={{ marginLeft: "auto" }}>
                      <CloseIcon></CloseIcon>
                    </button>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Yekan",
                      fontSize: "24px",
                      fontWeight: "800",
                      fontStyle: "normal",
                      textAlign: "center",
                      marginBottom: "40px",
                    }}
                  >
                    مرور اطلاعات
                  </Typography>
                  <Box
                    style={{
                      border: "0.50px #AAAAAA solid",
                      borderRadius: "8px",
                      direction: "rtl",
                      marginLeft: "24px",
                    }}
                    className="w-[453px] h-[169px]"
                  >
                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        <Typography
                          style={{
                            fontFamily: "Yekan",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "800",
                            textAlign: "right",
                            marginRight: "12px",
                            marginTop: "16px",
                          }}
                        >
                          نام ورک‌اسپیس
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{ textAlign: "left", marginTop: "16px" }}
                      >
                        <div
                          style={{
                            marginLeft: "12px",
                            fontFamily: "Yekan",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "800",
                          }}
                        >
                          {formik.values.title}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          style={{
                            fontFamily: "Yekan",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "800",
                            textAlign: "right",
                            marginRight: "12px",
                          }}
                        >
                          رنگ ورک‌اسپیس
                        </Typography>
                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "left" }}>
                        <SquareRoundedIcon
                          style={{
                            color: selectedColor,
                            fontSize: "24px",
                            marginLeft: "8px",
                          }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Typography
                          style={{
                            fontFamily: "Yekan",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "800",
                            textAlign: "right",
                            marginRight: "12px",
                          }}
                        >
                          اعضا
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Avatar
                          sx={{ width: "36px", height: "36px" }}
                          style={{ marginRight: "auto", marginLeft: "8px" }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </Slide>
            )}
          </DialogContent>
          <DialogActions
            style={{
              justifyContent: "center",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          >
            {currentPage === 1 && (
              <Button
                onClick={handleNextPage}
                variant="contained"
                style={{
                  fontFamily: "Yekan",
                  backgroundColor: "#208D8E",
                  width: "415px",
                }}
                disabled={hasValidationErrors}
                type="submit"
              >
                ادامه
              </Button>
            )}
            {currentPage === 2 && (
              <Button
                onClick={handleNextPage}
                variant="contained"
                color="primary"
                style={{
                  fontFamily: "Yekan",
                  backgroundColor: "#208D8E",
                  width: "415px",
                }}
              >
                ادامه
              </Button>
            )}
            {currentPage === 3 && (
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                type="submit"
                style={{
                  fontFamily: "Yekan",
                  backgroundColor: "#208D8E",
                  width: "415px",
                }}
              >
                ساختن ورک‌اسپیس
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
