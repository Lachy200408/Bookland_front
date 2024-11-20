import { createContext, useContext } from 'react'
import { notificationDefaultValue } from '../constants/context-default.js'

export const notificationContext = createContext(notificationDefaultValue)
export const useNotificationContext = () => useContext(notificationContext)
