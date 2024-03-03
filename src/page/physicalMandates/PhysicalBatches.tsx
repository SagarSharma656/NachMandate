import DataTable from "../../components/DataTable";
import { PhysicalBatchsData, PhysicalBatchsHeadCell } from "../../utils/types";

function PhysicalBatches() {

  function createData(
    id: number,
    srno: number,
    fileNo: number,
    totalNoOfRecordsInFile: number,
    createdOn: string,
    createdBy: string,
    download: string,
    action: string
  ): PhysicalBatchsData {
    return {
      id,
      srno,
      fileNo,
      totalNoOfRecordsInFile,
      createdOn,
      createdBy,
      download,
      action,
    };
  }

  const rows = [
    createData(1, 1, 11, 21, "created on", "cretaed by", "download", "action"),
    createData(2, 2, 12, 22, "created on", "cretaed by", "download", "action"),
    createData(3, 3, 13, 23, "created on", "cretaed by", "download", "action"),
    createData(4, 4, 14, 24, "created on", "cretaed by", "download", "action"),
    createData(5, 5, 15, 25, "created on", "cretaed by", "download", "action"),
    createData(6, 6, 16, 26, "created on", "cretaed by", "download", "action"),
    createData(7, 7, 17, 27, "created on", "cretaed by", "download", "action"),
    createData(8, 8, 18, 28, "created on", "cretaed by", "download", "action"),
    createData(9, 9, 19, 29, "created on", "cretaed by", "download", "action"),
    createData(10, 10, 20, 30, "created on", "cretaed by", "download", "action"),
  ];

  const headCells: PhysicalBatchsHeadCell[] = [
    {
      id: "srno",
      numeric: true,
      disablePadding: false,
      label: "Sr No",
    },
    {
      id: "fileNo",
      numeric: true,
      disablePadding: false,
      label: "File No",
    },
    {
      id: "totalNoOfRecordsInFile",
      numeric: true,
      disablePadding: false,
      label: "Total No Of Records In File",
    },
    {
      id: "createdOn",
      numeric: true,
      disablePadding: false,
      label: "Created On",
    },
    {
      id: "createdBy",
      numeric: true,
      disablePadding: false,
      label: "Created By",
    },
    {
      id: "download",
      numeric: true,
      disablePadding: false,
      label: "Download",
    },
    {
      id: "action",
      numeric: true,
      disablePadding: false,
      label: "Action",
    },
  ];
  return <DataTable title="Physical Batches" headCells={headCells} rows={rows} />;
}

export default PhysicalBatches