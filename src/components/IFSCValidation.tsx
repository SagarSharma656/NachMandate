import React from 'react'
import { RxCross2 } from "react-icons/rx";
import style from '../styles/IFSCValidation.module.css'

function IFSCValidation({setShow_IFSC_ValidationForm: boolean}) {


    

  return (


    <div id={style.wrapper}>
        <div id={style.formContainer}>
            <form id={style.validationForm}>
                
                <div id={style.headerContainer}>
                    <div id={style.heading}>
                        <h2>IFSC Validation</h2>
                    </div>
                    <RxCross2 id={style.cutForm} onClick={()=>{setShow_IFSC_ValidationForm(false)}}/>
                </div>

                <div id={style.IFSC_MICR_Container}>
                    <label>
                        <p>Enter IFSC:</p>
                        
                        <input 
                            type="text" 

                        />
                    </label>

                    <label>
                        <p>Or MICR:</p>

                        <input 
                            type="text" 

                        />
                    </label>
                </div>

                <div id={style.bankNameContainer}>
                    <label>
                        <p>Bank:</p>
                        
                        <input 
                            type="text" 
                        />
                    </label>


                </div>

                <div id={style.btnContainer}>
                    <button>Search</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default IFSCValidation