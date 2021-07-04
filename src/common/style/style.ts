export type ButtonAccent = 'selector'|'magenta'|'grey'
export type InputAccent = 'dark-grey'

export const cssWithAccent = (base:string, accent?: ButtonAccent) => (accent ? `${base}--${accent }`: base)