"use client"
import gsap from "gsap";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


function FeaturedProject() {

    const [isOpenScreen, setIsOpenScreen] = useState();


    // useEffect(() => {

    //     const boxImage = gsap.utils.toArray(".featuredCard");
    //     const gallery = document.getElementById("projectArea");
    //     const filledBox = document.querySelector(".projectModal");
    //     const goBack = document.querySelector(".goBack");

    //     console.log(filledBox)
    //     console.log(gallery)
    //     console.log(filledBox.children[0])

    //     goBack.addEventListener("click", () => {
    //         let backState = Flip.getState(".featuredCard");
    //         if (filledBox.children[0]) {
    //             gallery?.appendChild(filledBox.children[0]);
    //         }
    //         Flip.to(backState, { duration: 0.5, scale: true, nested: true });
    //     })


    //     boxImage.forEach((card, id) => {


    //         card.querySelector(".btn").addEventListener("click", (event) => {
    //             let state = Flip.getState(".featuredCard");

    //             const currentCard = gallery.querySelector(`#card-${card.getAttribute("id")}`)
    //             console.log("currentCard", currentCard)


    //             function imageBig() {
    //                 if (card.parentElement === gallery || filledBox.children[0] === null) {
    //                     filledBox.appendChild(card);
    //                 }

    //                 if (!filledBox.children[0]) {
    //                     filledBox.appendChild(card);

    //                 }
    //                 Flip.from(state, { duration: 0.5, scale: true, nested: true });
    //             }

    //             imageBig();
    //         })

    //     })









    //     // if(isScreen){
    //     //     gsap.to(".featuredCard", {
    //     //         width: "100vw",
    //     //         height: "100vh",
    //     //         duration: 1
    //     //     })
    //     // }else{
    //     //     gsap.to(".featuredCard", {
    //     //         width: "80%",
    //     //         height: "450px",
    //     //         duration: 1
    //     //     })
    //     // }
    // }, [isOpenScreen])


    useEffect(()=> {
        gsap.to("#projectArea",{
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: "#projectArea",
              pin: ".heading", // pin the trigger element while active
              // start: "top top", // when the top of the trigger hits the top of the viewport
              // end: "+=500",  end after scrolling 500px beyond the start
              scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              
            },
          });
          
          // add animations and labels to the timeline
        //   tl.addLabel("start")
        //     .from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
        //     .addLabel("color")
        //     .from(".box", { backgroundColor: "#28a92b" })
        //     .addLabel("spin")
        //     .to(".box", { rotation: 360 })
        //     .addLabel("end");
    },[])
    return (
        <div className="container mx-auto py-28 flex gap-8">
            <h2 className='text-5xl text-white font-bold heading pt-36'>Featured <br /> <span className='ml-10 text-[5rem] text-lightGreen'>Project</span></h2>


            {/* <div className={` w-full min-h-screen fixed top-0 left-0 bg-yellow-100 transition-all duration-500 border-t-[100px] border-dark-300 ${isOpenScreen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} flex gap-6 `}>
                <div className="container mx-auto">
                    <div className="projectModal"></div>
                    <div className=""></div>

                </div>
            </div> */}

            
            <div className="space-y-36 w-[75%]" id="projectArea">
                <FeaturedCard isOpenScreen={isOpenScreen} setIsOpenScreen={setIsOpenScreen} id={0} />
                <FeaturedCard isOpenScreen={isOpenScreen} setIsOpenScreen={setIsOpenScreen} id={1} />
                <FeaturedCard isOpenScreen={isOpenScreen} setIsOpenScreen={setIsOpenScreen} id={2} />


            </div>
        </div>
    )
}

export default FeaturedProject