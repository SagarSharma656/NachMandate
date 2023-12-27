

export interface Year {
    id: string;
    name: string;
  }
export interface Month{
    id: string;
    name: string;
  }
export interface PrimaryProduct{
  id: string;
  name: string;
}
export interface PrimaryBranch{
  id:string;
  name: string;
}
export interface VendorUser{
  id:string;
  name:string;
}

  
 export type Order = 'asc' | 'desc';


 export interface MandateData {
  srno : number;
  mandateStatus: string;
  UMRN: number;
  mandateId: number;
  reference1: number;
  customerName: string;
  customerAccountNo: number;
  amount: number;
  amountInWord: string;
  IFSC_MICR: string;
  customerBank: string;
  sponsorBank: string;
  dateOnMandate: string;
  formDate: string;
  debitTo: string;
  frequency: string;
  mandateType: string;
  rejectResion: string;
  createOn: string;
  createBy: string;
  lastActivityOn: string;
  product: string;
  branch: string;
  categoryCode: string;
  utilityCode: string;
}


export interface MandateHeadCell {
  disablePadding: boolean;
  id: keyof MandateData;
  label: string;
  numeric: boolean;
}

export interface UserData {
  srno: number;
  userType: string;
  userName: string;
  emailId: string;
  phoneNo: number;
  productName: string;
  branchName: string;
  lastLogin: string;
  createdBy: string;
  createdOn: string;
  updatedBy: string;
  updatedOn: string;
  vendorUser: string;
  accountBlocked: string;
  status: string;
  mobileApp: string;
}

export interface UserHeadCell {
  disablePadding: boolean;
  id: keyof UserData;
  label: string;
  numeric: boolean;
}

// NACH Mandate types

export interface Language {
  id: string;
  name: string;
}
export interface AutoCollectionDate {
  id: string;
  name: string;
}
export interface Product{
  id: string;
  name: string;
}
export interface CategoryCode{
  id: string;
  name: string;
};
export interface Branch{
  id: string;
  name: string;
}
export interface SponserBankCode{
  id: string;
  name: string;
}
export interface UnityCode{
  id: string;
  name: string;
}


export interface MandateFormDataObject {
  language: string;
  autoCollectionAmount: string;
  autoCollectionDate: string;
  product: string;
  categoryCode: string;
  branch: string;
  UMRN: string;
  dateOnMandate: string;
  sponserBankCode: string;
  unityCode: string;
  create: boolean;
  modify: boolean;
  cancel: boolean;
  I_WehearbyAuthorize: string;
  toDebit: string;
  bankAC_Number: string;
  withBank: string;
  IFSC: string;
  MICR: string;
  anAmountOrRupees: string;
  frequency: string;
  debitType: string;
  reference1: string;
  reference2: string;
  reference3: string;
  phoneNumber: string;
  emailID: string;
  periodFrom: string;
  periodTo: string;
  untilCancelled: string;
  signPrimaryAccHolder: string;
  signSecondaryAccHolder: string;
  signTertiaryAccHolder: string;
};