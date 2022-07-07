import React, { Component } from "react";
import HText from "../components/HText";
import WebButton from "../components/WebButton";
import Faq from "../components/Faq";
import NavigBar from "../components/NavigBar";
import Footer from "../components/Footer";

class Pricing extends Component {
  render() {
    return (
      <>
        
        <nav className="w-full mx-auto">
            <NavigBar></NavigBar>
        </nav>
        <div className="w-full mx-auto container">
          <div className=" h-auto bg-gradient-to-b from bg-blue-10 to bg-white ">
            <div className="  items-center mb-20 px-16 py-7  ">            
              <div class="grid grid-flow-row place-content-center text-center gap-6 ">
                <HText classs=" mt-10 mb-16 font-extrabold text-center text-5xl md:text-7xl">
                  SIMPLE PRICING
                </HText>
                <HText classs="mb-8 ">
                  No contracts. No surprise fees. Register now or try out the
                  Webbber free trial so you’re <br />
                  absolutely sure that it’s the right fit for your frontend team
                </HText>
                <div className=" mb-20 gap-2 md:gap-0  md:w-1/3 place-self-center grid grid-flow-col ">
                  <WebButton className="rounded-sm px-4 py-2 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
                    Monthly
                  </WebButton>
                  <WebButton className=" rounded-sm px-4 py-2 bg-cyan-100 text-cyan-800">
                    Yearly
                  </WebButton>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-flow-col md:grid-cols-4 gap-6 md:gap-6 ">
                <div className="grid grid-flow-row  gap-4 md:text-lg  -ml-10 md:ml-0 text-sm md:gap-6 ">
                  <HText classs="text-gray-700  "></HText>
                  <HText classs="text-gray-700 h-20 md:h-20"></HText>
                  <HText classs="text-gray-700 ">All limited links</HText>
                  <HText classs=" text-gray-700">Own analytics platform</HText>
                  <HText classs=" text-gray-700">Chat support</HText>
                  <HText classs=" text-gray-700">Number of users</HText>
                  <HText classs=" text-gray-700">Optimize hashtags</HText>
                  <HText classs=" text-gray-700">Account manager</HText>
                  <HText classs=" text-gray-700">Number of articles</HText>
                  <HText classs=" text-gray-700">Satisfaction guaranteed</HText>
                  <HText classs=" h-12"></HText>
                </div>

                <div className="grid place-content-center text-center  grid-flow-row mb-10 md:mb-0 gap-11 md:gap-10 ">
                  <HText classs="text-gray-700 w-32 md:w-auto font-bold text-lg md:text-3xl ">
                    {" "}
                    Starter
                  </HText>
                  <HText classs="font-bold md:text-2xl">
                    $20{" "}
                    <span className="inline-block">
                      <p className="text-gray-700 text-sm">/month</p>
                    </span>
                  </HText>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <HText classs=" text-gray-700">1 user</HText>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7251 9.13422C10.6899 9.09905 10.67 9.05128 10.67 9.00147C10.67 8.95166 10.6899 8.9039 10.7251 8.86872L17.6724 1.92222C18.1116 1.48233 18.1111 0.76962 17.6712 0.330347C17.2313 -0.108927 16.5186 -0.108423 16.0794 0.331472L9.13287 7.27497C9.09769 7.31024 9.04993 7.33006 9.00012 7.33006C8.95031 7.33006 8.90255 7.31024 8.86737 7.27497L1.92087 0.331472C1.4816 -0.108009 0.769227 -0.108177 0.329746 0.331097C-0.109735 0.77037 -0.109903 1.48274 0.329371 1.92222L7.27512 8.86872C7.31039 8.9039 7.33021 8.95166 7.33021 9.00147C7.33021 9.05128 7.31039 9.09905 7.27512 9.13422L0.329371 16.0815C0.0452108 16.3658 -0.0656949 16.7801 0.038431 17.1683C0.142557 17.5565 0.445895 17.8597 0.834181 17.9637C1.22247 18.0676 1.63671 17.9565 1.92087 17.6722L8.86737 10.725C8.90255 10.6897 8.95031 10.6699 9.00012 10.6699C9.04993 10.6699 9.09769 10.6897 9.13287 10.725L16.0794 17.6722C16.5186 18.1117 17.231 18.1119 17.6705 17.6726C18.11 17.2333 18.1101 16.521 17.6709 16.0815L10.7251 9.13422Z"
                      fill="#F87171"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7251 9.13422C10.6899 9.09905 10.67 9.05128 10.67 9.00147C10.67 8.95166 10.6899 8.9039 10.7251 8.86872L17.6724 1.92222C18.1116 1.48233 18.1111 0.76962 17.6712 0.330347C17.2313 -0.108927 16.5186 -0.108423 16.0794 0.331472L9.13287 7.27497C9.09769 7.31024 9.04993 7.33006 9.00012 7.33006C8.95031 7.33006 8.90255 7.31024 8.86737 7.27497L1.92087 0.331472C1.4816 -0.108009 0.769227 -0.108177 0.329746 0.331097C-0.109735 0.77037 -0.109903 1.48274 0.329371 1.92222L7.27512 8.86872C7.31039 8.9039 7.33021 8.95166 7.33021 9.00147C7.33021 9.05128 7.31039 9.09905 7.27512 9.13422L0.329371 16.0815C0.0452108 16.3658 -0.0656949 16.7801 0.038431 17.1683C0.142557 17.5565 0.445895 17.8597 0.834181 17.9637C1.22247 18.0676 1.63671 17.9565 1.92087 17.6722L8.86737 10.725C8.90255 10.6897 8.95031 10.6699 9.00012 10.6699C9.04993 10.6699 9.09769 10.6897 9.13287 10.725L16.0794 17.6722C16.5186 18.1117 17.231 18.1119 17.6705 17.6726C18.11 17.2333 18.1101 16.521 17.6709 16.0815L10.7251 9.13422Z"
                      fill="#F87171"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <button className=" px-2 py-2 place-self-center  font-semibold  md:w-auto md:p-4 text-sm md:text-md  rounded-sm  bg-cyan-100 text-cyan-800">
                    Choose plan
                  </button>
                </div>
                <div className="md:hidden grid grid-flow-row gap-4 -ml-10 md:ml-0 text-sm md:text-md md:gap-6 ">
                  <HText classs="text-gray-700  "></HText>
                  <HText classs="text-gray-700 h-24 md:h-20"></HText>
                  <HText classs="text-gray-700 ">All limited links</HText>
                  <HText classs=" text-gray-700">Own analytics platform</HText>
                  <HText classs=" text-gray-700">Chat support</HText>
                  <HText classs=" text-gray-700">Number of users</HText>
                  <HText classs=" text-gray-700">Optimize hashtags</HText>
                  <HText classs=" text-gray-700">Account manager</HText>
                  <HText classs=" text-gray-700">Number of articles</HText>
                  <HText classs=" text-gray-700">Satisfaction guaranteed</HText>
                  <HText classs=" h-12"></HText>
                </div>
                <div className="bg-white w-32 md:w-auto p-2 md:p-4 mb-10 md:mb-0  grid place-content-center text-center grid-flow-row gap-11 md:gap-10 shadow-2xl  ">
                  <HText classs="text-blue-100 font-bold text-lg md:text-3xl  ">
                    {" "}
                    Pro
                  </HText>
                  <HText classs="font-bold md:text-2xl">
                    $100{" "}
                    <span className="inline-block">
                      <p className="text-gray-700 text-sm">/month</p>
                    </span>
                  </HText>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <HText classs=" text-gray-700">3 user</HText>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7251 9.13422C10.6899 9.09905 10.67 9.05128 10.67 9.00147C10.67 8.95166 10.6899 8.9039 10.7251 8.86872L17.6724 1.92222C18.1116 1.48233 18.1111 0.76962 17.6712 0.330347C17.2313 -0.108927 16.5186 -0.108423 16.0794 0.331472L9.13287 7.27497C9.09769 7.31024 9.04993 7.33006 9.00012 7.33006C8.95031 7.33006 8.90255 7.31024 8.86737 7.27497L1.92087 0.331472C1.4816 -0.108009 0.769227 -0.108177 0.329746 0.331097C-0.109735 0.77037 -0.109903 1.48274 0.329371 1.92222L7.27512 8.86872C7.31039 8.9039 7.33021 8.95166 7.33021 9.00147C7.33021 9.05128 7.31039 9.09905 7.27512 9.13422L0.329371 16.0815C0.0452108 16.3658 -0.0656949 16.7801 0.038431 17.1683C0.142557 17.5565 0.445895 17.8597 0.834181 17.9637C1.22247 18.0676 1.63671 17.9565 1.92087 17.6722L8.86737 10.725C8.90255 10.6897 8.95031 10.6699 9.00012 10.6699C9.04993 10.6699 9.09769 10.6897 9.13287 10.725L16.0794 17.6722C16.5186 18.1117 17.231 18.1119 17.6705 17.6726C18.11 17.2333 18.1101 16.521 17.6709 16.0815L10.7251 9.13422Z"
                      fill="#F87171"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <button className="overflow-hidden rounded-sm  px-2 py-1 md:p-4 text-sm md:text-md  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
                    Choose plan
                  </button>
                </div>
                <div className="md:hidden grid grid-flow-row gap-4 -ml-10 md:ml-0 text-sm md:gap-6 ">
                  <HText classs="text-gray-700  "></HText>
                  <HText classs="text-gray-700 h-20 md:h-20"></HText>
                  <HText classs="text-gray-700 ">All limited links</HText>
                  <HText classs=" text-gray-700">Own analytics platform</HText>
                  <HText classs=" text-gray-700">Chat support</HText>
                  <HText classs=" text-gray-700">Number of users</HText>
                  <HText classs=" text-gray-700">Optimize hashtags</HText>
                  <HText classs=" text-gray-700">Account manager</HText>
                  <HText classs=" text-gray-700">Number of articles</HText>
                  <HText classs=" text-gray-700">Satisfaction guaranteed</HText>
                  <HText classs=" h-12"></HText>
                </div>
                <div className="md:ml-0  grid place-content-center text-center grid-flow-row gap-11 md:gap-10 ">
                  <HText classs="text-gray-700 w-32 md:w-auto  font-bold text-lg md:text-3xl  ">
                    {" "}
                    Enterprise
                  </HText>
                  <HText classs="font-bold md:text-2xl">
                    $200{" "}
                    <span className="inline-block">
                      <p className="text-gray-700 text-sm">/month</p>
                    </span>
                  </HText>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <HText classs=" text-gray-700">Unlimited</HText>
                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>

                  <svg
                    className="place-self-center"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z"
                      fill="#27272A"
                    />
                  </svg>
                  <button className=" px-2 py-2 place-self-center  font-semibold  md:w-auto md:p-4 text-sm md:text-md  rounded-sm  bg-cyan-100 text-cyan-800">
                    Choose plan
                  </button>
                </div>
              </div>
            </div>

            <div id="faqanchor" className=" p-14  grid grid-flow-row place-content-center   bg-gray-50">
              <HText classs=" mb-16 font-extrabold  text-center text-5xl ">
                Frequently asked questions
              </HText>
              <div className="md:ml-20 place-content-center p-8   text-center md:text-left gap-6 md:gap-14 grid grid-flow-row grid-rows-3">
                <div className="place-self-center gap-4 grid md:grid-flow-col md:grid-cols-2">
                  <Faq heading="How do I use the webber for 3+ members?"></Faq>
                  <Faq heading="What does early access mean"></Faq>
                </div>
                <div className="grid md:grid-flow-col gap-4 md:grid-cols-2">
                  <Faq heading="Whats the best way to make the most out of it?"></Faq>
                  <Faq heading="How are enterprise package customers accomodated?"></Faq>
                </div>
                <div className="grid gap-4  md:gap-0 md:mt-0 md:grid-flow-col md:grid-cols-2">
                  <Faq heading="How do I use the webber for 3+ members?"></Faq>
                  <Faq heading="How do I use the webber for 3+ members?"></Faq>
                </div>
              </div>
            </div>

            <div className="md:w-full h-auto   p-10 grid md:grid-flow-col  clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50">
              <div className=" grid text-white items-center grid-flow-row text-center place-content-center ">
                <h2 className=" text-5xl place-self-center font-semibold">
                  Get results, no matter what
                </h2>
                <h3 className="mt-6 mb-10">
                  Start your free trial today, you get all the pro features for 1
                  month for you <br />
                  and your team. If you think its not for you can easily
                  unsubscribe
                </h3>
                <WebButton className="font-semibold px-4 py-2 rounded-sm place-self-center  bg-white text-cyan-800">
                  Start free trial
                </WebButton>
              </div>
            </div>
          </div>          
        </div>

        <footer>
          <Footer></Footer>
        </footer>

      </>      
    );
  }
}

export default Pricing;
