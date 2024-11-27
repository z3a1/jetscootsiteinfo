"use client"
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

export default function Home() {


  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef();

  let headerClass = "md:text-4xl md:m-5 border-solid border-b-4 border-gray-600 md:mx-auto text-center md:w-3/6"
  let textClass = "text-center m-5 md:size-4/12 md:text-l mx-auto"
  let descClass = "text-center md:size-4/12 mx-auto"

  let problemArr = [
    {src: "/main/late.jpg", desc: "Always running late during your commute?"},
    {src: "/main/confused.jpg", desc: "Upset not knowing when your bus is coming?"},
    {src: "/main/tired.jpg", desc: "Tired of having to call in that you're running late cause of traffic?"}
  ]

  let appArr = ["app1.png","app2.png","app3.png", "app3.png", "app4.png", "app5.png", "app6.png"]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useGSAP(
    () => {
      let problemArr = gsap.utils.toArray(".problemCard")
      problemArr.forEach((item,key) => {
        gsap.from(item, {
          opacity: 0,
          duration: 3.5,
          x: 200,
          scrollTrigger: {
            trigger: item,
            start: "center bottom",
            end: "end end",
          }
        })
      })
    }
  )

  return (
    <div>
      <div className="flex flex-col justify-center">
        <img className = "mx-auto md:size-100 m-3" src = "/main/logo.jpg" alt = "JetScoot Logo"/>
      </div>

      <div className="w-4/6 h-max mx-auto" id = "problem">
        <div id = "cardContainer">
            {problemArr.map((item,key) => {
                return(
                  <div className="border-solid border-4 border-gray-400 m-10 problemCard" key = {key + 5}>
                    <p key = {key} className="text-center m-5">{item.desc}</p>
                    <img key = {key + 3} src = {item.src} alt = "Image did not load properly!" className="md:w-[500px] mx-auto m-2"/>
                  </div>
                )
            })}
        </div>
      </div>
      
    <div id = "about">

        <h1 className= {headerClass}>Welcome to JetScoot!</h1>
        <p className= {textClass}>
          Jetscoot focuses on answering the needs of commuters in Metro vancouver by offering "Last Mile" travel
          via e-scooters making travelling around Metro Vancouver to and from affordable and sustainable.
          JetScoot collaborates with local e-scooter manufacturers removing the expenses of importing scooters while
          supporting local businesses 
        </p>

        <h1 className= {headerClass}>How Does JetScoot Work?</h1>
        <div id ="StockDescImg" className="mx-auto">
          <div className="flex flex-col sm:flex-row md:flex-col">
            <img src = "/main/scooter1.jpg" className="md:w-2/6 mx-auto m-5"/>
            <p className={descClass}>
              JetScoot utilizes local E-scooter and E-Bike companies to create a eco-friendly and
              sustainable transport method for JetScoot which are distributed to key points/pains
              in the Metro Vancouver Area
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col">
            <img src = "/main/scooter2.jpg" className="md:w-2/6 mx-auto m-5"/>
            <p className={descClass}>
              Our customers will and can be serviced via the JetScoot app as seen at the bottom!
              Customers will be able to book, and pay for usage of E-scooters and E-bikes and at the same time
              stay up to date with service and maintenance messages!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col">
            <img src = "/main/scooter3.jpg" className="md:w-2/6 mx-auto m-5"/>
            <p className={descClass}>
              JetScoot also seeks to provide budget friendly options! With JetScoot you only pay 29 cents
              per minute with a 99 cent unlock fee. Students are more prioritized where they also have the option
              to pay $66 with their respective institutions without the unlock fee!
            </p>
          </div>
        </div>
        <div id = "img">
        <h1 className={headerClass}>JetScoot's APP Prototype</h1>
          <Carousel responsive={responsive} containerClass="md:w-1/6 mx-auto">
              {
                appArr.map((element, key) => {
                  return(
                    <img src = {`/main/${element}`} key = {key} className="mx-auto"/>
                  )
                })
              }
          </Carousel>
        </div>
    </div>
      
      <footer className="text-center">
        <p>images designed by <Link href ="https://www.freepik.com" passHref = {true}>FreePik</Link></p>
      </footer>
    </div>
  );
}
