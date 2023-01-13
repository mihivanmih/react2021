import {chatApi, ChatMessageType, StatusType} from "../api/chat-api";
import {v1} from 'uuid'

type ChatMessageTypeApi = ChatMessageType & {id: string}

let initialState = {
    messages: [] as ChatMessageTypeApi[],
    status: 'pending' as StatusType
}

export const chatReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEVIED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map( m => ({ ...m, id: v1()}))].filter((m, index, array) => index >= array.length - 100)
            }
        case 'SN/chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }

}

export const actions = {
    setMessagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/chat/MESSAGES_RECEVIED', payload:{messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'SN/chat/STATUS_CHANGED', payload:{status}
    } as const)
}

let _handlerNewMessage: ((messages: ChatMessageType[]) => void) | null = null
const handlerNewMessageCreator = (dispatch: Dispatch) => {
    if(_handlerNewMessage === null) {
        _handlerNewMessage = (messages) => {
            dispatch(actions.setMessagesReceived(messages))
        }
    }

    return _handlerNewMessage
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if(_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }

    return _statusChangedHandler
}



export const startMassagesListening = () => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received', handlerNewMessageCreator(dispatch))
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMassagesListening = () => async (dispatch) => {
    chatApi.unsubscribe('messages-received',handlerNewMessageCreator(dispatch))
    chatApi.unsubscribe('status-changed',statusChangedHandlerCreator(dispatch))
    chatApi.stop()
}

export const sendMessage = (messages: string) => async () => {
    chatApi.sendMessage(messages)
}


export default chatReduser