type StepListProps = {
  /** Array of step strings — may contain HTML entities (&nbsp; etc.) */
  steps: string[]
}

/** Numbered process list used in service pages (.list-wrapper.padding-32px) */
export default function StepList({ steps }: StepListProps) {
  return (
    <div className="list-wrapper padding-32px">
      <div className="list">
        {steps.map((step, i) => (
          <div key={i} className="list-item-wrapper">
            <div className="bullet-wrapper-left">
              <h3 dangerouslySetInnerHTML={{ __html: `${i + 1}.&nbsp;${step}` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
