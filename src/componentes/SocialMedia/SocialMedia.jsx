import './SocialMedia.css'
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
        <SlSocialInstagram  className="instagram"/>
        <RiFacebookCircleLine  className="facebook"/>
        <FaWhatsapp className="wsap"/>
    </div>
  )
}

export default SocialMedia