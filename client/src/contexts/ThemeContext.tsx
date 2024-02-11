"use client";
import { Theme } from '@mui/material';
import { createContext } from 'react';

interface ThemeContextProps {
    toggleColorMode: () => void
    theme: Theme
    mode: 'light' | 'dark'
    isDark: boolean,
    navigationLock: {
        state: boolean,
        setState: React.Dispatch<React.SetStateAction<boolean>>
        toggle: () => void
    }
}

const ThemeContext = createContext<ThemeContextProps>({
    // toggleColorMode: () => { },
    // theme: undefined,
    // mode: undefined,
    // isDark: undefined,
} as ThemeContextProps);

export default ThemeContext;