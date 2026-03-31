/**
 * ProcessSteps — numbered workflow steps in a responsive grid.
 * Desktop: all steps in one row (via inline style). Mobile: 2 cols → 1 col.
 *
 * Each step has: a pink number badge, an optional tag chip,
 * an h3 title, and a description paragraph.
 *
 * Usage:
 *   <ProcessSteps steps={[
 *     { num: '1', title: 'Брифинг', description: 'Разбираемся в задаче…', tag: 'старт' },
 *     …
 *   ]} />
 */

interface ProcessStep {
  num: string
  title: string
  description: string
  tag?: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="process-steps">
      {/* gridTemplateColumns inline — repeat() count cannot be a CSS custom property */}
      <div
        className="process-steps__list"
        style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
      >
        {steps.map((step, i) => (
          <div key={i} className="process-step">
            <div className="process-step__num">
              <span className="process-step__num-badge">{step.num}</span>
              {step.tag && <span className="process-step__tag">{step.tag}</span>}
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: step.title }} />
            <p dangerouslySetInnerHTML={{ __html: step.description }} />
          </div>
        ))}
      </div>
    </div>
  )
}
