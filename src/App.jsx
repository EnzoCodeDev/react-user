import './styles/styles.scss';
import 'animate.css';
import { AppRouter } from './routers/AppRouter';
import axios from 'axios';
import env from './config/env';

export const App = () => {
  axios.defaults.baseURL = env['url'];
  return (
    <AppRouter />
  );
}
