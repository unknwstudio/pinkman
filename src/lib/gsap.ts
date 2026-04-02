/**
 * Central GSAP configuration.
 * Import gsap (and named plugins) from here — never from 'gsap' directly.
 * Registration is guarded by typeof window so it runs only client-side.
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Flip } from 'gsap/Flip'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip, TextPlugin)
}

export { ScrollTrigger, ScrollSmoother, Flip, TextPlugin }
export default gsap
