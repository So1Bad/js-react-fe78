import './menuButton.css'
type ButtonVariant = 'menu' | 'close'
type Props = {
   variant: ButtonVariant
   onClick?: () => void
}

export const MenuButton = ({ variant, onClick }: Props) => {

   return (
      <button
         className={`button button--${variant}`}
         onClick={onClick}
      >
         {<span className="button__icon-lines" />}
      </button>
   )
}
