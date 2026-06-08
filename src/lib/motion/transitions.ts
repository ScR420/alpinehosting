import { MOTION_DURATION, MOTION_EASE, type MOTION_STAGGER } from "./config";

type StaggerKey = keyof typeof MOTION_STAGGER;

/** Returns Motion-compatible transition, respecting reduced-motion via duration 0 */
export function motionTransition(duration: number = MOTION_DURATION.reveal, reduced = false) {
  return reduced ? { duration: 0 } : { duration, ease: MOTION_EASE.out };
}

export function heroTransition(reduced = false) {
  return motionTransition(MOTION_DURATION.hero, reduced);
}

export function revealTransition(reduced = false) {
  return motionTransition(MOTION_DURATION.reveal, reduced);
}

export function routeTransition(reduced = false) {
  return motionTransition(MOTION_DURATION.route, reduced);
}
