/**
 * ProcessSteps — numbered workflow steps in a responsive grid.
 * Desktop: all steps in one row. Mobile: 2 columns, then 1 column.
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
      <div
        className="process-steps__list"
        style={{ '--steps-count': steps.length } as React.CSSProperties}
      >
        {steps.map((step, i) => (
          <div key={i} className="process-step anim" {...(i > 0 ? { 'data-d': String(Math.min(i, 4)) } : {})}>
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
