import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getMessage } from "../redux/messageSlice";
import SideNavbar from "../components/SideNavbar";
import { deleteMessage } from "../redux/messageSlice";
import GradientText from "../components/GradientText";

const MessageDetails = () => {
  const { success, message } = useSelector((state) => ({
    success: state.message.success,
    message: state.message.message,
  }));

  const { id } = useParams();
  // const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("message", message);
  }, [message]);

  useEffect(() => {
    if (id) {
      dispatch(getMessage(id));
    }
  }, []);

  const removeMessage = () => {
    dispatch(deleteMessage(id));
    toast.success("Message Deleted Successfully");
    navigate("/inbox");
  };

  return (
    <>
      <SideNavbar />
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-5xl font-extrabold text-center"
      >
        Message Details
      </GradientText>
      <div className="bg-white brush text-2xl ml-80 me-20 mb-10 pt-10">
        <p className="ml-72">
          <span className="font-bold">Date:</span>{" "}
          {new Date(message.messageDate).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
        <p className="ml-72">
          <span className="font-bold">From:</span> {message.firstName}{" "}
          {message.lastName}
        </p>
        <p className="ml-72 mt-8">
          <span className="font-bold underline">Contact Info:</span>
        </p>
        <p className="ml-72">
          <span className="font-bold">Phone Number:</span> {message.phoneNumber}
        </p>
        <p className="ml-72">
          <span className="font-bold">Cell Number:</span> {message.cellNumber}
        </p>
        <p className="ml-72">
          <span className="font-bold">Email:</span> {message.email}
        </p>
        <p className="ml-72 mt-8">
          <span className="font-bold">Message :</span> {message.messageBody}
        </p>
        <div className="mt-10 ml-68">
          <button
            onClick={() => navigate("/inbox")}
            type="button"
            className="text-white mb-10 ml-4 bg-black font-semibold hover:bg-white hover:text-pink-200 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-black dark:hover:bg-zinc-500 dark:focus:ring-green-600"
          >
            Back
          </button>

          <button
            onClick={removeMessage}
            type="button"
            className="text-pink-600 mb-10 ml-4 bg-pink-600 font-semibold hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg  px-5 py-2.5 text-center hover:text-black dark:bg-black dark:hover:bg-pink-600 dark:focus:ring-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageDetails;