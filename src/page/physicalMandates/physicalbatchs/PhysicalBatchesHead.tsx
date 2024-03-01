import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import {
  Order,
  PhysicalBatchsData,
  PhysicalBatchsHeadCell,
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
    srno: number,
    fileNo: number,
    totalNoOfRecordsInFile: number,
    createdOn: string,
    createdBy: string,
    download: string,
    action: string,
): PhysicalBatchsData {
  return {
    srno,
    fileNo,
    totalNoOfRecordsInFile,
    createdOn,
    createdBy,
    download,
    action,
  };
}

export const rows = [
    createData(1, 11, 21, 'created on', 'cretaed by', 'download', 'action'),
    createData(2, 12, 22, 'created on', 'cretaed by', 'download', 'action'),
    createData(3, 13, 23, 'created on', 'cretaed by', 'download', 'action'),
    createData(4, 14, 24, 'created on', 'cretaed by', 'download', 'action'),
    createData(5, 15, 25, 'created on', 'cretaed by', 'download', 'action'),
    createData(6, 16, 26, 'created on', 'cretaed by', 'download', 'action'),
    createData(7, 17, 27, 'created on', 'cretaed by', 'download', 'action'),
    createData(8, 18, 28, 'created on', 'cretaed by', 'download', 'action'),
    createData(9, 19, 29, 'created on', 'cretaed by', 'download', 'action'),
    createData(10, 20, 30, 'created on', 'cretaed by', 'download', 'action'),
];

export const headCells: readonly PhysicalBatchsHeadCell[] = [
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
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof PhysicalBatchsData
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
    (property: keyof PhysicalBatchsData) =>
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
                  Physical Batches
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
