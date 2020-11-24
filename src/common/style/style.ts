export type ButtonAccent = 'selector'|'magenta'|'grey'
export type InputAccent = 'dark-grey'

export const buttonCssClass = (accent?: ButtonAccent) => (accent ? `button--${accent }`: 'button')