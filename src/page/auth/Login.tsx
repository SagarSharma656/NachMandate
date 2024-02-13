import { useState } from "react";
import style from '../../styles/Login.module.css'
import "../../index.css";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import { StyledTextField , StyledTypography} from "../../components/StyledComponents";

function Login(props: any) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
    captcha: "",
  });

  const [loginType, setLoginType] = useState("password");
  const [sendOtp, setSendOtp] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqsrtuvwxyz";
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha);

  function generateCaptcha() {
    let captchaString = "";
    for (let i = 0; i <= 5; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      captchaString += characters[randomIndex];
    }
    return captchaString;
  }

  function handleCapptcha() {
    setCaptchaCode(generateCaptcha);
  }

  function handleLoginTypePassword() {
    setLoginType("password");
    setSendOtp(false);
  }

  function handleLoginTypeOtp() {
    setLoginType("otp");
  }

  function handleSendOtp() {
    setSendOtp(true);
  }

  function formChangeHandler(event: any) {
    setFormData((prev) => {
      const { name, value } = event.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function fromSubmitHandler(event: any) {
    event.preventDefault();

    props.setIsLogin(true);

    if (captchaCode === formData.captcha) {
    } else {
    }
  }

  return (
    <Box>
      <Grid>
        <Stack >
          <Grid className="main-container">
            <Grid className="header-container"
              sx={{
                height: "40px",
                backgroundColor: "rgb(58, 196, 125)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src="src/assets/logo.png" alt="logo" />
            </Grid>
            <Grid className="main-container">
              <Stack direction="row" justifyContent="space-between">
                <Grid className="main-form"
                  sx={{ width: "35%", mx: 1}}>
                    <h2>Login</h2>

                    <form onSubmit={fromSubmitHandler}>
                      <StyledTypography variant="body2">
                        Email Id
                      </StyledTypography>
                      <StyledTextField
                        fullWidth
                        id="standard-basic"
                        variant="outlined"
                        size="small"
                        type="email"
                        placeholder="Enter Email Id"
                        onChange={formChangeHandler}
                        sx={{ my: 0.4 }}
                      />

                      <Grid>
                        <Typography variant="body2" fontSize={11} mt={1}>
                          Login with Password or OTP
                        </Typography>
                        <Grid display={"flex"} my={1} gap={1}>
                          <StyledTypography
                            variant="body2"
                            width={"100%"}
                            textAlign={"center"}
                            sx={{
                              background: "#EEEEEE",
                              borderRadius: 2,
                              py: 0.2,
                              cursor: "pointer",
                            }}
                            className={`${
                              loginType === "password" ? "activeBtn" : ""
                            }`}
                            onClick={handleLoginTypePassword}
                          >
                            Password
                          </StyledTypography>
                          <StyledTypography
                            variant="body2"
                            width={"100%"}
                            textAlign={"center"}
                            sx={{
                              background: "#EEEEEE",
                              borderRadius: 2,
                              py: 0.2,
                              cursor: "pointer",
                            }}
                            className={`${
                              loginType === "otp" ? "activeBtn" : ""
                            }`}
                            onClick={handleLoginTypeOtp}
                          >
                            OTP
                          </StyledTypography>
                        </Grid>

                        <Grid>
                          {loginType === "password" ? (
                            <Grid>
                              <StyledTypography variant="body2">
                                Password
                              </StyledTypography>
                              <StyledTextField
                                fullWidth
                                id="standard-basic"
                                placeholder="Enter Password"
                                variant="outlined"
                                size="small"
                                type="password"
                                sx={{ my: 0.4 }}
                                onChange={formChangeHandler}
                              />
                              <Typography
                                variant="body2"
                                width={"100%"}
                                textAlign={"end"}
                                fontSize={10}
                                sx={{
                                  cursor: "pointer",
                                  color: "#3f6ad8",
                                  textDecoration: "underline",
                                }}
                              >
                                Forgot password?
                              </Typography>
                            </Grid>
                          ) : loginType === "otp" ? (
                            <StyledTypography
                              variant="body2"
                              sx={{
                                width: "100%",
                                backgroundColor: "rgb(58, 196, 125)",
                                color: "white",
                                borderRadius: 1,
                                textAlign: "center",
                                py: 0.5,
                              }}
                              onClick={handleSendOtp}
                            >
                              Send OTP
                            </StyledTypography>
                          ) : null}
                          {sendOtp && loginType === "otp" ? (
                            <Box>
                              <StyledTextField
                                fullWidth
                                id="standard-basic"
                                placeholder="Enter OTP"
                                variant="outlined"
                                size="small"
                                type="number"
                                sx={{ my: 0.5 }}
                                onChange={formChangeHandler}
                              />
                            </Box>
                          ) : null}
                        </Grid>
                      </Grid>
                      <Grid>
                        <Box>
                          <StyledTypography variant="body2">
                            Enter Captcha as shown in the below box
                          </StyledTypography>
                          <StyledTextField
                            fullWidth
                            id="standard-basic"
                            variant="outlined"
                            size="small"
                            type="text"
                            placeholder="Enter Captcha"
                            onChange={formChangeHandler}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            my: 0.8,
                          }}
                        >
                          <Typography
                            variant="caption"
                            fontFamily={'"Protest Riot", sans-serif !important'}
                            fontWeight={400}
                            fontSize={18}
                            color={"rgb(58, 196, 125)"}
                            sx={{
                              border: 0.00001,
                              borderColor: "black",
                              px: 2,
                              py: 0.5,
                            }}
                          >
                            {captchaCode}
                          </Typography>
                          <StyledTypography onClick={handleCapptcha}>
                            <CachedIcon />
                          </StyledTypography>
                        </Box>
                      </Grid>
                      <Button
                        type="submit"
                        sx={{
                          backgroundColor: "rgb(210, 238, 255)",
                          color: "rgb(63, 106, 216)",
                          textTransform: "none",
                          my: 0.5,
                          px: 3,
                          py: 0.5,
                        }}
                      >
                        Login
                      </Button>
                    </form>
                </Grid>

                <Grid sx={{ width: "60%" }}>
                  <img
                    src="src/assets/heroImg.png"
                    alt="hero image"
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <Grid className="footer-section"
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0, gap: 0 }}
          >
            <Grid sx={{ backgroundColor: "rgba(205, 205, 205,0.7)", m: 0 }}>
              <Typography fontSize={10}>
                <ul>
                  <li>
                    Do not provide your username and password anywhere other
                    than in this page
                  </li>
                  <li>
                    Your username and password are highly confidential. Never
                    part with them.
                  </li>
                </ul>
              </Typography>
              <Box
                sx={{
                  height: 10,
                  backgroundColor: "rgb(75, 80, 84)",
                  m: 0,
                  boxShadow: "0px 1px 2px rgb(75, 80, 84)",
                }}
              ></Box>
            </Grid>

            <Grid>
              <Typography
                fontSize={10}
                textAlign={"center"}
                borderTop={0.2}
                borderColor={"rgb(75, 80, 84)"}
              >
                Copyright © 2016-2020 | zipNACH | All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
}

export default Login;
