import React from 'react'
import DataTable from '../../components/DataTable'
import { UnAssignedMandatesData, UnAssignedMandatesHeadCell } from '../../utils/types';

function UnAssignedMandates() {
  
const headCells: UnAssignedMandatesHeadCell[] = [
  {
    id: "srno",
    numeric: true,
    disablePadding: false,
    label: "Sr. No."
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
];
function createData(
  id: number,
  srno: number,
  mandateStatus: string,
  mandateId: number,
  reference1: number,
  customerName: string,
  customerAccountNo: number
): UnAssignedMandatesData {
  return {
    id,
    srno,
    mandateStatus,
    mandateId,
    reference1,
    customerName,
    customerAccountNo,
  };
}
const rows = [
  createData(1, 1, "Mandate Status", 1, 123456789, "Customer Name", 123456789),
  createData(2, 2, "Mandate Status", 2, 123456789, "Customer Name", 123456789),
  createData(3, 3, "Mandate Status", 3, 123456789, "Customer Name", 123456789),
  createData(4, 4, "Mandate Status", 4, 123456789, "Customer Name", 123456789),
  createData(5, 5, "Mandate Status", 1, 123456789, "Customer Name", 123456789),
  createData(6, 6, "Mandate Status", 2, 123456789, "Customer Name", 123456789),
  createData(7, 7, "Mandate Status", 3, 123456789, "Customer Name", 123456789),
  createData(8, 8, "Mandate Status", 4, 123456789, "Customer Name", 123456789),
];
  return <DataTable title="UnAssigned Mandates" headCells={headCells} rows={rows}/>;
}

export default UnAssignedMandates