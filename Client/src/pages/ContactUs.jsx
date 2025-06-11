import { useState } from "react";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { addMessage } from "../redux/messageSlice"
import { toast } from "react-toastify";
import GradientText from "../components/GradientText";
import weddingpic1 from "../assets/images/weddingpic1.jpg";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    messageDate: "",
    firstName: "",
    lastName: "",
    phone: "",
    cellPhone: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ ...contactForm }))
    toast.success("Message Sent Successfully")
    navigate("/")
  };

  return (
    <div className="mb-16 ">
      <img
        src={weddingpic1}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border border-zinc-500 border-4 rounded-lg"
      />
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class brush text-7xl mb-10"
      >
        Contact A Wedding Planner Today
      </GradientText>
      <form onSubmit={handleSubmit}>
      <div>
            <label
              htmlFor="messageDate"
              className="block brush mb-2 ps-20 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              {" "}
              Message Date
            </label>
            <input
            value={contactForm.messageDate}
            onChange={(e)=> setContactForm({...contactForm, messageDate: e.target.value })}
              type="date"
              id="messageDate"
              className="bg-white ml-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        <div className="grid gap-6 pb-10 md:grid-cols-2 ps-20 pe-20 mt-10">
          <div>
            <label
              htmlFor="firstName"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              {" "}
              First Name
            </label>
            <input
            value={contactForm.firstName}
            onChange={(e)=> setContactForm({...contactForm, firstName: e.target.value })}
              type="text"
              id="first_name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Last Name
            </label>
            <input
            value={contactForm.lastName}
            onChange={(e)=> setContactForm({...contactForm, lastName: e.target.value })}
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cellPhone"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Cell Phone
            </label>
            <input
            value={contactForm.cellNumber}
            onChange={(e)=> setContactForm({...contactForm, cellNumber: e.target.value })}
              type="tel"
              id="cellPhone"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="123-450-6758"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
            >
              Phone number
            </label>
            <input
             value={contactForm.phoneNumber}
             onChange={(e)=> setContactForm({...contactForm, phoneNumber: e.target.value })}
              type="tel"
              id="phone"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-450-6780"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
        <div className="mb-6 ps-20 pe-20">
          <label
            htmlFor="email"
            className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
          >
            Email address
          </label>
          <input
           value={contactForm.email}
           onChange={(e)=> setContactForm({...contactForm, email: e.target.value })}
            type="email"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6 ps-20 pe-20">
          <label
            htmlFor="message"
            className="block brush mb-2 text-2xl font-medium text-zinc-500 dark:text-zinc-500"
          >
            Message
          </label>
          <textarea
           value={contactForm.messageBody}
           onChange={(e)=> setContactForm({...contactForm, messageBody: e.target.value })}
            className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Messages/Questions..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white brush bg-zinc-500 ml-20 mb-10 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-800 dark:focus:ring-zinc-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;