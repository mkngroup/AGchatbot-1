import { useEffect, useState } from "react"

export default function ChatService() {
    const [MessageText, setMessageText] = useState('')

    useEffect(() => {
        console.log(MessageText)
    }, [MessageText])
    const Service = { setMessageText, MessageText }
    return { Service }
}