"use client"
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {


  // gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)
  // const container = useRef();

  let headerClass = "md:text-4xl md:m-5 border-solid border-b-4 border-green-600 md:mx-auto text-center"


  let [alter,setAlter] = useState(true)

  let problemArr = [
    {src: "/main/late.jpg", desc: "Always running late during your commute?"},
    {src: "/main/confused.jpg", desc: "Upset not knowing when your bus is coming?"},
    {src: "/main/tired.jpg", desc: "Tired of having to call in that you're running late cause of traffic?"}
  ]

  // useGSAP(
  //   () => {
  //     gsap.to(".header", {})
  //   }
  // )

  return (
    <div>
      <div className="flex flex-col justify-center">
        <img className = "mx-auto md:size-100 m-3" src = "/main/logo.jpg" alt = "JetScoot Logo"/>
      </div>

      <div id = "problem">
        {problemArr.map((item,key) => {
            return(
              <div className="border-solid border-4 border-green-300 flex flex-col m-10 mx-auto" key = {key + 5}>
                <p className = "md:text-2xl my-5 text-center " key ={key + 2}>{item.desc}</p>
                <img key = {key + 3} src = {item.src} alt = "Image did not load properly!" className="md:w-3/6 mx-auto"/>
              </div>
            )
        })}
      </div>
      
      <div id = "about">

        <h1 className= {headerClass}>What is Jetscoot?</h1>
        <p className="text-center m-5 md:text-xl">
          Jetscoot is a group that focuses on answering the needs of commuters in Metro vancouver by offering "Last Mile" travel
          via e-scooters making travelling around Metro Vancouver to and from affordable and sustainable
        </p>
      </div>
      
      <footer className="text-center">
        <p>images designed by <Link href ="https://www.freepik.com" passHref = {true}>FreePik</Link></p>
      </footer>
    </div>
  );
}
