import './SocialMedia.css'
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.instagram.com/tucuenta" 
        target="_blank"
        rel="NA"
      >
        <SlSocialInstagram className="instagram" />
      </a>

      <a
        href="https://www.facebook.com/tupagina" 
        target="_blank"
        rel="NA"
      >
        <RiFacebookCircleLine className="facebook" />
      </a>

      <a
        href="https://wa.me/573001112222" 
        target="_blank"
        rel="NA"
      >
        <FaWhatsapp className="wsap" />
      </a>
    </div>
  );
};

export default SocialMedia;