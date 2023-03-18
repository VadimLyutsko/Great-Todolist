import {Dispatch} from 'redux'
import {ResponseType} from '../api/todolists-api'
import {AppActionsType, setErrorAC, setErrorType, setStatusAC, setStatusType} from '../app/app-reduser';


export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setStatusAC('idle'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setErrorAC(error.message))
    dispatch(setStatusAC('failed'))
}

type ErrorUtilsDispatchType = Dispatch<AppActionsType>
