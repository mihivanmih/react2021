import {message} from "antd";

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null = null
type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}

const cleanUp = () => {
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()

    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    notifySubscribersAboutStatus('pending')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
    ws?.addEventListener('open', openHandler)
    ws?.addEventListener('error', errorHandler)
}

const messageHandler = (e: MessageEvent) => {
    const newMassages = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMassages))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE')
}

export const chatApi = {
    start() {
      createChannel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe (eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

export type StatusType = 'pending' | 'ready' | 'error'
