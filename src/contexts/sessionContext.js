import { createContext, useContext } from 'react'
import { sessionDefaultValue } from '/src/constants/context-default.js'

export const sessionContext = createContext(sessionDefaultValue)
export const useSessionContext = () => useContext(sessionContext)
