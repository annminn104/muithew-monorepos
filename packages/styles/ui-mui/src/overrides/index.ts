import { Theme } from '@mui/material/styles';

import Accordion from './Accordion';
import AccordionActions from './AccordionActions';
import AccordionDetails from './AccordionDetails';
import AccordionSummary from './AccordionSummary';
import Alert from './Alert';
import AlertTitle from './AlertTitle';
import AppBar from './AppBar';
import Autocomplete from './Autocomplete';
import Avatar from './Avatar';
import AvatarGroup from './AvatarGroup';
import Backdrop from './Backdrop';
import Badge from './Badge';
import BottomNavigation from './BottomNavigation';
import BottomNavigationAction from './BottomNavigationAction';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import ButtonBase from './ButtonBase';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import CircularProgress from './CircularProgress';
import Collapse from './Collapse';
import Container from './Container';
import ControlLabel from './ControlLabel';
import CssBaseline from './CssBaseline';
import Dialog from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogContentText from './DialogContentText';
import DialogTitle from './DialogTitle';
import Divider from './Divider';
import Drawer from './Drawer';
import Fab from './Fab';
import FilledInput from './FilledInput';
import FormControl from './FormControl';
import FormControlLabel from './FormControlLabel';
import FormGroup from './FormGroup';
import FormHelperText from './FormHelperText';
import FormLabel from './FormLabel';
import Grid from './Grid';
import Grid2 from './Grid2';
import Icon from './Icon';
import IconButton from './IconButton';
import ImageList from './ImageList';
import ImageListItem from './ImageListItem';
import ImageListItemBar from './ImageListItemBar';
import Input from './Input';
import InputAdornment from './InputAdornment';
import InputBase from './InputBase';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import Link from './Link';
import Lists from './List';
import ListItem from './ListItem';
import ListItemAvatar from './ListItemAvatar';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import ListItemSecondaryAction from './ListItemSecondaryAction';
import ListItemText from './ListItemText';
import ListSubheader from './ListSubheader';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import MobileStepper from './MobileStepper';
import Modal from './Modal';
import NativeSelect from './NativeSelect';
import OutlinedInput from './OutlinedInput';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import Paper from './Paper';
import Popover from './Popover';
import Popper from './Popper';
import Radio from './Radio';
import Rating from './Rating';
import ScopedCssBaseline from './ScopedCssBaseline';
import Select from './Select';
import Skeleton from './Skeleton';
import Slider from './Slider';
import Snackbar from './Snackbar';
import SnackbarContent from './SnackbarContent';
import SpeedDial from './SpeedDial';
import SpeedDialAction from './SpeedDialAction';
import SpeedDialIcon from './SpeedDialIcon';
import Stack from './Stack';
import Step from './Step';
import StepButton from './StepButton';
import StepConnector from './StepConnector';
import StepContent from './StepContent';
import StepIcon from './StepIcon';
import StepLabel from './StepLabel';
import Stepper from './Stepper';
import SvgIcon from './SvgIcon';
import SwipeableDrawer from './SwipeableDrawer';
import Switch from './Switch';
import Tab from './Tab';
import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableContainer from './TableContainer';
import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import TableRow from './TableRow';
import TableSortLabel from './TableSortLabel';
import Tabs from './Tabs';
import TextField from './TextField';
import ToggleButton from './ToggleButton';
import ToggleButtonGroup from './ToggleButtonGroup';
import Toolbar from './Toolbar';
import Tooltip from './Tooltip';
import TouchRipple from './TouchRipple';
import Typography from './Typography';
import UseMediaQuery from './UseMediaQuery';

const componentOverrides = [
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  Checkbox,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  ControlLabel,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Grid2,
  Icon,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  LinearProgress,
  Link,
  Lists,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Modal,
  NativeSelect,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Paper,
  Popover,
  Popper,
  Radio,
  Rating,
  ScopedCssBaseline,
  Select,
  Skeleton,
  Slider,
  Snackbar,
  SnackbarContent,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  TouchRipple,
  Typography,
  UseMediaQuery
];

export function componentsOverrides(theme: Theme) {
  return componentOverrides.reduce((overrides, Component) => {
    return Object.assign(overrides, Component(theme));
  }, {});
}
