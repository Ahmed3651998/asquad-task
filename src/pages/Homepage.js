//import React, { Component } from "react";
import HText from "../components/HText";
import WebButton from "../components/WebButton";
//import Header from "../components/Header";
import Features from "../components/Features";
import Cards from "../components/Cards";
import BDCards from "../components/BDCards";
import NavigBar from "../components/NavigBar";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
      <>
        <nav className="w-full mx-auto container">
          <NavigBar></NavigBar>
        </nav>
        <div class = "bg-blue-10">
          <div class="mx-auto container w-full ">
            <div class="items-center px-16 py-7  ">            
              <div class="md:place-self-center grid grid-flow-row ">
                <HText classs="mt-10 mb-16 font-extrabold text-center text-3xl sm:text-7xl md:text-7xl leading-normal">
                  DEPLOY YOUR <br />
                  FRONT-END
                </HText>
                <div class=" md:w-1/3 md:place-self-center place-content-center grid gap-2 md:gap-2 md:grid-flow-col ">
                  <WebButton class=" rounded-sm  px-4 py-2  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
                    Get started
                  </WebButton>
                  <WebButton class=" rounded-sm  px-4 py-2 bg-cyan-100 text-cyan-800">
                    Learn more
                  </WebButton>
                </div>
              </div>
            </div>
          </div>
          <div class="  items-center  px-16 py-7 ">
            <div class=" container mx-auto xs:h-xs sm:h-sm md:h-md lg:h-lg xl:h-xl">
              <div class="h-60 place-items-center grid grid-flow-col bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200">
                <img
                  class="mt-20 w-5/6 md:w-3/4"
                  src="https://i.postimg.cc/pr2JrthX/Light-Theme.png"
                  alt="user"
                ></img>
              </div>
            </div>

            <div class="lg:mt-20 mx-auto container place-content-center grid grid-flow-row ">
              <HText classs="text-center font-extrabold place-self-center text-7xl mt-16 mb-20 leading-normal">
                Tailor-made features
              </HText>
              <div class="place-content-center  grid md:grid-flow-column md:grid-cols-3 gap-10 md:gap-0 ">
                <Features heading="Robust workflow">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
                      fill="#A5F3FC"
                    />
                    <path
                      d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
                      fill="#22D3EE"
                    />
                    <path
                      d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
                      fill="#0EA5E9"
                    />
                  </svg>
                </Features>
                <Features heading="Flexibility">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33333 1.33337H30.6667L26.6667 9.33337H1.33333L5.33333 1.33337Z"
                      fill="#22D3EE"
                    />
                    <path
                      d="M5.33333 12H30.6667L26.6667 20H1.33333L5.33333 12Z"
                      fill="#0EA5E9"
                    />
                    <path
                      d="M5.33333 22.6667H30.6667L26.6667 30.6667H1.33333L5.33333 22.6667Z"
                      fill="#A5F3FC"
                    />
                  </svg>
                </Features>
                <Features heading="User friendly">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6667 8.00004V2.66671C30.6667 2.31309 30.5262 1.97395 30.2762 1.7239C30.0261 1.47385 29.687 1.33337 29.3333 1.33337H2.66668C2.31305 1.33337 1.97392 1.47385 1.72387 1.7239C1.47382 1.97395 1.33334 2.31309 1.33334 2.66671V8.00004H30.6667Z"
                      fill="#0EA5E9"
                    />
                    <path
                      d="M1.33334 10.6667V29.3334C1.33334 29.687 1.47382 30.0262 1.72387 30.2762C1.97392 30.5263 2.31305 30.6667 2.66668 30.6667H9.33334V10.6667H1.33334Z"
                      fill="#A5F3FC"
                    />
                    <path
                      d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z"
                      fill="#22D3EE"
                    />
                  </svg>
                </Features>
                <Features heading="Multiple layouts">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 32H16C15.6464 32 15.3072 31.8595 15.0572 31.6095C14.8071 31.3594 14.6667 31.0203 14.6667 30.6667V28C14.6667 27.6464 14.8071 27.3073 15.0572 27.0572C15.3072 26.8072 15.6464 26.6667 16 26.6667H28C28.3536 26.6667 28.6928 26.8072 28.9428 27.0572C29.1928 27.3073 29.3333 27.6464 29.3333 28V30.6667C29.3333 31.0203 29.1928 31.3594 28.9428 31.6095C28.6928 31.8595 28.3536 32 28 32Z"
                      fill="#A5F3FC"
                    />
                    <path
                      d="M28 0H3.99999C3.64637 0 3.30723 0.140475 3.05718 0.390523C2.80713 0.640572 2.66666 0.979711 2.66666 1.33333V4C2.66666 4.35362 2.80713 4.69276 3.05718 4.94281C3.30723 5.19286 3.64637 5.33333 3.99999 5.33333H28C28.3536 5.33333 28.6928 5.19286 28.9428 4.94281C29.1929 4.69276 29.3333 4.35362 29.3333 4V1.33333C29.3333 0.979711 29.1929 0.640572 28.9428 0.390523C28.6928 0.140475 28.3536 0 28 0Z"
                      fill="#0EA5E9"
                    />
                    <path
                      d="M28 8H3.99999C3.64637 8 3.30723 8.14047 3.05718 8.39052C2.80713 8.64057 2.66666 8.97971 2.66666 9.33333V22.6667C2.66666 23.0203 2.80713 23.3594 3.05718 23.6095C3.30723 23.8595 3.64637 24 3.99999 24H28C28.3536 24 28.6928 23.8595 28.9428 23.6095C29.1929 23.3594 29.3333 23.0203 29.3333 22.6667V9.33333C29.3333 8.97971 29.1929 8.64057 28.9428 8.39052C28.6928 8.14047 28.3536 8 28 8Z"
                      fill="#22D3EE"
                    />
                  </svg>
                </Features>
                <Features heading="Better components">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 1.33331H2.66667C2.31304 1.33331 1.9739 1.47379 1.72386 1.72384C1.47381 1.97388 1.33333 2.31302 1.33333 2.66665V29.3333C1.33333 29.6869 1.47381 30.0261 1.72386 30.2761C1.9739 30.5262 2.31304 30.6666 2.66667 30.6666H6.66667V1.33331Z"
                      fill="#A5F3FC"
                    />
                    <path
                      d="M9.33333 30.6666H22.6667V1.33331H9.33333V30.6666ZM16 25.3333C15.6464 25.3333 15.3072 25.1928 15.0572 24.9428C14.8071 24.6927 14.6667 24.3536 14.6667 24C14.6667 23.6464 14.8071 23.3072 15.0572 23.0572C15.3072 22.8071 15.6464 22.6666 16 22.6666C16.3536 22.6666 16.6928 22.8071 16.9428 23.0572C17.1929 23.3072 17.3333 23.6464 17.3333 24C17.3333 24.3536 17.1929 24.6927 16.9428 24.9428C16.6928 25.1928 16.3536 25.3333 16 25.3333ZM16 6.66665C16.3536 6.66665 16.6928 6.80712 16.9428 7.05717C17.1929 7.30722 17.3333 7.64636 17.3333 7.99998C17.3333 8.3536 17.1929 8.69274 16.9428 8.94279C16.6928 9.19284 16.3536 9.33331 16 9.33331C15.6464 9.33331 15.3072 9.19284 15.0572 8.94279C14.8071 8.69274 14.6667 8.3536 14.6667 7.99998C14.6667 7.64636 14.8071 7.30722 15.0572 7.05717C15.3072 6.80712 15.6464 6.66665 16 6.66665ZM16 14.6666C16.3536 14.6666 16.6928 14.8071 16.9428 15.0572C17.1929 15.3072 17.3333 15.6464 17.3333 16C17.3333 16.3536 17.1929 16.6927 16.9428 16.9428C16.6928 17.1928 16.3536 17.3333 16 17.3333C15.6464 17.3333 15.3072 17.1928 15.0572 16.9428C14.8071 16.6927 14.6667 16.3536 14.6667 16C14.6667 15.6464 14.8071 15.3072 15.0572 15.0572C15.3072 14.8071 15.6464 14.6666 16 14.6666Z"
                      fill="#22D3EE"
                    />
                    <path
                      d="M29.3333 1.33331H25.3333V30.6666H29.3333C29.687 30.6666 30.0261 30.5262 30.2761 30.2761C30.5262 30.0261 30.6667 29.6869 30.6667 29.3333V2.66665C30.6667 2.31302 30.5262 1.97388 30.2761 1.72384C30.0261 1.47379 29.687 1.33331 29.3333 1.33331Z"
                      fill="#0EA5E9"
                    />
                  </svg>
                </Features>
                <Features heading="Well organized">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.208 0.175992L0.781342 6.91599C0.683781 6.96073 0.601133 7.03256 0.543236 7.12294C0.485339 7.21331 0.454633 7.31842 0.454773 7.42575C0.454914 7.53308 0.485894 7.63811 0.544027 7.72833C0.602161 7.81856 0.684997 7.89017 0.782675 7.93466L15.3227 14.6253C15.752 14.8227 16.248 14.8227 16.6773 14.6253L31.2173 7.93466C31.3151 7.8903 31.398 7.81879 31.4563 7.72865C31.5145 7.6385 31.5456 7.53351 31.5459 7.42618C31.5462 7.31885 31.5156 7.2137 31.4578 7.12325C31.4001 7.0328 31.3175 6.96086 31.22 6.91599L16.792 0.175992C16.5441 0.0601174 16.2737 6.10352e-05 16 6.10352e-05C15.7263 6.10352e-05 15.456 0.0601174 15.208 0.175992Z"
                      fill="#22D3EE"
                    />
                    <path
                      d="M31.22 15.568L28.24 14.176C28.0266 14.0763 27.794 14.0243 27.5584 14.0236C27.3229 14.0229 27.09 14.0735 26.876 14.172L16.6773 18.8653C16.4649 18.963 16.2338 19.0136 16 19.0136C15.7662 19.0136 15.5351 18.963 15.3227 18.8653L5.12267 14.172C4.90885 14.0737 4.67621 14.0232 4.4409 14.0239C4.20559 14.0246 3.97324 14.0765 3.76001 14.176L0.780006 15.568C0.682503 15.6128 0.599949 15.6848 0.54217 15.7752C0.48439 15.8657 0.453823 15.9708 0.454103 16.0782C0.454384 16.1855 0.485502 16.2905 0.543754 16.3806C0.602006 16.4708 0.684937 16.5423 0.782674 16.5866L15.3227 23.276C15.535 23.3742 15.7661 23.4251 16 23.4251C16.2339 23.4251 16.465 23.3742 16.6773 23.276L31.2173 16.5866C31.3151 16.5423 31.398 16.4708 31.4563 16.3806C31.5145 16.2905 31.5456 16.1855 31.5459 16.0782C31.5462 15.9708 31.5156 15.8657 31.4578 15.7752C31.4001 15.6848 31.3175 15.6128 31.22 15.568Z"
                      fill="#A5F3FC"
                    />
                    <path
                      d="M31.22 24.144L28.24 22.752C28.0266 22.6522 27.794 22.6002 27.5585 22.5995C27.3229 22.5989 27.09 22.6495 26.876 22.748L16.6774 27.44C16.4649 27.5376 16.2338 27.5882 16 27.5882C15.7662 27.5882 15.5351 27.5376 15.3227 27.44L5.12269 22.7466C4.90887 22.6484 4.67623 22.5978 4.44091 22.5985C4.2056 22.5992 3.97326 22.6511 3.76002 22.7506L0.780019 24.144C0.682891 24.189 0.600708 24.2609 0.543205 24.3512C0.485701 24.4415 0.455288 24.5464 0.455568 24.6535C0.455849 24.7605 0.486813 24.8653 0.544789 24.9553C0.602765 25.0453 0.685324 25.1168 0.782686 25.1613L15.3227 31.852C15.752 32.0493 16.248 32.0493 16.6774 31.852L31.2174 25.1613C31.3147 25.1168 31.3973 25.0453 31.4553 24.9553C31.5132 24.8653 31.5442 24.7605 31.5445 24.6535C31.5448 24.5464 31.5143 24.4415 31.4568 24.3512C31.3993 24.2609 31.3172 24.189 31.22 24.144Z"
                      fill="#0EA5E9"
                    />
                  </svg>
                </Features>
              </div>
            </div>
            <div class="container mx-auto clear-both ">
              <div class="  -mb-20  place-content-center grid grid-flow-row  h-96">
                <HText classs="text-center font-extrabold place-self-center text-5xl ">
                  How it works
                </HText>
              </div>
              <div class="lg:float-right mb-20 sm:place-content-center w-auto md:mt-0 ">
                <img
                  class="sm:place-self-center"
                  src="https://i.postimg.cc/fTMMzq82/Group-256.png"
                  alt="user"
                />
              </div>
              <div class=" md:mt-36 mt-20 lg:float-left lg:w-5/12">
                <HText classs=" font-bold  text-4xl ">Sign Up</HText>
                <p class="mt-6 mb-6 text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                  vitae a consectetur dolor. Elementum habitant urna, ac quis
                  laoreet urna purus. Aliquam at est vel auctor rhoncus et. Sit ac
                  enim, malesuada mattis. Dignissim nibh augue posuer
                </p>
                <WebButton class=" mt-4 mb-10 md:mb-0 float-left rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
                  Learn more
                </WebButton>
                <svg
                  class="mt-2 hidden md:grid  md:float-right"
                  width="90"
                  height="60"
                  viewBox="0 0 107 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="76.5" cy="30" rx="30.5" ry="30" fill="#0891B2" />
                  <path
                    d="M87.8839 30.8839C88.372 30.3957 88.372 29.6043 87.8839 29.1161L79.9289 21.1612C79.4408 20.673 78.6493 20.673 78.1612 21.1612C77.673 21.6493 77.673 22.4408 78.1612 22.9289L85.2322 30L78.1612 37.0711C77.673 37.5592 77.673 38.3507 78.1612 38.8388C78.6493 39.327 79.4408 39.327 79.9289 38.8388L87.8839 30.8839ZM66 31.25L87 31.25L87 28.75L66 28.75L66 31.25Z"
                    fill="white"
                  />
                  <path
                    d="M0.292893 30.2929C-0.0976314 30.6834 -0.0976315 31.3166 0.292892 31.7071L6.65685 38.0711C7.04738 38.4616 7.68054 38.4616 8.07107 38.0711C8.46159 37.6805 8.46159 37.0474 8.07107 36.6569L2.41421 31L8.07107 25.3431C8.46159 24.9526 8.46159 24.3195 8.07107 23.9289C7.68054 23.5384 7.04738 23.5384 6.65686 23.9289L0.292893 30.2929ZM22 30L1 30L1 32L22 32L22 30Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mt-20 ">
            <div class="lg:w-full h-auto  p-10 grid lg:grid-flow-col  clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50">
              <div class="place-self-center sm:mb-0   lg:ml-10  lg:w-9/12 md:p-14 text-white block">
                <img
                  class="place-self-center ml-3 md:ml-0 md:float-left md:mr-6 w-16 h-16 rounded-full "
                  src="https://i.postimg.cc/wvbDdP1N/Picture.png"
                  alt="user"
                />
                <div class="lg:w-40 place-self-center lg:place-content-start grid-flow-row grid">
                  <h2 class=" lg:float-right font-semibold">Jenny Wilson</h2>
                  <h3 class="lg:float-right">Vice President</h3>
                </div>
              </div>

              <div class="lg:w-11/12">
                <svg
                  class="mt-6 -mb-8 sm:-mb-10  sm:-mt-16   lg:mb-8 w-8 lg:h-3/4 lg:w-auto md:float-left"
                  width="50"
                  height="98"
                  viewBox="0 0 50 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.264 34.6001V46.1921H11.528V38.7041C11.528 35.9201 12.032 33.4001 13.04 31.1441C14.048 28.8881 15.728 26.5601 18.08 24.1601L22.328 27.5441C19.928 29.9921 18.464 32.3441 17.936 34.6001H23.264ZM38.312 34.6001V46.1921H26.576V38.7041C26.576 35.9201 27.08 33.4001 28.088 31.1441C29.096 28.8881 30.776 26.5601 33.128 24.1601L37.376 27.5441C34.976 29.9921 33.512 32.3441 32.984 34.6001H38.312Z"
                    fill="white"
                  />
                </svg>
                <p class="lg:mt-20 text-md text-white">
                  {" "}
                  Eos enim quo est necessitatibus nobis consectetur rerum qui
                  dolores. Quia commodi similique est sed aut. Aspernatur voluptas
                  nisi tenetur voluptates iusto debitis ex voluptatem odit.
                  Repudiandae et et quod et. Enim sit delectus numquam. Molestiae
                  aut voluptatem. Quia commodi similique est sed aut. Aspernatur
                  voluptas nisi tenetur voluptates iusto debitis.
                </p>
              </div>
            </div>
          </div>
          <div class="container mx-auto mt-44  mb-20  place-content-center grid grid-flow-row  h-96">
            <HText classs="font-extrabold text-center place-self-center text-3xl md:text-5xl mt-10 mb-20 lg:mb-10 ">
              Brands using our services
            </HText>
            <div class=" grid place-self-center sm:grid-flow-row mb-40 gap-8 md:gap-10 grid-cols-2 lg:grid-flow-col lg:grid-rows-2">
              <Cards img="https://i.postimg.cc/tC3rNpGk/Group.png"></Cards>
              <Cards img="https://i.postimg.cc/W46fpVXt/Walmart-Logo.png"></Cards>
              <Cards img="https://i.postimg.cc/W31S2kdf/Vector.png"></Cards>
              <Cards img="https://i.postimg.cc/CKL6KttN/Fed-Ex-Logo.png"></Cards>
              <Cards img="https://i.postimg.cc/3wMkB5j8/Microsoft-Logo.png"></Cards>
              <Cards img="https://i.postimg.cc/V60grcFj/Amazon-Logo.png"></Cards>
              <Cards img="https://i.postimg.cc/X7mPQQrN/OYO-Logo-1.png"></Cards>
              <Cards img="https://i.postimg.cc/GmpkTCLH/Google-Logo.png"></Cards>
            </div>
          </div>        

          <div class="lg:mt-16 mt-40 place-content-center  text-white ">
            <div class="lg:w-full h-auto  p-10 grid lg:grid-flow-col  clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50">
              <div class="h-60  grid grid-flow-row items-center place-content-center ">
                <h2 class="text-center text-5xl place-self-center font-semibold">
                  By the numbers
                </h2>
                <h3 class="text-center mt-6 ">
                  5 years, consistent quality and you get results. No matter what
                </h3>
              </div>
            </div>
            <div class="flex justify-center gap-x-28 items-center w-full md:flex-row flex-col space-y-4">
              <BDCards heading="40+" parag="Happy Clients"></BDCards>
              <BDCards heading="540+" parag="Projects Completed"></BDCards>
              <BDCards heading="300" parag="Dedicated Members"></BDCards>
              <BDCards heading="25+" parag="Awards Won"></BDCards>
            </div>
          </div>
          <div class="mt-24 md:mb-20 text-center grid grid-flow-row  h-96">
            <HText classs=" font-extrabold place-self-center px-8 text-2xl md:text-5xl md:mb-10 ">
              Build the next big thing and ship to <br />
              market faster
            </HText>
            <WebButton class="place-self-center rounded-sm px-4 py-2 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
              Download Now
            </WebButton>
          </div>               
        </div>
        <footer>
            <Footer></Footer>
        </footer>  
      </>
    );
}

export default Homepage;
