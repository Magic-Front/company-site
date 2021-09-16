import React from 'react'
import TitleComponent from './TitleComponent'
import TopicComponent from './TopicComponent'
const titles=[
  ['We', 'help', 'startups'],
  ['and', 'digital', 'agencies'],
  ['launch', 'projects', 'on'],
  ['time,', 'with', 'no', 'pain.']
]
const topics=[
  {
    header: 'Ruby',
    body: 'We specialize in Ruby on Rails programming with frontend part done with React (with Redux), Backbone, SASS and PostCSS, ES2015 and СoffeeScript, Gulp, Webpack. Also, we do fancy stuff, like Flash, Unity, WebGL, and Canvas.'
  },
  {
    header: '24/7',
    body: 'All our team members work in-house. To better interact with our clients from different parts of the world, we form a team with an individual schedule for every project. We’ll make sure to have several working hours overlap with your team wherever you are.'
  },
  {
    header: 'Scrum',
    body: 'We use scrum methodology and task tracking tools. You know exactly which part of the project is already done and what we are doing right now. No risk for the deadline.'
  },
  {
    header: 'Long-term',
    body: 'We can save a project with a fast-approaching deadline or develop a project from scratch. Majority of our clients have worked with us for many years.  90% of our clients choose to work with us again, for 75% of them we have done 5 or more projects.'
  }
]
export default function AboutSection() {
  return (
    <>
      <TitleComponent titles={titles}/>
      <TopicComponent topics={topics}/>
    </>
  )
}
