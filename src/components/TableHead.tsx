import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Order } from "../utils/types";
import { UnionHeadCellType, UnionRowType } from "./DataTable";
import { Dialog, InputBase, Slide, Grid, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TransitionProps } from "@mui/material/transitions";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddUser from "../page/user/AddUser";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";




interface EnhancedTableProps{
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof UnionRowType
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: UnionHeadCellType[];
}

export function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler =
    (property: keyof UnionRowType) => (_event: React.MouseEvent<unknown>) => {
      onRequestSort(_event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            size="small"
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={{ minWidth: "max-content", alignSelf: "center" }}
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface EnhancedTableToolbarProps {
  numSelected: number;
  title: string;
}

export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, title } = props;

    const [openAddUser, setOpenAddUser] = React.useState(false);

    const handleClickOpenAddUser = () => {
      setOpenAddUser(true);
    };
    const handleCloseAddUser = () => {
      setOpenAddUser(false);
    };

  return (
    <Box>
      <Box>
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
              {title}
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
                  onChange={() => {}}
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
          ) : title !== "User Creation" ? (
            <Tooltip title="Filter list">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Box>
              <Tooltip title="Add User">
                <IconButton onClick={handleClickOpenAddUser}>
                  <PersonAddIcon />
                </IconButton>
              </Tooltip>
              <Dialog
                fullScreen
                open={openAddUser}
                onClose={handleCloseAddUser}
                TransitionComponent={Transition}
              >
                <AddUser handleCloseAddUser={handleCloseAddUser} />
              </Dialog>
            </Box>
          )}
        </Toolbar>
      </Box>
      {title === "Mandates" ? null : title === "User Creation" ? null : (
        <Box>
          {numSelected > 0 ? (
            <Box />
          ) : (
            <form action="" >
              <Stack direction="row" spacing={1} pl={2}>
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
        </Box>
      )}
    </Box>
  );
}
