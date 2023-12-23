import { useState } from "react";
import style from "../../styles/Login.module.css";
import "../../index.css";
import { Container, Grid, Stack, TextField } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';

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
    <Container>
      <Grid>
        <Stack direction='column' justifyContent='space-between'>
            <Grid>
                <Grid>
                    <img src="" alt="logo" />
                </Grid>

                <Grid>
                    <Stack direction="row" >
                        <Grid sx={{width: '35%'}}>
                            <Grid>
                                <h2>Login</h2>

                                <form onSubmit={fromSubmitHandler}>
                                    <TextField
                                    fullWidth
                                    id="standard-basic"
                                    label="Email Id"
                                    variant="standard"
                                    size="small"
                                    type="email"
                                    onChange={formChangeHandler}
                                    />

                                
                                    <Grid >
                                        <p className={style.smallText}>
                                            Login with Password or OTP
                                        </p>
                                        <div id={style.loginTypeBtn}>
                                            <p
                                            id={style.passType}
                                            className={`${
                                                loginType === "password" ? "activeBtn" : ""
                                            }`}
                                            onClick={handleLoginTypePassword}
                                            >
                                            Password
                                            </p>
                                            <p
                                            id={style.otpType}
                                            className={`${
                                                loginType === "otp" ? "activeBtn" : ""
                                            }`}
                                            onClick={handleLoginTypeOtp}
                                            >
                                            OTP
                                            </p>
                                        </div>

                                        <Grid id={style.passOtpContainer}>
                                            {loginType === "password" ? (
                                            <div
                                                className={style.inputField}
                                                id={style.passInput}
                                            >
                                            <TextField
                                                    fullWidth
                                                    id="standard-basic"
                                                    label="Password"
                                                    variant="standard"
                                                    size="small"
                                                    type="password"
                                                    onChange={formChangeHandler}
                                                />
                                            </div>
                                            ) : loginType === "otp" ? (
                                            <div id={style.sendOtpBtn} onClick={handleSendOtp}>
                                                Send OTP
                                            </div>
                                            ) : null}
                                            {sendOtp && loginType === "otp" ? (
                                            <div className={style.inputField}>
                                                <TextField
                                                    fullWidth
                                                    id="standard-basic"
                                                    label="OTP"
                                                    variant="standard"
                                                    size="small"
                                                    type="number"
                                                    onChange={formChangeHandler}
                                                />
                                            </div>
                                            ) : null}
                                        </Grid>
                                    </Grid>
                                    <div id={style.captchaContainer}>
                                    <p className={style.smallText}>
                                        Enter Captcha as shown in the below box
                                    </p>
                                    <div className={style.inputField}>
                                    <TextField
                                            fullWidth
                                            id="standard-basic"
                                            label="Captcha"
                                            variant="standard"
                                            size="small"
                                            type="text"
                                            onChange={formChangeHandler}
                                        />
                                    </div>

                                    <span id={style.forgotPass}>Forgot password?</span>

                                    <span id={style.captchaBox}>{captchaCode}</span>
                                    <span id={style.reloadCaptcha} onClick={handleCapptcha} >
                                        <CachedIcon/>
                                    </span>
                                    </div>
                                    <button id={style.loginBtn}>Login</button>
                                </form>
                            </Grid>
                        </Grid>

                        <Grid>
                            <img src="../../assets/heroImg.png" alt="hero image" />
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
            <Grid id={style.footer}>
            <div id={style.impNotesContainer}>
                <div id={style.impNotes}>
                <ul id={style.list}>
                    <li>
                    Do not provide your username and password anywhere other than
                    in this page
                    </li>
                    <li>
                    Your username and password are highly confidential. Never part
                    with them.
                    </li>
                </ul>
                </div>
                <div id={style.impNotesContainerImg}>
                <img src="./secured.png" alt="#" />
                </div>
            </div>
            <div id={style.space}></div>
            <div id={style.copyrightContainer}>
                <p>Copyright © 2016-2020 | zipNACH | All Rights Reserved</p>
            </div>
            </Grid>
        </Stack>
      </Grid>
    </Container>
  );
}

export default Login;
