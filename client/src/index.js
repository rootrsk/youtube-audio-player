import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from "@mui/material/styles";
axios.defaults.baseURL="https://rootrsk-youtube-player.herokuapp.com"
const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <StyledEngineProvider>
            <App />
        </StyledEngineProvider>
    </Provider>
)