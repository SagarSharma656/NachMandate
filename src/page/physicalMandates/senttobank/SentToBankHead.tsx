import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import {
  Order,
  SentToBankData,
  SentToBankHeadCell,
} from "../../../utils/types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, InputBase, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";

function createData(
    mandateStatus: string,
    mandateId: number,
    fileNo: number,
    referecne1: number,
    customerName: string,
    customerAccountNo: number,
    amount: number,
    amountInWords: string,
    IFSC_MICR: string,
    customerBank: string,
    sponsorBank: string,
    dateOnMandate: string,
    formDate: string,
    debitTo: string,
    debitType: string,
    frequency: string,
    createdOn: string,
    createdBy: string,
    product: string,
    branch: string,
    categoryCode: string,
    fileId: string,
    initiatedToBankDateAndTime: string,
    utilityCode: string,
): SentToBankData {
  return {
    mandateStatus,
    mandateId,
    fileNo,
    referecne1,
    customerName,
    customerAccountNo,
    amount,
    amountInWords,
    IFSC_MICR,
    customerBank,
    sponsorBank,
    dateOnMandate,
    formDate,
    debitTo,
    debitType,
    frequency,
    createdOn,
    createdBy,
    product,
    branch,
    categoryCode,
    fileId,
    initiatedToBankDateAndTime,
    utilityCode,
  };
}

export const rows = [
    createData('mandate Status', 11, 12, 13, 'customer name', 14, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 21, 22, 23, 'customer name', 24, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 31, 32, 33, 'customer name', 34, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 41, 42, 43, 'customer name', 44, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 51, 52, 53, 'customer name', 54, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 61, 62, 63, 'customer name', 64, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 71, 72, 73, 'customer name', 74, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 81, 82, 83, 'customer name', 84, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 91, 92, 93, 'customer name', 94, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 101, 102, 103, 'customer name', 104, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
    createData('mandate Status', 111, 112, 113, 'customer name', 114, 100, 'One Hundred', 'ifsc', 'customer bank', 'sponsor bank', 'date on mandate', 'form date', 'debit to', 'debit type', 'frequency', 'created on', 'created by', 'product', 'branch', 'category code', 'file id', 'initiated to bank date and time', 'utility code'),
];

export const headCells: readonly SentToBankHeadCell[] = [
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
    label: "Mandate Id",
  },
  {
    id: "fileNo",
    numeric: true,
    disablePadding: false,
    label: "File No",
  },
  {
    id: "referecne1",
    numeric: true,
    disablePadding: false,
    label: "Referecne 1",
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
    label: "Customer Account No",
  },
  {
    id: "amountInWords",
    numeric: true,
    disablePadding: false,
    label: "Amount In Words",
  },
  {
    id: "IFSC_MICR",
    numeric: true,
    disablePadding: false,
    label: "IFSC/MICR",
  },
  {
    id: "customerBank",
    numeric: true,
    disablePadding: false,
    label: "Customer Bank",
  },
  {
    id: "sponsorBank",
    numeric: true,
    disablePadding: false,
    label: "Sponsor Bank",
  },
  {
    id: "dateOnMandate",
    numeric: true,
    disablePadding: false,
    label: "Date On Mandate",
  },
  {
    id: "formDate",
    numeric: true,
    disablePadding: false,
    label: "Form Date",
  },
  {
    id: "debitTo",
    numeric: true,
    disablePadding: false,
    label: "Debit To",
  },
  {
    id: "debitType",
    numeric: true,
    disablePadding: false,
    label: "Debit Type",
  },
  {
    id: "frequency",
    numeric: true,
    disablePadding: false,
    label: "Frequency",
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
    id: "product",
    numeric: true,
    disablePadding: false,
    label: "Product",
  },
  {
    id: "branch",
    numeric: true,
    disablePadding: false,
    label: "Branch",
  },
  {
    id: "categoryCode",
    numeric: true,
    disablePadding: false,
    label: "Category Code",
  },
  {
    id: "fileId",
    numeric: true,
    disablePadding: false,
    label: "File Id",
  },
  {
    id: "initiatedToBankDateAndTime",
    numeric: true,
    disablePadding: false,
    label: "Initiated To Bank Date And Time",
  },
  {
    id: "utilityCode",
    numeric: true,
    disablePadding: false,
    label: "Utility Code",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof SentToBankData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof SentToBankData) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface EnhancedTableToolbarProps {
  numSelected: number;
}

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              {numSelected > 0 ? (
                <Typography
                  sx={{ flex: "1 1 100%" }}
                  color="inherit"
                  variant="subtitle1"
                  component="div"
                >
                  {numSelected} selected
                </Typography>
              ) : (
                <Typography
                  sx={{ flex: "1 1 100%" }}
                  variant="h6"
                  id="tableTitle"
                  component="div"
                >
                  Sent to Bank
                </Typography>
              )}

              {numSelected > 0 ? (
                <Box></Box>
              ) : (
                <Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                      // onChange={}
                    />
                  </Search>
                </Box>
              )}

              {numSelected > 0 ? (
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <div></div>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            {numSelected > 0 ? (
              <Box />
            ) : (
              <form action="">
                <Stack direction="row" spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="From" />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="To" />
                  </LocalizationProvider>
                  <Button type="submit">OK</Button>
                </Stack>
              </form>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}
