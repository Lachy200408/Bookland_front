import { createContext, useContext } from 'react'
import { notificationDefaultValue } from '/src/constants/context-default.js'

export const notificationContext = createContext(notificationDefaultValue)
export const useNotificationContext = () => useContext(notificationContext)
