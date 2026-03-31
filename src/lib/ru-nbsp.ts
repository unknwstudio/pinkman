/**
 * Russian typography: non-breaking space after prepositions and conjunctions.
 *
 * Russian rule: short words (в, к, и, на, по, не, …) must not be left
 * alone at the end of a line — they bind to the next word with U+00A0.
 *
 * Usage (plain text in JSX):
 *   <h2>{ruNbsp('Наш обычный день уже 10 лет.')}</h2>
 *
 * Usage (HTML string in dangerouslySetInnerHTML):
 *   <div dangerouslySetInnerHTML={{ __html: ruNbspHtml(someHtml) }} />
 */

// Word list — single-letter, prepositions, conjunctions that must not hang
const GLUE =
  'а|в|и|к|о|с|у|я|' +          // 1-letter
  'бы|да|до|же|за|из|ли|на|не|ни|но|об|от|по|со|то|во|' + // 2-letter
  'без|бес|для|его|её|или|как|над|под|при|про|так|уже|что|чем|ещё'  // 3+

// Match: (space or start or em-dash or open paren) + glue-word + regular space
// Capture group 1 = the preceding char (so we can restore it), group 2 = the glue word
const RE = new RegExp(`(^|[ \\t\\u00a0\\u2014(])(${GLUE}) `, 'giu')

export function ruNbsp(text: string): string {
  // Replace only normal space after the glue word, keep leading char intact
  return text.replace(RE, (_, before, word) => `${before}${word}\u00a0`)
}

/**
 * Same rule applied inside an HTML string — touches only text nodes,
 * never tag attributes.
 */
export function ruNbspHtml(html: string): string {
  return html.replace(/(<[^>]+>)|([^<]+)/g, (_, tag, text) =>
    tag ? tag : ruNbsp(text)
  )
}
