
import React, { useState } from 'react';


function Card(props) {
  const text = props.text;
  const text2 = props.text2;
  const text3 = props.text3;
  const srcc2 = props.srcs2;
  const srcc = props.srcs;
  const [isHovered, setIsHovered] = useState(false);
const imagestyle={
  widht:'20px',
  height:'20px',
  margintop: '20px',
  // marginbottom: '100px',
  // marginright: '150px',
  marginleft: '50px',
}
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zoomStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    width: '100%',
    fontSize: '20px',
    

  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '70vw',
          height: '40vh',
          padding: '0px 50px 0px 50px',
          justifyContent:'center'
         
          
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            padding:'15px'
          }}
        >
          <div>
          <p
            style={zoomStyle}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <h2 style={{
              fontSize: '48px',
              fontWeight: 400,
              fontFamily:'serif',
            }}> {text3}</h2>
            <h3 style={{
              fontSize: '20.8px',
              fontFamily:'serif',
              fontWeight: 400,
              // margin:'0px 0px 10.25px '
            }}>{text}</h3>



            </p>
            
          
            <a style={{
              marginTop:'50px',
              fontSize:'20px',
              color:'black'
            }} href={srcc2} >{text2} <img style={imagestyle}src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-arrow-right-thin.png" width={{}} alt="arrow-black"/></a>
          </div>

         
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
          }}
        >
          <img
            src={srcc}
            alt="Example Image"
            style={{ maxHeight: '80%', maxWidth: '80%' }}
          />
        </div>
      </div>
    </>
  );
}

export default Card;