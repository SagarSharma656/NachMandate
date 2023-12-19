import { useState } from "react"
import { ImCross } from "react-icons/im";
import style from '../styles/AddNewUser.module.css'

function AddNewUser(props: any) {
    const setNewUser = props.setNewUser;
    const dataArr = props.dataArr;
    const setData = props.setData;

    const [formData, setFormData] = useState(
        {
            userName: '',
            phoneNumber:'',
            emailID:'',
            primaryProduct:'',
            primaryBranch:'',
            vendorUser:'',
            check_MICR_IFSC:false,
            checkRef1:false,
            branchAdmin:false,
            operationAdmin:false,
            bulkDataUploadOperations:false,
            dataEntryOperationsChecker:false,
            dataEntryOperationsMaker:false,
            user:false,
            dataEntryBranchAdmin:false,
            mobileAppOperations:false,
            NACH_CancellationsAtNPCI_Checker:false,
            NACH_CancellationsAtNPCI_Maker:false,
            debitPresentationChecker:false,
            debitPresentationMaker:false,
            collectionDateAndTimeChange:false,
            batchCreation:false,
            consolidateReport:false,
            IFSC_Update:false,
            billingReport:false,
            pending_UMRN_AndResponse:false,
            UPI_Mandate:false,
            UPI_PresentationMaker:false,
            UPI_PresentationChecker:false,
            bulk_UPI_Mandate:false
        }
    )


    function handleChange(event: any){
        const {name, value, type, checked} = event.target;
        setFormData((prev)=>(
            {
                ...prev,
                [name]: type === 'checkbox'? checked : value
            }
        ))
    }

    function handleSubmit(event: any){

        event.preventDefault();

        setData([...dataArr, formData]);

        setFormData(
            {
                userName:'',
                phoneNumber:'',
                emailID:'',
                primaryProduct:'',
                primaryBranch:'',
                vendorUser:'',
                check_MICR_IFSC:false,
                checkRef1:false,
                branchAdmin:false,
                operationAdmin:false,
                bulkDataUploadOperations:false,
                dataEntryOperationsChecker:false,
                dataEntryOperationsMaker:false,
                user:false,
                dataEntryBranchAdmin:false,
                mobileAppOperations:false,
                NACH_CancellationsAtNPCI_Checker:false,
                NACH_CancellationsAtNPCI_Maker:false,
                debitPresentationChecker:false,
                debitPresentationMaker:false,
                collectionDateAndTimeChange:false,
                batchCreation:false,
                consolidateReport:false,
                IFSC_Update:false,
                billingReport:false,
                pending_UMRN_AndResponse:false,
                UPI_Mandate:false,
                UPI_PresentationMaker:false,
                UPI_PresentationChecker:false,
                bulk_UPI_Mandate:false
            }
        )
    }




  return (
    <div id={style.wrapper}>
        <form id={style.mainForm} onSubmit={handleSubmit}>
            <div id={style.formHeader}>
                <h2>User</h2>
                <ImCross id={style.hideFormBtn} onClick={()=>{setNewUser(false)}}/>
            </div>

            <label>
                <p>User Name:</p>

                <input 
                    required
                    type="text" 
                    name='userName'
                    id='userName'
                    value={formData.userName}
                    onChange={handleChange}
                />
            </label>

            <label>
                <p>Phone Number:</p>

                <input 
                    required
                    type="number" 
                    name='phoneNumber'
                    id='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </label>

            <label>
                <p>Email ID:</p>

                <input 
                    required
                    type="email" 
                    name='emailID'
                    id='emailID'
                    value={formData.emailID}
                    onChange={handleChange}
                />
            </label>

            <label>
                <p>Primary Product:</p>

                <select 
                    name="primaryProduct" 
                    id="primaryProduct" 
                    value={formData.primaryProduct}
                    onChange={handleChange}
                    >
                    <option value="#">Select</option>
                    <option value="HOMELOAN [PC01]">HOMELOAN [PC01]</option>
                    <option value="LOAN AGAINST PROPERTY [PC02]">LOAN AGAINST PROPERTY [PC02]</option>
                    <option value="PERSONAL LOAN [PC03]">PERSONAL LOAN [PC03]</option>
                    <option value="SPLN [SPLN]">SPLN [SPLN]</option>
                </select>
            </label>

            <label>
                <p>Primary Branch:</p>

                <select 
                    name="primaryBranch"   
                    id="primaryBranch" 
                    value={formData.primaryBranch}
                    onChange={handleChange}
                    >
                    <option value="#">Select</option>
                    <option value="JAIPUR [BC01]">JAIPUR [BC01]</option>
                    <option value="DELHI [BC02]">DELHI [BC02]</option>
                    <option value="SURAT [BC03]">SURAT [BC03]</option>
                    <option value="PATIALA [BC04]">PATIALA [BC04]</option>
                    <option value="NAGPUR [BC05]">NAGPUR [BC05]</option>
                </select>
            </label>

            <label>
                <p>Vendor User:</p>

                <select 
                    name="vendorUser"   
                    id="vendorUser" 
                    value={formData.vendorUser}
                    onChange={handleChange}
                    >
                    <option value="#">Select</option>
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                </select>
            </label>

            <div id={style.checkBoxContainer1}>
                <label>
                    <p>Check MIRC/IFSC:</p>

                    <input 
                        type="checkbox" 
                        name="check_MICR_IFSC" 
                        id="check_MICR_IFSC" 
                        checked={formData.check_MICR_IFSC}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Check Ref1:</p>

                    <input 
                        type="checkbox" 
                        name="checkRef1" 
                        id="checkRef1" 
                        checked={formData.checkRef1}
                        onChange={handleChange}
                        />
                </label>
            </div>

            <div id={style.checkBoxContainer2}>   
            
                <label>
                    <p>Branch Admin</p>
                    <input 
                        type="checkbox" 
                        name="branchAdmin" 
                        id="branchAdmin" 
                        checked={formData.branchAdmin}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Operation Admin</p>
                    <input 
                        type="checkbox" 
                        name="operationAdmin" 
                        id="operationAdmin" 
                        checked={formData.operationAdmin}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Bulk Data Upload Operations</p>
                    <input 
                        type="checkbox" 
                        name="bulkDataUploadOperations" 
                        id="bulkDataUploadOperations" 
                        checked={formData.bulkDataUploadOperations}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Data Entry Operations-Checker</p>
                    <input 
                        type="checkbox" 
                        name="dataEntryOperationsChecker" 
                        id="dataEntryOperationsChecker" 
                        checked={formData.dataEntryOperationsChecker}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Data Entry Operations-Maker</p>
                    <input 
                        type="checkbox" 
                        name="dataEntryOperationsMaker" 
                        id="dataEntryOperationsMaker" 
                        checked={formData.dataEntryOperationsMaker}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>User</p>
                    <input 
                        type="checkbox" 
                        name="user" 
                        id="user" 
                        checked={formData.user}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Data Entry Branch Admin</p>
                    <input 
                        type="checkbox" 
                        name="dataEntryBranchAdmin" 
                        id="dataEntryBranchAdmin" 
                        checked={formData.dataEntryBranchAdmin}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Mobile App Operations</p>
                    <input 
                        type="checkbox" 
                        name="mobileAppOperations" 
                        id="mobileAppOperations" 
                        checked={formData.mobileAppOperations}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>NACH Cancellations at NPCI-Checker</p>
                    <input 
                        type="checkbox" 
                        name="NACH_CancellationsAtNPCI_Checker" 
                        id="NACH_CancellationsAtNPCI_Checker" 
                        checked={formData.NACH_CancellationsAtNPCI_Checker}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>NACH Cancellations at NPCI-Maker</p>
                    <input 
                        type="checkbox" 
                        name="NACH_CancellationsAtNPCI_Maker" 
                        id="NACH_CancellationsAtNPCI_Maker" 
                        checked={formData.NACH_CancellationsAtNPCI_Maker}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Debit Presentation-Checker</p>
                    <input 
                        type="checkbox" 
                        name="debitPresentationChecker" 
                        id="debitPresentationChecker" 
                        checked={formData.debitPresentationChecker}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Debit Presentation-Maker</p>
                    <input 
                        type="checkbox" 
                        name="debitPresentationMaker" 
                        id="debitPresentationMaker" 
                        checked={formData.debitPresentationMaker}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Collection Date & Time Change</p>
                    <input 
                        type="checkbox" 
                        name="collectionDateAndTimeChange" 
                        id="collectionDateAndTimeChange" 
                        checked={formData.collectionDateAndTimeChange}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Batch Creation</p>
                    <input 
                        type="checkbox" 
                        name="batchCreation" 
                        id="batchCreation" 
                        checked={formData.batchCreation}    
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Consolidate Report</p>
                    <input 
                        type="checkbox"
                        name="consolidateReport"
                        id="consolidateReport"
                        checked={formData.consolidateReport}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>IFSC Update</p>
                    <input 
                        type="checkbox"
                        name="IFSC_Update"
                        id="IFSC_Update"
                        checked={formData.IFSC_Update}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Billing Report</p>
                    <input 
                        type="checkbox"
                        name="billingReport"
                        id="billingReport"
                        checked={formData.billingReport}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Pending UMRN & Response</p>
                    <input 
                        type="checkbox"
                        name="pending_UMRN_AndResponse"
                        id="pending_UMRN_AndResponse"
                        checked={formData.pending_UMRN_AndResponse}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>UPI Mandate</p>
                    <input 
                        type="checkbox"
                        name="UPI_Mandate"
                        id="UPI_Mandate"
                        checked={formData.UPI_Mandate}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>UPI Presentation-Maker</p>
                    <input 
                        type="checkbox"
                        name="UPI_PresentationMaker"
                        id="UPI_PresentationMaker"
                        checked={formData.UPI_PresentationMaker}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>UPI Presentation-Checker</p>
                    <input 
                        type="checkbox"
                        name="UPI_PresentationChecker"
                        id="UPI_PresentationChecker"
                        checked={formData.UPI_PresentationChecker}
                        onChange={handleChange}
                        />
                </label>

                <label>
                    <p>Bulk UPI Mandate</p>
                    <input 
                        type="checkbox"
                        name="bulk_UPI_Mandate"
                        id="bulk_UPI_Mandate"
                        checked={formData.bulk_UPI_Mandate}
                        onChange={handleChange}
                        />
                </label>

            </div>

            <button>Save</button>

        </form>
    </div>
  )
}

export default AddNewUser