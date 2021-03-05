import { useContext } from 'react';
import { Theme } from '../constants';

export const useTheme = () => useContext(Theme);
