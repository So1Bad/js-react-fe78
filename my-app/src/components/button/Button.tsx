import './Button.css'
type ButtonVariant = 'primary' | 'secondary' | 'secondary2'
type Props = {
   content: string
   isActive?: boolean
   variant: ButtonVariant
   onClick?: () => void
}
export const Button = ({ content, isActive, variant, onClick }: Props) => {
   return <button className={`button button--${variant}`} disabled={!isActive} onClick={onClick}>{content}</button>
}