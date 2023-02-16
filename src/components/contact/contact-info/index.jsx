import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactInfo = () => {
  return (
    <div className="contact_info__box">
       <h4>I would be happy to naswer any questions you may have about freelence writing or content marketing!</h4>
       <div className="contact_option">
        <FaPhoneAlt />
        <span className="text">+91 1234345558</span>
       </div>
       <div className="contact_option">
        <MdEmail />
        <span className="text">suber@gmail.com</span>
       </div>
    </div>
  )
}

export default ContactInfo