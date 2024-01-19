import React, { useState } from 'react'

export default function Stcard({stname,setStname}) {
//contents


const [stname1, setStname1] = useState("bash");
const [stname2, setStname2] = useState("gopal");
const [stname3, setStname3] = useState("content");

const [address, setAddress] = useState("Chennai");
const [address1, setAddress1] = useState("Chennai");
const [address2, setAddress2] = useState("Chennai");
const [address3, setAddress3] = useState("Chennai");

const [para, setPara] = useState("very pleased with the photos");
const [para1, setPara1] = useState("very pleased with the photos");
const [para2, setPara2] = useState("very pleased with the photos");
const [para3, setPara3] = useState("very pleased with the photos");

// Name Change Handlers
const handleNameChange = (event) => setStname(event.target.innerText);
const handleNameChange01 = (event) => setStname1(event.target.innerText);
const handleNameChange02 = (event) => setStname2(event.target.innerText);
const handleNameChange03 = (event) => setStname3(event.target.innerText);

// Address Change Handlers
const handleNameChange1 = (event) => setAddress(event.target.innerText);
const handleNameChange12 = (event) => setAddress1(event.target.innerText);
const handleNameChange13 = (event) => setAddress2(event.target.innerText);
const handleNameChange14 = (event) => setAddress3(event.target.innerText);

// Para Change Handlers
const handleNameChange2 = (event) => setPara(event.target.innerText);
const handleNameChange21 = (event) => setPara1(event.target.innerText);
const handleNameChange22 = (event) => setPara2(event.target.innerText);
const handleNameChange23 = (event) => setPara3(event.target.innerText);

    return (
      <>
    <div className="card">
    <div className="innercard">
      <div className="infocard">
        <div className="infoinnercard">
          <div className="pfpcard"></div>
          <div className="infonopfp">
            <textarea className="cardname" onChange={handleNameChange}>{stname}</textarea>
            <textarea className="address"  onChange={handleNameChange1}>{address}</textarea>
          </div>
        </div>
      </div>
      <div className="ratecard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
      </div>
      <div className="paracard" contentEditable={true} onInput={handleNameChange2} >
   
      <p>{para}</p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="innercard">
      <div className="infocard">
        <div className="infoinnercard">
          <div className="pfpcard"></div>
          <div className="infonopfp">
            <div className="cardname" contentEditable={true} onInput={handleNameChange01}>{stname1}</div>
            <div className="address"  contentEditable={true} onInput={handleNameChange12}>{address1}</div>
          </div>
        </div>
      </div>
      <div className="ratecard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
      </div>
      <div className="paracard" contentEditable={true} onInput={handleNameChange21} >
   
      <p>{para1}</p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="innercard">
      <div className="infocard">
        <div className="infoinnercard">
          <div className="pfpcard"></div>
          <div className="infonopfp">
            <div className="cardname" contentEditable={true} onInput={handleNameChange02}>{stname2}</div>
            <div className="address"  contentEditable={true} onInput={handleNameChange13}>{address2}</div>
          </div>
        </div>
      </div>
      <div className="ratecard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
      </div>
      <div className="paracard" contentEditable={true} onInput={handleNameChange22} >
   
      <p>{para2}</p>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="innercard">
      <div className="infocard">
        <div className="infoinnercard">
          <div className="pfpcard"></div>
          <div className="infonopfp">
            <div className="cardname" contentEditable={true} onInput={handleNameChange03}>{stname3}</div>
            <div className="address"  contentEditable={true} onInput={handleNameChange14}>{address3}</div>
          </div>
        </div>
      </div>
      <div className="ratecard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m315.001-690.153 108.153-141.923q10.769-14.411 25.577-21.167 14.808-6.756 31.269-6.756t31.269 6.756q14.808 6.756 25.577 21.167l108.153 141.923 165.385 55.846q23.692 7.616 36.961 26.869 13.269 19.254 13.269 42.538 0 10.746-3.141 21.428-3.141 10.681-10.321 20.472L739.46-373.539l4 158.615q1 31.594-20.826 53.258-21.826 21.665-50.865 21.665-.847 0-20.077-2.616L480-191.848l-171.692 49.231q-5 2-10.321 2.308-5.321.308-9.756.308-29.307 0-50.999-21.665-21.692-21.664-20.692-53.258l4-159.615L113.463-523q-7.18-9.83-10.321-20.553T100.001-565q0-22.627 13.182-42.086 13.182-19.46 36.818-27.605l165-55.462Z"
            fill="gold"
          />
        </svg>
      </div>
      <div className="paracard" contentEditable={true} onInput={handleNameChange23} >
   
      <p>{para3}</p>
      </div>
    </div>
  </div>
  </>
  )
}
