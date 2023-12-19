import React, { useState } from 'react'
import style from '../styles/NavigationBar.module.css'
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp  } from "react-icons/fa6";
import { ImCross } from "react-icons/im";


function NavigationBar({showNavBar: string, setShowNavBar: string}) {


  
  const [isExpant, setIsExpand]= useState<boolean>(false);
  
  const[showSubLinks, setShowSubLinks] = useState<string>('Dashboard');

  function handleAllExpand(){
    setIsExpand(!isExpant);
  }

  function handleOnClick(linkName: string){
    if(showSubLinks === linkName){
      setShowSubLinks(null);
    }else{
      setShowSubLinks(linkName);
    }
  }



  function handleHideMenuBar(){
    setShowNavBar(false);
  }

  return (
    <div id={style.wrapper} >
      
      <div id={style.scrollBar}>

        <div id={style.hideMenu} onClick={handleHideMenuBar}>
          <ImCross/>
        </div>

        <div id={style.navLinks} className={style.navLinkClass} >


          <div className={style.linkCat} onClick={()=>{handleOnClick('Dashboard')}}>
            <h4 style={showSubLinks === 'Dashboard'? {fontWeight:700}:{}}>Dashboard</h4>
            <span style={showSubLinks === 'Dashboard'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Dashboard'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Dashboard'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/'> Dashboard </NavLink>
              </div>
            ): null
          }
        </div>

        <div id={style.navLinks} className={style.navLinkClass} >
          <div className={style.linkCat} onClick={()=>{handleOnClick('User')}}>
            <h4 style={showSubLinks === 'User'? {fontWeight:700}:{}}>User</h4>
            <span style={showSubLinks === 'User'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'User'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          {
            isExpant || showSubLinks === 'User'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/User/AllUsers'>All Users</NavLink>
              </div>
            ):null
          }

        </div>  

        <div id={style.navLinks} className={style.navLinkClass} >
          <div className={style.linkCat} onClick={()=>{handleOnClick('Mandates')}}>
            <h4 style={showSubLinks === 'Mandates'? {fontWeight:700}:{}}>Mandates</h4>
            <span style={showSubLinks === 'Mandates'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Mandates'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          {
            isExpant || showSubLinks === 'Mandates'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/Mandates/NACHMandate'>NACH Mandate</NavLink>
                <NavLink id={style.link} to='/Mandates/UnAssignedMandates'>Un-assigned Mandates</NavLink>
              </div>
            ):null
          }
          
        </div>  

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Physical Mandates')}}>
            <h4 style={showSubLinks === 'Physical Mandates'? {fontWeight:700}:{}}>Physical Mandates</h4>
            <span style={showSubLinks === 'Physical Mandates'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Physical Mandates'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Physical Mandates'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/PhysicalMandates/InProcessPhysicalMandates'> In-process Physical Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/PendingForBatchCreation'> Pending For Batch Creation</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/UnapprovedMandates'> Unapproved Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/ApprovedMandates'> Approved Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/PhysicalBatches'> Physical Batches</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/SentToBank'> Sent to Bank</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/UMRNReceivedPhysical'> UMRN Received-Physical</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/RegisteredPhysicalMandates'> Registered Physical Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/RejectedPhysicalMandates'> Rejected Physical Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/ChangeRequestedMandates'> Change Requested Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/HardRejectedMandates'> Hard Rejected Mandates</NavLink>
                <NavLink id={style.link} to='/PhysicalMandates/ReInitiatedMandateReport'> ReInitiated Mandate Report</NavLink>
            </div>
            ):null
          }
          
        </div>  

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('E-Mandates')}}>
            <h4 style={showSubLinks === 'E-Mandates'? {fontWeight:700}:{}}>E-Mandates</h4>
            <span style={showSubLinks === 'E-Mandates'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'E-Mandates'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'E-Mandates'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/EMandates/InProcessEMandates'> In-process E-Mandates</NavLink>
                <NavLink id={style.link} to='/EMandates/RegisteredEMandates'> Registered E-Mandates</NavLink>
                <NavLink id={style.link} to='/EMandates/RejectedEMandates'> Rejected E-Mandates</NavLink>
              </div>
            ):null
          }
          
        </div>    

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Aadhaar Mandates')}}>
            <h4 style={showSubLinks === 'Aadhaar Mandates'? {fontWeight:700}:{}}>Aadhaar Mandates</h4>
            <span style={showSubLinks === 'Aadhaar Mandates'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Aadhaar Mandates'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Aadhaar Mandates'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/AadhaarMandates/InProcessAadhaarMandates'> In-Process Aadhaar Mandates</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/AadhaarBatchCreation'> Aadhaar Batch Creation</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/ESignedMandates'> E-Signed Mandates</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/AadhaarBatches'> Aadhaar Batches</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/SentToBankAadhaar'> Sent to Bank-Aadhaar</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/UMRNReceivedAadhaar'> UMRN Received Aadhaar</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/RegisteredAadhaarMandates'> Registered Aadhaar Mandates</NavLink>
                <NavLink id={style.link} to='/AadhaarMandates/RejectedAadhaarMandates'> Rejected Aadhaar Mandates</NavLink>
              </div>
            ):null
          }

        </div>   

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Mandate Analysis')}}>
            <h4 style={showSubLinks === 'Mandate Analysis'? {fontWeight:700}:{}}>Mandate Analysis</h4>
            <span style={showSubLinks === 'Mandate Analysis'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Mandate Analysis'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Mandate Analysis'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/MandateAnalysis/PhysicalMandateAnalysis'> Physical Mandate Analysis</NavLink>
                <NavLink id={style.link} to='/MandateAnalysis/EMandateAnalysis'> E-Mandate Analysis</NavLink>
                <NavLink id={style.link} to='/MandateAnalysis/AadhaarMandateAnalysis'> Aadhaar Mandate Analysis</NavLink>
              </div>
            ):null
          }

        </div>  

        <div id={style.navLinks} className={style.navLinkClass} >
        
          <div className={style.linkCat} onClick={()=>{handleOnClick('All UMRN')}}>
            <h4 style={showSubLinks === 'All UMRN'? {fontWeight:700}:{}}>All UMRN</h4>
            <span style={showSubLinks === 'All UMRN'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'All UMRN'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'All UMRN'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/AllUMRN/RegisteredUMRN'> Registered UMRN</NavLink>
                <NavLink id={style.link} to='/AllUMRN/RejectedUMRN'> Rejected UMRN</NavLink>
                <NavLink id={style.link} to='/AllUMRN/OnHoldUMRN'> On-Hold UMRN</NavLink>
                <NavLink id={style.link} to='/AllUMRN/ExpiredUMRN'> Expired UMRN</NavLink>
                <NavLink id={style.link} to='/AllUMRN/UMRNHistory'> UMRN History</NavLink>
                <NavLink id={style.link} to='/AllUMRN/NPCICancelledUMRN'> NPCI Cancelled UMRN</NavLink>
              </div>
            ):null
          }

        </div> 

        <div id={style.navLinks} className={style.navLinkClass} >
        
          <div className={style.linkCat} onClick={()=>{handleOnClick('Bulk Mandates')}}>
            <h4 style={showSubLinks === 'Bulk Mandates'? {fontWeight:700}:{}}>Bulk Mandates</h4>
            <span style={showSubLinks === 'Bulk Mandates'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Bulk Mandates'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Bulk Mandates'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/BulkMandates/BulkPhysicalMandates'> Bulk Physical Mandates</NavLink>
                <NavLink id={style.link} to='/BulkMandates/BulkEMandates'> Bulk E-Mandates</NavLink>
                <NavLink id={style.link} to='/BulkMandates/BulkAadharMandates'> Bulk-Aadhar Mandates</NavLink>
                <NavLink id={style.link} to='/BulkMandates/LegacyUMRNUpload'> Legacy UMRN Upload</NavLink>
                <NavLink id={style.link} to='/BulkMandates/BulkPhysicalMandate'> Bulk Physical Mandate</NavLink>
              </div>
            ):null
          }

        </div>   

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Debit Presentations')}}>
            <h4 style={showSubLinks === 'Debit Presentations'? {fontWeight:700}:{}}>Debit Presentations</h4>
            <span style={showSubLinks === 'Debit Presentations'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Debit Presentations'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Debit Presentations'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/DebitPresentations/AllDebitPresentations'> All Debit Presentations</NavLink>
                <NavLink id={style.link} to='/DebitPresentations/UnapprovedPresentations'> Unapproved Presentations</NavLink>
                <NavLink id={style.link} to='/DebitPresentations/ApprovedPresentations'> Approved Presentations</NavLink>
                <NavLink id={style.link} to='/DebitPresentations/CreatedPresentmentBatches'> Created Presentment Batches</NavLink>
              </div>
            ):null
          }

        </div> 

        <div id={style.navLinks} className={style.navLinkClass} > 
        <div className={style.linkCat} onClick={()=>{handleOnClick('Scheduled Presentations')}}>
            <h4 style={showSubLinks === 'Scheduled Presentations'? {fontWeight:700}:{}}>Scheduled Presentations</h4>
            <span style={showSubLinks === 'Scheduled Presentations'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Scheduled Presentations'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>

          {
            isExpant || showSubLinks === 'Scheduled Presentations'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/ScheduledPresentations/ScheduledForBatchPresentations'> Scheduled For Batch Presentations</NavLink>
                <NavLink id={style.link} to='/ScheduledPresentations/UnderProcessPresentations'> Under Process Presentations</NavLink>
                <NavLink id={style.link} to='/ScheduledPresentations/CancelledByUserPresentations'> Cancelled By User Presentations</NavLink>
                <NavLink id={style.link} to='/ScheduledPresentations/PartialStatusReceivedPresentations'> Partial Status Received Presentations</NavLink>
                <NavLink id={style.link} to='/ScheduledPresentations/CompletedPresentations'> Completed Presentations</NavLink>
              </div>
            ):null
          }

        </div>        

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Data Entry Operations')}}>
            <h4 style={showSubLinks === 'Data Entry Operations'? {fontWeight:700}:{}}>Data Entry Operations</h4>
            <span style={showSubLinks === 'Data Entry Operations'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Data Entry Operations'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Data Entry Operations'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/DataEntryOperations/NACHDataEntry'> NACH Data Entry</NavLink>
                <NavLink id={style.link} to='/DataEntryOperations/InitialRejectedImages'> Initial Rejected Images</NavLink>
              </div>
            ):null
          }

        </div>          

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Report')}}>
            <h4 style={showSubLinks === 'Report'? {fontWeight:700}:{}}>Report</h4>
            <span style={showSubLinks === 'Report'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Report'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Report'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/Report/ConsolidatedReport'> Consolidated Report</NavLink>
                <NavLink id={style.link} to='/Report/BillingReport'> Billing Report</NavLink>
              </div>
            ):null
          }

        </div>        

        <div id={style.navLinks} className={style.navLinkClass}>
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Training Material')}}>
            <h4 style={showSubLinks === 'Training Material'? {fontWeight:700}:{}}>Training Material</h4>
            <span style={showSubLinks === 'Training Material'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Training Material'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'Training Material'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/TrainingMaterial/ProcessManual'> Process Manual</NavLink>
                <NavLink id={style.link} to='/TrainingMaterial/DemoVideos'> Demo Videos</NavLink>
              </div>
            ):null
          }

        </div>        

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('Others')}}>
            <h4 style={showSubLinks === 'Others'? {fontWeight:700}:{}}>Others</h4>
            <span style={showSubLinks === 'Others'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Others'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
         
          {
            isExpant || showSubLinks === 'Others'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/Others/IFSCUpdate'> IFSC Update</NavLink>
              </div>
            ):null
          }

        </div>        

        <div id={style.navLinks} className={style.navLinkClass} >
        <div className={style.linkCat} onClick={()=>{handleOnClick('Pending UMRN & Response')}}>
            <h4 style={showSubLinks === 'Pending UMRN & Response'? {fontWeight:700}:{}}>Pending UMRN & Response</h4>
            <span style={showSubLinks === 'Pending UMRN & Response'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'Pending UMRN & Response'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>

          {
            isExpant || showSubLinks === 'Pending UMRN & Response'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/PendingUMRNAndResponse/PendingUMRNAndResponse'>Pending UMRN & Response</NavLink>
              </div>
            ):null
          }
        </div>        

        <div id={style.navLinks} className={style.navLinkClass} >
        <div className={style.linkCat} onClick={()=>{handleOnClick('UPI Mandate')}}>
            <h4 style={showSubLinks === 'UPI Mandate'? {fontWeight:700}:{}}>UPI Mandate</h4>
            <span style={showSubLinks === 'UPI Mandate'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'UPI Mandate'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>

          {
            isExpant || showSubLinks === 'UPI Mandate'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/UPIMandate/UPIVerification'>UPI Verification</NavLink>
                <NavLink id={style.link} to='/UPIMandate/UPIMandate'>UPI Mandate</NavLink>
                <NavLink id={style.link} to='/UPIMandate/UPIRegisteredMandate'>UPI Registered Mandate</NavLink>
                <NavLink id={style.link} to='/UPIMandate/UPIRejectedMandate'>UPI Rejected Mandate</NavLink>
                <NavLink id={style.link} to='/UPIMandate/UPIMandateAnalysis'>UPI Mandate Analysis</NavLink>
              </div>
            ):null
          }

        </div>        

        <div id={style.navLinks} className={style.navLinkClass} >
          
          <div className={style.linkCat} onClick={()=>{handleOnClick('UPI Presentation')}}>
            <h4 style={showSubLinks === 'UPI Presentation'? {fontWeight:700}:{}}>UPI Presentation</h4>
            <span style={showSubLinks === 'UPI Presentation'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'UPI Presentation'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>
          
          {
            isExpant || showSubLinks === 'UPI Presentation'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/UPIPresentation/UPIPresentation'>UPI Presentation</NavLink>
                <NavLink id={style.link} to='/UPIPresentation/UPIUnapprovedPresentation'>UPI Unapproved Presentation</NavLink>
                <NavLink id={style.link} to='/UPIPresentation/UPIPendingForExecution'>UPI Pending for execution</NavLink>
              </div>
            ):null
          }

        </div>        

        <div id={style.navLinks} className={style.navLinkClass} >
        <div className={style.linkCat} onClick={()=>{handleOnClick('UPI Bulk')}}>
            <h4 style={showSubLinks === 'UPI Bulk'? {fontWeight:700}:{}}>UPI Bulk</h4>
            <span style={showSubLinks === 'UPI Bulk'? {color: 'rgb(190, 190, 190)'}:{}}>
              {
                isExpant || showSubLinks === 'UPI Bulk'?
                (<FaAngleUp/>):(<FaAngleDown />)
              }
            </span>
          </div>

          {
            isExpant || showSubLinks === 'UPI Bulk'?
            (
              <div id={style.subLinks} className={style.subLinkClass}>
                <NavLink id={style.link} to='/UPIBulk/UPIBulkMandateCreation'>UPI Bulk Mandate Creation</NavLink>
                <NavLink id={style.link} to='/UPIBulk/BulkUPIVerification'>Bulk UPI Verification</NavLink>
              </div>
            ):null
          }

        </div>   


        <div id={style.blankSpace}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>     

      </div>  

      <div id={style.expandBtn}>
        <button onClick={handleAllExpand}>
          {
            isExpant? '- COLLAPSE ALL':'+ EXPAND ALL'
          }
        </button>
      </div>
        
    </div>
  )
}

export default NavigationBar