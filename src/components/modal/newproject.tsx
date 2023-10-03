// ========== import needed packages ==========
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  TextField,
  Grid,
  Box,
  Slide,
  Button,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const NewProject = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    content: "",
  });

  const closeModal = () => {
    setOpen(false);
    setFormData({ content: "" });
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Button
        style={{
          width: "274px",
          height: "36px",
          borderRadius: "8px",
          color: "#208D8E",
          fontFamily: "Yekan",
          border: "2px  #208D8E solid",
        }}
        onClick={() => setOpen(true)}
      >
        ساختن پروژه جدید
      </Button>

      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
          <DialogContent>
            {currentPage === 1 && (
              <Slide in={currentPage === 1} direction="left">
              <Stack className="w-[500px] h-[180px]" alignItems={"center"}>
                <button onClick={closeModal} style={{ marginLeft: "auto" }}>
                  <CloseIcon></CloseIcon>
                </button>
                <Typography
                  style={{
                    fontFamily: "Yekan",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "800",
                  }}
                >
                  ساختن پروژه جدید
                </Typography>
                <div className="mt-[40px]">
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
                  <TextField
                    style={{ margin: "8px 24px", width: "415px" }}
                    variant="outlined"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                  />
                </div>
              </Stack>
              </Slide>
            )}
            {currentPage === 2 && (
               <Slide in={currentPage === 2} direction="right">
              <Stack className="w-[500px] h-[210px]">
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
                        نام پروژه
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
                        {formData.content}
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
                        اعضا
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Avatar
                        sx={{ width: "36px", height: "36px" }}
                        style={{
                          marginRight: "auto",
                          marginLeft: "8px",
                          marginBottom: "8px",
                        }}
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
            marginTop: "30px",
            marginBottom: "24px",
          }}
        >
          {currentPage === 1 && (
            <Button
              onClick={handleNextPage}
              variant="contained"
              color="primary"
              style={{
                width: "415px",
                height: "40px",
                fontFamily: "Yekan",
                backgroundColor: "#208D8E",
              }}
            >
              ادامه
            </Button>
          )}
          {currentPage === 2 && (
            <Button
              onClick={closeModal}
              variant="contained"
              color="primary"
              style={{
                fontFamily: "Yekan",
                backgroundColor: "#208D8E",
                width: "415px",
              }}
            >
              ساختن پروژه
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewProject;
