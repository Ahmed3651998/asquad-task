import React, { Component } from "react"; 
//import Header from "../components/Header"; 
import HText from "../components/HText"; 
import Studies from "../components/Studies"; 
import NavigBar from "../components/NavigBar"; 
import Footer from "../components/Footer"; 

class CaseStudiesInner extends Component {
    render() {
        return (
          <>
            <nav>
              <NavigBar></NavigBar>
            </nav>
            <div id="casestudyinner" class="bg-blue-10">
              <div class="mx-auto container w-full">
                  <div class="items-center px-16 py-7 ">
                      <div class="mt-20 grid md:grid-flow-col md:grid-cols-2 w-full justify-center">
                          <div class="md:place-self-center grid grid-flow-row">
                              <HText classs="text-gray-600 text-md">Kanban Software</HText>
                              <HText classs="font-extrabold text-4xl">Trello x Webber</HText>
                              <HText classs=" text-gray-600 text-md">
                                  Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software
                              </HText>
                              <div class="mt-8 grid md:grid-cols-2 gap-3 grid-flow-row ">
                                  <HText>Industry: Technology</HText>
                                  <HText>Since: 2018</HText>
                                  <HText>Use case: Developer operations</HText>
                                  <HText>Package: Enterprise+</HText>
                              </div>
                              <div class="mt-10 grid gap-3 grid-flow-row ">
                                  <HText classs="font-bold text-3xl">The details</HText>
                                  <HText>
                                      It is a long established fact that a reader will be distracted by the readable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                      look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                                      repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
                                      looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                  </HText>
                                  <img src="https://i.postimg.cc/nVsNPShb/Rectangle-44.png" alt="user"></img>
                                  <HText classs="font-semibold text-gray-700">
                                      Breakdown of milestones
                                  </HText>
                                  <HText>
                                      - Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie.
                                      <br />- Donec iaculis erat in vulputate venenatis.
                                      <br />- Vestibulum et velit et metus commodo iaculis.
                                      <br />- Sed et urna a felis accumsan commodo vel vel nibh.
                                      <br />- Praesent sollicitudin nulla non sollicitudin varius.
                                      <br />- Integer convallis orci sed diam volutpat feugiat.
                                      <br />- Donec posuere arcu non semper maximus.
                                  </HText>
                                  <img src="https://i.postimg.cc/jSh17GZN/Rectangle-45.png" alt="user"></img>
                                  <HText>
                                      It is a long established fact that a reader will be distracted by the readable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                                      look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                                      repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
                                      looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                  </HText>
                              </div>
                          </div>
                          <div class=" overflow-hidden float-right w-full">
                              <img class="mb-8 float-right" src="https://i.postimg.cc/tC3Cn4Pg/Project-Cover-6.png" alt="user"></img>
                              <div class="text-white h-auto w-full p-4 md:p-10 grid grid-flow-row  gap-4 clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50">
                                  <HText classs="font-medium md:w-auto text-lg">
                                      Get Webber for your organization
                                  </HText>
                                  <HText classs="text-sm md:w-auto">
                                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
                                  </HText>
                                  <div class="grid grid-flow-col gap-2">
                                      <button class="place-self-center rounded-sm p-2  md:py-2 md:px-4 m  text-blue-100 bg-white ">
                                          Start trial
                                      </button>
                                      <button class="place-self-center rounded-sm p-1   text-white border-2 border-white bg-transparent ">
                                          Contact sales
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="overflow-x-auto  md:p-4 bg-gray-50">
                      <HText classs="px-10 mtext-xl font-bold">More case studies</HText>
                      <div class="grid md:grid-flow-col place-content-center gap-6 ">
                          <Studies src="https://i.postimg.cc/CKcFPp2j/Project-Cover.png" sub="Technology - SaaS" heading="Adobe Systems Inc" desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
                          <Studies src="https://i.postimg.cc/NMtzHKDD/Project-Cover.png" sub="Kanban Software" heading="Trello" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
                          <Studies src="https://i.postimg.cc/QxgJyjQ9/Project-Cover-1.png" sub="Technology - SaaS" heading="Gutkowski, Schuppe and Pagac" desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
                          <Studies src="https://i.postimg.cc/prfz4BFb/Project-Cover-2.png" sub="Airline" heading="Swiss Airline" desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"></Studies>
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
} export default CaseStudiesInner;