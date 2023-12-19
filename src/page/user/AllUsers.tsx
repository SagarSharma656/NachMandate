
import style from '../../styles/All_Users.module.css'
import { FaSearch, FaRegFileExcel } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AddNewUser from '../../components/AddNewUser';
import { useState } from 'react';




function AllUsers() {

 
 const [dataArr, setDataArr] = useState<object[]>([]);



  const [newUser, setNewUser] = useState<boolean>(false);


  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [showData, setShowData] = useState<object[]>([]);

  function setData(data: any){
    setDataArr(data);
    setShowData(data);
  }


  type dataObj = {
    userType:string;
    userName:string;
    emailID: any;
    phoneNumber: number;
    primaryProduct: string;
    primaryBranch: string;
    lastLogin: Date;
    createdBy: Date;
    createdOn: Date;
    updatedBy: Date;
    updatedOn: Date;
    vendorUser: string;
    accountBlocked:any;
    status: any;
    mobileAppOperations: any;
  }

  type SearchFormDataObject = {
    searchUserName: string,
    searchEmailID: string,
    searchProductName: string,
    searchBranchName: string
  }

  const [searchFormData, setSearchFormData] = useState<SearchFormDataObject>({searchUserName: '', searchEmailID:'', searchProductName:'', searchBranchName:''})



  
  function handleChangeInSearchForm(event: any){
    setSearchFormData((prev)=>{
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }


  function handleSearchContainer(){
    setSearchActive(!searchActive);
  }


  function handleSearchForm(event: any){

    event.preventDefault();
    let AfterSearch :object[] = [];
    
    dataArr.forEach((data)=>{

      if(searchFormData.searchUserName === data.userName){
        if(searchFormData.searchEmailID === data.emailID){
          if(searchFormData.searchProductName === data.primaryProduct){
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }
          
          }else if(searchFormData.searchProductName === ''){  
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }

          }
        }else if(searchFormData.searchEmailID === ''){

          if(searchFormData.searchProductName === data.primaryProduct){
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }
          
          }else if(searchFormData.searchProductName === ''){  
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }

          }

        }
      }else if(searchFormData.searchUserName === ''){

        if(searchFormData.searchEmailID === data.emailID){
          if(searchFormData.searchProductName === data.primaryProduct){
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }
          
          }else if(searchFormData.searchProductName === ''){  
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }

          }
        }else if(searchFormData.searchEmailID === ''){

          if(searchFormData.searchProductName === data.primaryProduct){
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              AfterSearch.push(data);
            }
          
          }else if(searchFormData.searchProductName === ''){  
            
            if(searchFormData.searchBranchName === data.primaryBranch){
              AfterSearch.push(data);
            }else if(searchFormData.searchBranchName === ''){
              return;
            }

          }
        }
      }

    })
    setShowData(AfterSearch);
  }

  function handleReset(){
    setShowData(dataArr);

    setSearchFormData({
            searchUserName:'', 
            searchEmailID:'', 
            searchProductName:'', 
            searchBranchName:''
          })
  }

  function handleRows(data:object){

  }





  return (

      
        <div id={style.wrapper} >

          <div id={style.headerConatiner} style={searchActive? {height:'20%'}:{}}>

            <div id={style.header}>
              <h2>User Creation</h2>
            
              <div id={style.buttons}>

                <button id={style.searchBtn} onClick={handleSearchContainer}>
                  <span id={style.BtnIcon}><FaSearch /></span>
                  <span>Search</span>
                </button>

                <button id={style.exportBtn}>
                  <span id={style.BtnIcon} ><FaRegFileExcel/></span>
                  <span>Export</span>
                </button>

                <button id={style.addNewBtn} onClick={()=>{setNewUser(true)}}>
                  <span id={style.BtnIcon}><IoMdAdd/></span>
                  <span>New</span>
                </button>
              </div>
            </div>


            {
              searchActive? 

                <div id={style.seachFormContainer}>

                  <form onSubmit={handleSearchForm}>
                    <div id={style.searchUseNameConatiner}>
                      <label htmlFor="searchUserName">User Name:</label>
                      <input type="text" name='searchUserName' id='searchUserName' value={searchFormData.searchUserName} onChange={handleChangeInSearchForm}/>
                    </div>

                    <div id={style.emailIDConatiner}>
                      <label htmlFor="searchEmailID">Email ID:</label>
                      <input type="text" name='searchEmailID' id='searchEmailID' value={searchFormData.searchEmailID} onChange={handleChangeInSearchForm}/>
                    </div>

                    <div id={style.productNameConatiner}>
                      <label htmlFor="searchProductName">Product Name:</label>
                      <input type="text" name='searchProductName' id='searchProductName' value={searchFormData.searchProductName} onChange={handleChangeInSearchForm}/>
                    </div>

                    <div id={style.branchNameConatiner}>
                      <label htmlFor="searchBranchName">Branch Name:</label>
                      <input type="text" name='searchBranchName' id='searchBranchName' value={searchFormData.searchBranchName} onChange={handleChangeInSearchForm}/>
                    </div>

                    <button>Search</button>
                    <p onClick={handleReset}>RESET</p>

                  </form>
                </div>

              :null
            }

          </div>


          <div id={style.userDataContainer} style={searchActive? {height:'76%'}:{}}>


            <table id={style.userDataTable}>
              <thead id={style.userDataHeader}>
                <th>Sr. No.</th>
                <th>User Type</th>
                <th>User Name</th>
                <th>Email ID</th>
                <th>Phone No.</th>
                <th>Product Name</th>
                <th>Branch Name</th>
                <th>Last Login</th>
                <th>Created By</th>
                <th>Created On</th>
                <th>Updated By</th>
                <th>Updated On</th>
                <th>Vendor User</th>
                <th>Account Blocked</th>
                <th>Status</th>
                <th>Mobile App</th>
              </thead>
              <tbody id={style.userDataBody}>
              {
                showData.map((data, index) => {
                  let srNo = index +1;
                    return(
                      <tr id={style.UserData} onClick={()=>{handleRows(data)}}>
                        <td>{srNo}</td>
                        <td>{data.userType}</td>
                        <td>{data.userName}</td>
                        <td>{data.emailID}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.primaryProduct}</td>
                        <td>{data.primaryBranch}</td>
                        <td>{data.lastLogin}</td>
                        <td>{data.createdBy}</td>
                        <td>{data.createdOn}</td>
                        <td>{data.updatedBy}</td>
                        <td>{data.updatedOn}</td>
                        <td>{data.vendorUser}</td>
                        <td>{data.accountBlocked}</td>
                        <td>{data.status}</td>
                        <td>{data.mobileAppOperations}</td>
                      </tr> 
                    )
                })
        
              }

              </tbody>

            </table>


          </div>
          
          <div id={style.showDataNumber}>
              <p>Showing {showData.length} out of {dataArr.length}</p>
          </div>
              

          <div id={style.AddNewUserForm} style={newUser? {zIndex: '10'} : {zIndex: '-10'}}>
            <AddNewUser setNewUser={setNewUser} dataArr={dataArr} setData={setData}/>
          </div>

        </div>
      

  )
}

export default AllUsers