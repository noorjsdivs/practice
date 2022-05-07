import React, { useState } from "react";
import "./Sarjana.css";
import PublicOpinionIcon from '@rsuite/icons/PublicOpinion';
import middlerope from '../assets/images/sarjana/middlerope.jpg'

const Sarjana = () => {
let [msgopen,setMsgopen] = useState(false)

const handleopen =()=>{
  setMsgopen(true)
}

return (
    <>
     <div className="mypage">
            <div className="innerbox" >

            {msgopen?
              <>
              <div className="cover coveranimation " onClick={handleopen}>
                <div className="hrope" ></div>
                <div className="vrope" ></div>
                <div className="rope"><img src={middlerope} /></div>
              </div>
              <h1 className="innermsg" ><span>MERN 2103</span> <br/> EID MUBARAK</h1>
              </>
              :
              <>
              <div className="cover" onClick={handleopen}>
                <div className="hrope" ></div>
                <div className="vrope" ></div>
                <div className="rope"><img src={middlerope} /></div>
              </div>
              <h1 className="innermsg" ><span>MERN 2103</span> <br/> EID MUBARAK</h1>
              </>
            }

{/* It's a messenger text featurejshjhsh chhchshdch bbchdgjhsd mjjjjjjjjgj */}

            </div>
     </div>
    </>
  );
};

export default Sarjana;
