import './Accordion.css';
import { useState } from 'react';
/**
 *
 * @param {topics} An array of objects. Each object will contain an id, a header and corresponding content for the Accordion panel.
 */

export default function Accordion ({topics}) {
  const [openPanel, setOpenPanel] = useState(null);

  return (
    <div className="all-panels">
      {topics.map((topic)=> (
        <Topic className="panel"
          isOpen={openPanel===topic.id}
          key={topic.id}
          topic={topic}
          onToggle={() => openPanel === topic.id ? setOpenPanel(null) : setOpenPanel(topic.id)} />))}
    </div>
  )
}

function Topic({isOpen, topic, onToggle}){
  return (
    <>
      <button className="panel-header"
        type="button"
        onClick={onToggle} >
          {topic.header}
      </button>
      {isOpen &&
        <section className="panel-content">
          <p>{topic.content}</p>
        </section> }
    </>
  )
}
