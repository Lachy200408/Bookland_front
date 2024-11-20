import { createContext, useContext } from 'react'
import { navigateDefaultValue } from '../constants/context-default.js'

export const navigateContext = createContext(navigateDefaultValue)
export const useNavigateContext = () => useContext(navigateContext)
