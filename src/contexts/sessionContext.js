import { createContext, useContext } from 'react'
import { sessionDefaultValue } from '../constants/context-default.js'

export const sessionContext = createContext(sessionDefaultValue)
export const useSessionContext = () => useContext(sessionContext)
