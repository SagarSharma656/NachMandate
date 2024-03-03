import React from 'react'
import { InProcessPhysicalMandateData, InProcessPhysicalMandateHeadCell } from '../../utils/types';
import DataTable from '../../components/DataTable';

function InProcessPhysicalMandates() {


  
const headCells: InProcessPhysicalMandateHeadCell[] = [
  {
    id: "srno",
    numeric: true,
    disablePadding: false,
    label: "Sr. No.",
  },
  {
    id: "mandateStatus",
    numeric: true,
    disablePadding: false,
    label: "Mandate Status",
  },
  {
    id: "mandateId",
    numeric: true,
    disablePadding: false,
    label: "Mandate ID",
  },
  {
    id: "reference1",
    numeric: true,
    disablePadding: false,
    label: "Reference 1",
  },
  {
    id: "customerName",
    numeric: true,
    disablePadding: false,
    label: "Customer Name",
  },
  {
    id: "customerAccountNo",
    numeric: true,
    disablePadding: false,
    label: "Customer Account No.",
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    id: "amountInWord",
    numeric: true,
    disablePadding: false,
    label: "Amount In Word",
  },
];

function createData(
  id: number,
  srno: number,
  mandateStatus: string,
  mandateId: number,
  reference1: number,
  customerName: string,
  customerAccountNo: number,
  amount: number,
  amountInWord: string,
): InProcessPhysicalMandateData {
  return {
    id,
    srno,
    mandateStatus,
    mandateId,
    reference1,
    customerName,
    customerAccountNo,
    amount,
    amountInWord,
  };
}

const rows = [
  createData(1,1,"Mandate Status", 11, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(2,2,"Mandate Status", 22, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(3,3,"Mandate Status", 33, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(4,4,"Mandate Status", 44, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(5,5,"Mandate Status", 55, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(6,6,"Mandate Status", 66, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(7,7,"Mandate Status", 77, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(8,8,"Mandate Status", 88, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData(9,9,"Mandate Status", 99, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
];

  return (
    <DataTable title="In Process Physical Mandate" headCells={headCells} rows={rows}/>
  );
}

export default InProcessPhysicalMandates