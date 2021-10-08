import React from "react"
import SectionComponent from "components/SectionComponent"
import NewsComponent from "components/NewsComponent"

const textList = [
  {
    author: "By Wendy Wei",
    url: "0001.jpg",
    title: "China's successful elimination of malaria, and its global impact",
    content:
      "Senior Program Officer, Malaria",
  },
  {
    author: "By Anita Zaidi",
    url: "0003.jpg",
    title: "Geographically distributed manufacturing capacity is needed for improved global health security",
    content:
      "President, Gender Equality and Director, Vaccine Development and Surveillance, and Director, EDD, Bill Melinda Gates Foundation",
  },
  {
    author: "By Cheikh Oumar Seydi",
    url: "0004.jpg",
    title: "As COVID-19 cases surge, African institutions lead response efforts",
    content:
      "Director, Africa, Bill & Melinda Gates Foundation",
  },
  {
    author: "By Mark Suzman",
    url: "0002.jpg",
    title: "Work in progress: An update on our DEII journey",
    content:
      "Chif Executive Officer, Bill & MElinda Gates Foundation",
  }
]
const text =
  "Founded in 2021, Impactful Capital helps entrepreneurs launch projects that have a positive impact on people and planet."

export default function AboutSection() {
  return (
    <>
      <SectionComponent id="about-us" _background="bg-dark min-h-screen ">
        <div className="flex flex-wrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {(text.split(" ") ?? [])?.map((wordContent, wordIndex) => (
            <div
              key={wordIndex}
              className="p-6 text-white"
              data-aos="fade-zoom-in"
              data-aos-duration={1000}
              data-aos-delay={wordIndex * 300}
            >
              {wordContent}
            </div>
          ))}
        </div>
      </SectionComponent>
      <SectionComponent _background="bg-white min-h-screen pt-40">
        <div className="text-4xl text-black font-bold">Latest updates</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-10 mb-36">
          {textList.map((topic, i) => {
            return (
              <div
                className="pt-40"
                key={i}
              >
                <NewsComponent data = {topic} />
              </div>
            )
          })}
        </div>
      </SectionComponent>
    </>
  )
}
