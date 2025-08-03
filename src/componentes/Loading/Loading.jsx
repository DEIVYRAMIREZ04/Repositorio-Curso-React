import { ScaleLoader   } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader" >
         <ScaleLoader   color=" #65037eff"height={100} width={15} />
    </div>
  )
}

export default Loading