

export interface Year {
    id: string;
    name: string;
  }

  
 export type Order = 'asc' | 'desc';


 export interface Data {
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


export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}