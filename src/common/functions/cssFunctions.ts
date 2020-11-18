import {ButtonProps} from '../types/cssModifiers'

export const buttonCssClass = (accent?: ButtonProps) => (accent ? `button--${accent }`: 'button')