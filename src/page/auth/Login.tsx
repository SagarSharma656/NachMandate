import  { useState } from 'react'
import style from '../../styles/Login.module.css'
import '../../index.css'
// import { TfiReload } from "react-icons/tfi";

function Login(props :any) {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        otp:'',
        captcha:''
    });

    const [loginType, setLoginType] = useState('password');
    const [sendOtp, setSendOtp] = useState(false);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqsrtuvwxyz';
    const [captchaCode, setCaptchaCode] = useState(generateCaptcha);

    function generateCaptcha(){
        let captchaString = '';
        for(let i=0; i<=5; i++){
            let randomIndex = Math.floor(Math.random() * characters.length);
            captchaString += characters[randomIndex];
        }
        return captchaString;
    }

    function handleCapptcha(){
        setCaptchaCode(generateCaptcha);
    }



    function handleLoginTypePassword(){
        setLoginType('password');
        setSendOtp(false);
    }
    
    function handleLoginTypeOtp(){
        setLoginType('otp');
    }

    function handleSendOtp(){
        setSendOtp(true);
    }


    function formChangeHandler(event:any){
        setFormData((prev)=>{
            const {name, value} = event.target;
            return(
                {
                    ...prev,
                    [name] : value 
                }
            )
        })
    }

    function fromSubmitHandler(event:any){
        event.preventDefault();
        
        props.setIsLogin(true);

        if(captchaCode === formData.captcha){
    
        }else{
           
        }
    }



  return (
    
    <div id={style.wrapper}>

        <div>
   
            <div id={style.headerContainer}>
                <img src="" alt="logo" />
            </div>

            <div id={style.loginContainer}>

                <div id={style.loginArea}>
                    <h2 id={style.loginHeading}>Login</h2>
                    
                    
                    <form id={style.loginForm} onSubmit={fromSubmitHandler}>
                        <div className={style.inputField} id={style.emailInput}>
                            <label htmlFor="email">Email ID</label>
                            <input type="email" name='email' id='email' onChange={formChangeHandler}/>
                        </div>
                        <div id={style.loginTypeContainer}>
                            <p className={style.smallText}>Login with Password or OTP</p>
                            <div id={style.loginTypeBtn}>
                                <p 
                                    id={style.passType} 
                                    className={`${loginType === 'password' ? 'activeBtn' : ''}`}
                                    onClick={handleLoginTypePassword}
                                    >Password</p>
                                <p 
                                    id={style.otpType}
                                    className={`${loginType === 'otp' ? 'activeBtn' : ''}`}
                                    onClick={handleLoginTypeOtp}
                                    >OTP</p>
                            </div>

                            <div id={style.passOtpContainer}>
                            {
                                loginType === 'password' ? 
                                    <div className={style.inputField} id={style.passInput}>
                                        <label htmlFor="password">Enter Password</label>
                                        <input type="password" name='password' id='password' onChange={formChangeHandler}/>
                                    </div>
                                : loginType === 'otp'?
                                    <div 
                                        id={style.sendOtpBtn}
                                        onClick={handleSendOtp}
                                    >Send OTP</div>


                                : null
                            }
                            {
                                sendOtp && loginType === 'otp' ?
                                    <div className={style.inputField}>
                                        <input type="number" name='otp' id='otp' placeholder='Enter OTP' onChange={formChangeHandler}/>
                                    </div>                                
                                    :null
                            }

                            </div>
                        </div>
                        <div id={style.captchaContainer}>
                            <p className={style.smallText}>Enter Captcha as shown in the below box</p>
                            <div className={style.inputField}>
                                <input type="text" name="captcha" id="captcha" placeholder='Input Captcha' onChange={formChangeHandler}/>
                            </div>
                                
                            <span id={style.forgotPass}>Forgot password?</span>

                            <span id={style.captchaBox}>{captchaCode}</span>
                            <span id={style.reloadCaptcha} onClick={handleCapptcha}>{ }</span>
                        </div>
                        <button id={style.loginBtn}>Login</button>

                    </form>
                </div>
                <div id={style.heroImg}>
                    <img src="./heroImg.png" alt="#" />
                </div>
            </div>    
        </div>
        <div id={style.footer}>
            <div id={style.impNotesContainer}>
                <div id={style.impNotes}>
                    <ul id={style.list}>
                        <li>Do not provide your username and password anywhere other than in this page</li>
                        <li>Your username and password are highly confidential. Never part with them.</li>
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
        </div>

    </div>
  )
}

export default Login