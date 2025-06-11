import { useState, useEffect } from 'react'
import { Link } from "react-router"
import { useSelector, useDispatch } from "react-redux";
import { messageList } from "../redux/messageSlice";
import GradientText from "../components/GradientText";

const Inbox = () => {
  const { messages } = useSelector((state) => state.message);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(messageList(messages));
  }, []);

  useEffect(() => {
    console.log("messages", messages);
  }, [messages]);

  return (
    <div className="h-screen">
     
             <GradientText
                colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class  brush ml-44 pl-60 mt-10 text-5xl font-extrabold text-center"
              >
                Inbox
              </GradientText>

              <h1 className=" brush ml-82 mt-10 text-4xl font-bold underline text-zinc-500">
          Your Messages
        </h1>
        <ul role="list" className="divide-y brush divide-gray-100 p-10  pe-40 ml-72">
          {messages.map((message, index) =>
            
              <Link key={index} to={`/message-details/${message.id}`}>
                <li className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <span className="text-md  text-zinc-500">
                        <span className="font-extrabold text-3xl ">From:</span>
                        <span className="text-3xl"> {message.firstName} {message.lastName}</span>
                      </span>
                      <p className="mt-1 text-2xl truncate text-zinc-500">
                        <span className="font-extrabold">Phone:</span> {message.phoneNumber}  <span className="font-extrabold">Cell:</span> {message.cellNumber} <span className="font-extrabold">Email:</span> {message.email}
                      </p>
                      <p className="mt-1 truncate text-3xl text-zinc-500">
                        <span className="font-extrabold">Phone:</span> {message.messageBody}  
                      </p>
                    </div>
                  </div>
                  <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className=" text-2xl text-zinc-500">
                      <span className="font-bold">Date:</span>{" "}
                      {new Date(message.messageDate).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </p>
                  </div>
                </li>
                <hr className="text-zinc-500" />
              </Link>
           
          )}
        </ul>
        <hr />
    </div>
  )
}

export default Inbox