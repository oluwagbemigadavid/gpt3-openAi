import React from 'react'
import { Feature } from '../../components'
import './what.css'

const What = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature 
        title="What is GPT3" 
        text="Yet bed any for travelling assistance indulgence unpleasing. Not though all exercise blessing.
        Indulgence way everything joy alternation bojsterous the attachment.Indulgence way everything joy alternation bojsterous the attachment. Party we years to order allow asked of. Party we years to order asked of." 
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature 
        title="Chatbots" 
        text="Yet bed angence unpleasing. Not though all exercise blessing.
           bojsterous the attachment. Party we years to order allow asked of." 
        />
        <Feature 
        title="Knowledgebase" 
        text="Yet bed any for travelling assistance indulgence unpleasing. Not though all exercise blessing.
           Indulgence way everything joy alternation bojsterous the attachment. Party we years to order allow asked of." 
        />
        <Feature 
        title="Education" 
        text="Yet bed any for travelling assistance indulgence unpleasing. Not though all exercise blessing.
           Indulgence way everything joy alternation bojsterous the attachment. Party we years to order allow asked of." 
        />
      </div>
    </div>
  )
}

export default What