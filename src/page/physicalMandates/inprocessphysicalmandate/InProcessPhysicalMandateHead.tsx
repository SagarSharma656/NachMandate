import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import {
  Order,
  InProcessPhysicalMandateData,
  InProcessPhysicalMandateHeadCell,
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
  reference1: number,
  customerName: string,
  customerAccountNo: number,
  amount: number,
  amountInWord: string,
): InProcessPhysicalMandateData {
  return {
    mandateStatus,
    mandateId,
    reference1,
    customerName,
    customerAccountNo,
    amount,
    amountInWord,
  };
}

export const rows = [
  createData("Mandate Status", 1, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData("Mandate Status", 2, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData("Mandate Status", 3, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
  createData("Mandate Status", 4, 123456789, "Customer Name", 123456789, 100, 'One Hundred'),
];

export const headCells: readonly InProcessPhysicalMandateHeadCell[] = [
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

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof InProcessPhysicalMandateData
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
    (property: keyof InProcessPhysicalMandateData) =>
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
                  In Process Physical Mandate
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
