import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getTheme } from './styles/theme';
import PrivateRoute from './routes/PrivateRoute';
import DashboardLayout from './components/Layout/DashboardLayout';

// Auth Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Dashboard Pages
import Analytics from './pages/Dashboards/Analytics';
import CRM from './pages/Dashboards/CRM';
import Ecommerce from './pages/Dashboards/Ecommerce';

// Apps & Pages
import Email from './pages/Email';
import Chat from './pages/Chat';
import Calendar from './pages/Calendar';

// UI Pages
import Typography from './pages/UI/Typography';
import Icons from './pages/UI/Icons';
import IconsTest from './pages/UI/IconsTest';
import FormLayouts from './pages/UI/FormLayouts';
import FormValidation from './pages/UI/FormValidation';

// Form Elements Pages
import TextField from './pages/UI/FormElements/TextField';
import Select from './pages/UI/FormElements/Select';
import Checkbox from './pages/UI/FormElements/Checkbox';
import Radio from './pages/UI/FormElements/Radio';
import CustomInputs from './pages/UI/FormElements/CustomInputs';
import Textarea from './pages/UI/FormElements/Textarea';
import Autocomplete from './pages/UI/FormElements/Autocomplete';
import DatePickers from './pages/UI/FormElements/DatePickers';
import Switch from './pages/UI/FormElements/Switch';
import FileUploader from './pages/UI/FormElements/FileUploader';
import Editor from './pages/UI/FormElements/Editor';
import Slider from './pages/UI/FormElements/Slider';
import InputMask from './pages/UI/FormElements/InputMask';

// Charts Pages
import Apex from './pages/Charts/Apex';
import RechartsPage from './pages/Charts/Recharts';
import ChartJS from './pages/Charts/ChartJS';

// Misc Pages
import AccessControl from './pages/AccessControl';

function App() {
  const { mode } = useSelector((state) => state.theme);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/analytics" replace />} />

            {/* Dashboard Routes */}
            <Route path="analytics" element={<Analytics />} />
            <Route path="crm" element={<CRM />} />
            <Route path="ecommerce" element={<Ecommerce />} />

            {/* Apps & Pages Routes */}
            <Route path="email" element={<Email />} />
            <Route path="chat" element={<Chat />} />
            <Route path="calendar" element={<Calendar />} />

            {/* UI Routes */}
            <Route path="ui/typography" element={<Typography />} />
            <Route path="ui/icons" element={<Icons />} />
            <Route path="ui/icons-test" element={<IconsTest />} />
            <Route path="ui/form-layouts" element={<FormLayouts />} />
            <Route path="ui/form-validation" element={<FormValidation />} />

            {/* Form Elements Routes */}
            <Route path="ui/form-elements/text-field" element={<TextField />} />
            <Route path="ui/form-elements/select" element={<Select />} />
            <Route path="ui/form-elements/checkbox" element={<Checkbox />} />
            <Route path="ui/form-elements/radio" element={<Radio />} />
            <Route path="ui/form-elements/custom-inputs" element={<CustomInputs />} />
            <Route path="ui/form-elements/textarea" element={<Textarea />} />
            <Route path="ui/form-elements/autocomplete" element={<Autocomplete />} />
            <Route path="ui/form-elements/date-pickers" element={<DatePickers />} />
            <Route path="ui/form-elements/switch" element={<Switch />} />
            <Route path="ui/form-elements/file-uploader" element={<FileUploader />} />
            <Route path="ui/form-elements/editor" element={<Editor />} />
            <Route path="ui/form-elements/slider" element={<Slider />} />
            <Route path="ui/form-elements/input-mask" element={<InputMask />} />

            {/* Charts Routes */}
            <Route path="charts/apex" element={<Apex />} />
            <Route path="charts/recharts" element={<RechartsPage />} />
            <Route path="charts/chartjs" element={<ChartJS />} />

            {/* Misc Routes */}
            <Route path="access-control" element={<AccessControl />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
