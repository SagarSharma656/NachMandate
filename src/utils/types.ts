export interface AppState {
  collapseExpanded: boolean;
}

export type appStateAction = |{
  type: 'setCollapseExpanded';
    value: boolean; 
}

export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<appStateAction>;
};

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
  id: number;
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
  id: number;
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
export interface UtilityCode{
  id: string;
  name: string;
}
export interface Instrument{
  id: string;
  name: string
}
export interface Frequency{
  id: string;
  name: string;
}
export interface DebitType{
  id: string;
  name: string;
}
export interface AccountType{
  id: string;
  name: string;
}
export interface Mandate{
  id: string;
  name: string;
}
export interface Bank {
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


export interface UnAssignedMandatesData {
  id: number;
  srno: number;
  mandateStatus: string;
  mandateId: number;
  reference1: number;
  customerName: string;
  customerAccountNo: number;
}
export interface UnAssignedMandatesHeadCell {
  disablePadding: boolean;
  id: keyof UnAssignedMandatesData;
  label: string;
  numeric: boolean;
}

export interface InProcessPhysicalMandateData {
  id: number;
  srno: number;
  mandateStatus: string;
  mandateId: number;
  reference1: number;
  customerName: string;
  customerAccountNo: number;
  amount: number;
  amountInWord: string;
}
export interface InProcessPhysicalMandateHeadCell {
  disablePadding: boolean;
  id: keyof InProcessPhysicalMandateData;
  label: string;
  numeric: boolean;
}

export interface PendingForBatchCreationData {
  id: number;
  srno: number;
  mandateStatus: string;
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
  debitType: string;
  frequency: string;
  createdOn: string;
  createdBy: string;
  product: string;
  branch: string;
  categoryCode: string;
  utilityCode: string;
}
export interface PendingForBatchCreationHeadCell {
  disablePadding: boolean;
  id: keyof PendingForBatchCreationData;
  label: string;
  numeric: boolean;
}

export interface UnapprovedMandatesData {
  id: number;
  srno: number;
  mandateStatus: string;
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
  debitType: string;
  frequency: string;
  createdOn: string;
  createdBy: string;
  product: string;
  branch: string;
  categoryCode: string;
  utilityCode: string;
}
export interface UnapprovedMandatesHeadCell {
  disablePadding: boolean;
  id: keyof UnapprovedMandatesData;
  label: string;
  numeric: boolean;
}

export interface ApprovedMandatesData {
  id: number;
  srno: number;
  mandateStatus: string;
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
  debitType: string;
  frequency: string;
  createdOn: string;
  createdBy: string;
  product: string;
  branch: string;
  categoryCode: string;
  utilityCode: string;
}
export interface ApprovedMandatesHeadCell {
  disablePadding: boolean;
  id: keyof ApprovedMandatesData;
  label: string;
  numeric: boolean;
}

export interface PhysicalBatchsData {
  id: number;
  srno: number;
  fileNo: number;
  totalNoOfRecordsInFile: number;
  createdOn: string;
  createdBy: string;
  download: string;
  action: string;
}
export interface PhysicalBatchsHeadCell {
  disablePadding: boolean;
  id: keyof PhysicalBatchsData;
  label: string;
  numeric: boolean;
}

export interface SentToBankData {
  id: number;
  srno: number;
  mandateStatus: string;
  mandateId: number;
  fileNo: number;
  referecne1: number;
  customerName: string;
  customerAccountNo: number;
  amount: number;
  amountInWords: string;
  IFSC_MICR: string;
  customerBank: string;
  sponsorBank: string;
  dateOnMandate: string;
  formDate: string;
  debitTo: string;
  debitType: string;
  frequency: string;
  createdOn: string;
  createdBy: string;
  product: string;
  branch: string;
  categoryCode: string;
  fileId: string;
  initiatedToBankDateAndTime: string;
  utilityCode: string;
}
export interface SentToBankHeadCell {
  disablePadding: boolean;
  id: keyof SentToBankData;
  label: string;
  numeric: boolean;
}
