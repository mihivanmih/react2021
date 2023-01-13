import React, {useEffect, useRef, useState} from 'react';
import style from './Chat.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {sendMessage, startMassagesListening, stopMassagesListening} from "../../redux/chat-reducer";

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()

    const status = useSelector((state) => state.chat.status)

    useEffect(() => {
        dispatch(startMassagesListening())
        return () => {
            dispatch(stopMassagesListening())
        };
    }, [])

    return (
        <div>
            {status === 'error' && <div>Error</div> }
                <Messages/>
                <AddMessagesForm/>
        </div>
    );
}

const Messages: React.FC<{}> = ({}) => {
    const messages = useSelector((state) => state.chat.messages)
    const messagesRef = useRef()
    const [autoScroll, setAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEventHandler<HTMLDivElement>) => {
        const element = e.currentTarget
        if(Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 300) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)
        }
    }

    useEffect(() => {
        return () => {
            if(autoScroll) {
                messagesRef.current?.scrollIntoView({behavitor: 'smooth'})
            }
        }
    }, [messages]);


    return (
        <div className={style.textBlock} onScroll={scrollHandler}>
            {messages.map((messages:ChatMessageType, index) => <Message key={index} messages={messages} />)}
            <div ref={messagesRef} />
        </div>
    );
}

const Message: React.FC<{messages: ChatMessageType}> = React.memo(({messages}) => {

    return (
        <div>
            <img src={messages.photo} alt="" className={style.img}/>
            {messages.userName} <br/>
            {messages.message}
            <hr/>
        </div>
    );
})

const Avatar: React.FC = () => {
    return (
        <div>
            <img src="" alt=""/>
        </div>
    );
}

const AddMessagesForm: React.FC<{}> = ({}) => {

    const [message, setMessage] = useState("")
    const status = useSelector((state) => state.chat.status)
    const dispatch = useDispatch()


    const sendMessageHandler = () => {
        if(!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div className="row align-items-start">
            <div className="col-12 mb-2">
                <textarea name="" id="" rows={3} className={style.textarea} onChange={(e) => setMessage(e.currentTarget.value)} value={message}>

                </textarea>
            </div>
            <div className="col">
                <button className={`btn btn-primary`} disabled={status !== 'ready'} onClick={sendMessageHandler}>Отправить</button>
            </div>
        </div>
    );
}

export default Chat;