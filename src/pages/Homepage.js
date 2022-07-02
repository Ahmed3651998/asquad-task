import React, { Component } from "react";
import HText from "../components/HText";
import WebButton from "../components/WebButton";
import Header from "../components/Header";
import Features from "../components/Features";
import Cards from "../components/Cards";

const Homepage = () => {
    return (
      <div>
        <div class=" w-full bg-blue-10 h-xxl">
          <div class="  items-center  px-16 py-7  ">
            <Header></Header>
            <div class="md:place-self-center grid grid-flow-row ">
              <HText classs="mb-16 font-extrabold text-center text-3xl  md:text-7xl leading-normal">
                DEPLOY YOUR <br />
                FRONT-END
              </HText>
              <div class=" md:w-1/3 md:place-self-center place-content-center grid gap-2 md:gap-2 md:grid-flow-col ">
                <WebButton class=" rounded-sm    bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
                  Get started
                </WebButton>
                <WebButton class=" rounded-sm   bg-cyan-100 text-cyan-800">
                  Learn more
                </WebButton>
              </div>
            </div>
          </div>
        </div>
        <div class="   md:-mt-28 items-center  px-16 py-7 ">
          <div class=" h-md md:h-xxl">
            <div class="h-60 place-items-center grid grid-flow-col bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200">
              <img
                class="mt-20 w-5/6 md:w-3/4"
                src="https://i.postimg.cc/pr2JrthX/Light-Theme.png"
                alt="user"
              ></img>
            </div>
          </div>

          <div class="place-content-center    md:mt-28 grid grid-flow-row  h-auto">
            <HText classs="text-center font-extrabold place-self-center text-5xl mt-16 mb-20 leading-normal">
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
          <div class=" clear-both ">
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
        <div class=" mt-44 md:pl-0  md:w-auto -mb-20  place-content-center grid grid-flow-row  h-96">
          <HText classs="font-extrabold text-center place-self-center text-3xl md:text-5xl mt-10 mb-20 lg:mb-10 ">
            Brands using our services
          </HText>
          <div class="md:mb-32 grid place-self-center sm:grid-flow-row sm:grid-cols-2 sm:gap-0   mb-40 gap-8 md:gap-10 grid-cols-2 lg:grid-flow-col lg:grid-rows-2">
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
          <div class="md:w-full  h-auto  p-10 grid md:grid-flow-col  clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50">
            <div class="h-60  grid grid-flow-row items-center place-content-center ">
              <h2 class="text-center text-5xl place-self-center font-semibold">
                By the numbers
              </h2>
              <h3 class="text-center mt-6 ">
                5 years, consistent quality and you get results. No matter what
              </h3>
            </div>
          </div>
          <div class="grid grid-flow-row grid-cols-2 gap-8   lg:-mt-20 sm:place-self-center sm:grid-flow-row sm:gap-8 sm:grid-cols-2 lg:grid-flow-col lg:grid-rows-1 lg:grid-cols-4 items-center place-self-center ">
            <Cards heading="40+" parag="Happy Clients"></Cards>
            <Cards heading="540+" parag="Projects Completed"></Cards>
            <Cards heading="300" parag="Dedicated Members"></Cards>
            <Cards heading="25+" parag="Awards Won"></Cards>
          </div>
        </div>
        <div class="mt-24 md:mb-20 text-center grid grid-flow-row  h-96">
          <HText classs=" font-extrabold place-self-center px-8 text-2xl md:text-5xl md:mb-10 ">
            Build the next big thing and ship to <br />
            market faster
          </HText>
          <WebButton class="place-self-center rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
            Download Now
          </WebButton>
        </div>

        <footer class="bg-gray-100 p-10 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pt-6  ">
          <div class="grid grid-flow-row gap-8">
            <div class="block">
              <svg
                width="74"
                height="43"
                viewBox="0 0 74 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.4275 4.86251C65.5951 2.02921 61.8254 0.32942 57.8277 0.0830343C53.8303 -0.163352 49.8806 1.06066 46.7221 3.52471C43.8379 1.2826 40.2895 0.0651642 36.6371 0.0644561C32.9846 0.063748 29.436 1.27981 26.5509 3.5208C23.2605 0.937403 19.1087 -0.291964 14.9431 0.0836796C10.7775 0.459321 6.91226 2.41165 4.13651 5.54207C1.36075 8.67251 -0.11621 12.745 0.0071491 16.928C0.130508 21.1111 1.84488 25.0894 4.80028 28.0506L14.8933 38.1509C14.9012 38.1585 14.909 38.1658 14.9178 38.1737C14.9266 38.1815 14.929 38.1852 14.9346 38.1908C14.9451 38.2013 14.9564 38.2108 14.9669 38.2213C15.1273 38.3802 15.2901 38.535 15.4555 38.6858C15.5405 38.7637 15.6265 38.8393 15.713 38.9153C15.7831 38.9764 15.8537 39.037 15.9245 39.0969C18.8016 41.5361 22.4301 42.9106 26.2003 42.9888C29.9708 43.0673 33.653 41.8451 36.629 39.5274C39.7875 41.9913 43.7373 43.2154 47.7347 42.969C51.7323 42.7226 55.502 41.0228 58.3344 38.1896L68.4277 28.0906C71.5017 25.008 73.2279 20.8312 73.2279 16.4765C73.2279 12.1219 71.5014 7.94513 68.4275 4.86251ZM36.6339 4.34235C39.0336 4.34081 41.3798 5.05166 43.3755 6.38489C45.3714 7.71813 46.9268 9.61381 47.8453 11.832C48.7639 14.0502 49.004 16.4913 48.5355 18.8461C48.0669 21.201 46.9107 23.3638 45.2131 25.0608L36.6339 33.6447L28.0545 25.0608C26.3569 23.3638 25.2006 21.2009 24.7321 18.8461C24.2635 16.4912 24.5037 14.0501 25.4222 11.8319C26.3408 9.61369 27.8964 7.718 29.8921 6.38479C31.888 5.05159 34.2342 4.34076 36.6339 4.34235ZM14.4074 26.5759C14.4031 24.9809 14.7149 23.4011 15.3249 21.9276C15.9349 20.4541 16.831 19.1164 17.9612 17.9917L20.2446 15.707C20.1341 17.9907 20.5024 20.2723 21.326 22.4051C22.1495 24.5377 23.41 26.4744 25.0265 28.0906L33.4302 36.4993C31.6175 37.7696 29.4912 38.5178 27.2828 38.6621C25.0746 38.8063 22.8689 38.3414 20.9066 37.3177C18.9442 36.2937 17.3004 34.7508 16.1543 32.8564C15.0082 30.9623 14.4038 28.7895 14.4069 26.5751L14.4074 26.5759ZM7.82783 25.0205C5.68036 22.8723 4.41615 19.9963 4.28494 16.9608C4.15373 13.9253 5.16504 10.9508 7.11911 8.62513C9.07318 6.29941 11.8279 4.79153 14.8391 4.39933C17.8504 4.00713 20.8991 4.75917 23.3831 6.50684L14.9332 14.9617C13.4041 16.4833 12.1919 18.2933 11.3666 20.2869C10.5414 22.2805 10.1195 24.418 10.1254 26.5759C10.1254 26.8306 10.1314 27.0843 10.1433 27.3373L7.82783 25.0205ZM46.7277 38.7153C44.2488 38.7212 41.8286 37.9615 39.7973 36.5399L48.2423 28.0906C49.8588 26.4744 51.1191 24.5377 51.9427 22.405C52.7662 20.2723 53.1346 17.9907 53.0242 15.707L55.3076 17.9917C57.0045 19.6896 58.1597 21.8527 58.6278 24.2076C59.0961 26.5624 58.8557 29.0034 57.9372 31.2216C57.0189 33.4399 55.4637 35.3358 53.4685 36.6696C51.4731 38.0035 49.1274 38.7153 46.7277 38.7153ZM65.3999 25.0608L63.1248 27.3373C63.1363 27.0845 63.1421 26.8308 63.1426 26.5759C63.1485 24.418 62.7266 22.2805 61.9014 20.2869C61.0761 18.2933 59.8637 16.4833 58.3347 14.9617L49.8906 6.51246C52.379 4.77984 55.4256 4.04218 58.4304 4.4447C61.4352 4.84719 64.1806 6.36072 66.126 8.68725C68.0713 11.0138 69.0756 13.9847 68.9412 17.0151C68.8069 20.0456 67.5436 22.9158 65.3999 25.0608Z"
                  fill="#27272A"
                />
              </svg>
              <HText classs="mt-2 font-extrabold text-1xl">WEBBER</HText>
            </div>
            <div>
              <HText classs="text-gray-500">Copyright © 2021 WEBBER.</HText>
              <HText classs="mt-2 text-gray-500">All rights reserved</HText>
            </div>
            <div class="mb-4 md:mb-0">
              <svg
                width="80"
                height="32"
                viewBox="0 0 80 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z"
                  fill="#27272A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M70.6677 10.4995C71.4021 10.701 71.9804 11.2948 72.1767 12.0488C72.5333 13.4153 72.5333 16.2666 72.5333 16.2666C72.5333 16.2666 72.5333 19.1178 72.1767 20.4845C71.9804 21.2385 71.4021 21.8322 70.6677 22.0338C69.3369 22.4 64 22.4 64 22.4C64 22.4 58.6631 22.4 57.3322 22.0338C56.5978 21.8322 56.0195 21.2385 55.8232 20.4845C55.4667 19.1178 55.4667 16.2666 55.4667 16.2666C55.4667 16.2666 55.4667 13.4153 55.8232 12.0488C56.0195 11.2948 56.5978 10.701 57.3322 10.4995C58.6631 10.1333 64 10.1333 64 10.1333C64 10.1333 69.3369 10.1333 70.6677 10.4995ZM62.4 13.8666V19.1999L66.6667 16.5333L62.4 13.8666Z"
                  fill="#27272A"
                />
              </svg>
            </div>
          </div>
          <div class="grid lg:grid-flow-col gap-18">
            <div class="grid grid-flow-col md:grid-flow-col gap-10 md:gap-20">
              <div class="grid grid-flow-row gap-2 md:gap-4 ">
                <HText classs="text-gray-700 text-xl">Company</HText>
                <HText classs=" text-gray-500">About us</HText>
                <HText classs=" text-gray-500">Blog</HText>
                <HText classs=" text-gray-500">Contact us</HText>
                <HText classs=" text-gray-500">Pricing</HText>
                <HText classs=" text-gray-500">Testimonials</HText>
              </div>

              <div class="grid grid-flow-row gap-2 w-auto md:w-40 ">
                <HText classs="text-gray-700 text-xl">Support</HText>
                <HText classs=" text-gray-500">Help center</HText>
                <HText classs=" text-gray-500">Terms of service</HText>
                <HText classs=" text-gray-500">Legal</HText>
                <HText classs=" text-gray-500">Privacy policy</HText>
                <HText classs=" text-gray-500">Status</HText>
              </div>
            </div>
            <div class=" lg:mt-0 md:mt-5 mt-10 grid grid-flow-row place-content-start gap-4 ">
              <HText classs="text-gray-700 text-xl">Get Updates and more</HText>
              <div class="grid grid-flow-col place-content-center md:gap-6 ">
                <input
                  type="text"
                  class="rounded-md w-full h-2 md:w-auto p-6 md:h-4"
                  placeholder="Your email address"
                ></input>
                <button class="place-self-center p-3 rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
                  <i>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.0845 11.9998C23.0845 12.2879 22.9195 12.5506 22.6599 12.6755L8.34097 19.5698C8.0639 19.7032 7.73347 19.654 7.50734 19.4456C7.28121 19.2372 7.20521 18.9119 7.3156 18.6249L9.8637 11.9998L7.3156 5.37474C7.20521 5.08772 7.28121 4.7624 7.50734 4.554C7.73347 4.3456 8.0639 4.29635 8.34097 4.42976L22.6599 11.324C22.9195 11.449 23.0845 11.7117 23.0845 11.9998ZM11.1824 12.7498L9.39472 17.3977L19.048 12.7498H11.1824ZM19.048 11.2498L9.39472 6.60193L11.1824 11.2498H19.048Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Homepage;
