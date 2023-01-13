import React, {useEffect, useState} from 'react';
import style from './Chat.module.css'

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const Chat: React.FC = () => {

    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        let webSocket: WebSocket

        let closeHandler = () => {
            console.log('CLOSE WS')
            //createChannel()
            setTimeout(createChannel, 3000)
        }
        function createChannel() {
            webSocket?.removeEventListener('close', closeHandler)
            webSocket?.close()

            webSocket = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            webSocket?.addEventListener('close', closeHandler)
            setWs(webSocket)
        }
        createChannel()

        return () => {
            webSocket.removeEventListener('close', closeHandler)
            webSocket.close()
        }

    }, []);

    return (
        <div>
            <Messages ws={ws} />
            <AddMessagesForm ws={ws} />
        </div>
    );
}

const Messages: React.FC<{ws: WebSocket | null}> = ({ws}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            let newMassages = JSON.parse(e.data);
            setMessages((prevMaessages:ChatMessageType[]) => [...prevMaessages, ...newMassages])
        };
        ws?.addEventListener('message', messageHandler)
        // ws.onmessage = e => {
        //     let data = JSON.parse(e.data)
        //     setMessages(prevMessages => [...prevMessages, ...data])
        // }

        return () => {
            ws?.removeEventListener('message', messageHandler)
        }

    }, [ws])


    return (
        <div className={style.textBlock}>
            {messages.map((messages:ChatMessageType, index) => <Message key={index} messages={messages} />)}
        </div>
    );
}

const Message: React.FC<{messages: ChatMessageType}> = ({messages}) => {

    return (
        <div>
            <img src={messages.photo} alt="" className={style.img}/>
            {messages.userName} <br/>
            {messages.message}
            <hr/>
        </div>
    );
}

const Avatar: React.FC = () => {
    return (
        <div>
            <img src="" alt=""/>
        </div>
    );
}

const AddMessagesForm: React.FC<{ws: WebSocket | null}> = ({ws}) => {

    const [message, setMessage] = useState("")
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus('ready')
        };
        ws?.addEventListener('open', openHandler)
        return () => {
            ws?.removeEventListener('open', openHandler)
        }
    }, [ws]);


    const sendMessage = () => {
        if(!message) {
            return
        }
        ws.send(message)
        setMessage('')
    }

    return (
        <div className="row align-items-start">
            <div className="col-12 mb-2">
                <textarea name="" id="" rows={3} className={style.textarea} onChange={(e) => setMessage(e.currentTarget.value)} value={message}>

                </textarea>
            </div>
            <div className="col">
                <button disabled={ws !== null && readyStatus !== 'ready'} className={`btn btn-primary`} onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default Chat;