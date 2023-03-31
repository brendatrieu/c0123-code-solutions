import './Accordion.css';

/**
 *
 * @param {topics} An array of objects. Each object will contain a header and corresponding content for the Accordion panel.
 */

export default function Accordion ({topics, view, onSwapView}) {
  return (
    <div className="all-panels">
      {topics.map((topic)=> (
        <Topic className="panel"
          view={view}
          key={topic.header}
          header={topic.header}
          content={topic.content}
          onSwapView={onSwapView} />))}
    </div>
  )
}

function Topic({view, header, content, onSwapView}){
  return (
    <>
      <button className="panel-header"
        type="button"
        onClick={() => view===header ? onSwapView('none') : onSwapView(header)} >
          {header}
      </button>
      {view === header &&
        <section className="panel-content">
          <p>{content}</p>
        </section> }
    </>
  )
}
