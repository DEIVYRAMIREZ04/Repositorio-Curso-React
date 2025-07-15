import { ScaleLoader   } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader" >
         <ScaleLoader   color=" #ff764d"height={100} width={15} />
    </div>
  )
}

export default Loading