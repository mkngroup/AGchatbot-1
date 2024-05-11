import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'

function MessageBar({ setMessageText, MessageText }) {


    return (
        <div className="relative flex items-center justify-center w-full">
            <textarea
                name=""
                id=""
                rows="1"
                placeholder="Message ChatBot"
                value={MessageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="tascrollbar w-full py-4 px-4 pr-14  text-xl rounded-2xl border border-[#D9D9D9] resize-none focus:outline-none focus:border-[#acabab]"
            />
            <button className="absolute   p-2 right-3">
                <BsSend className="text-3xl" />
            </button>
        </div>
    )
}

export default MessageBar