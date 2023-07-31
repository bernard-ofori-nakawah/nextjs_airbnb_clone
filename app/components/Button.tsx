"use client"

import { IconType } from "react-icons"

interface ButtonProps{
  label: string
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onclick,
  disabled,
  outline,
  small,
  icon: Icon
}) => {
  return (
    <button disabled={disabled} onClick={onclick} className={
      `relative disable:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${outline ? 'bg-white' : 'border-rose-500'} ${outline ? 'border-black' : 'bg-rose-500'} ${outline ? 'text-black' : 'text-white'} ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${small ? 'font-light' : 'font-semibold'} ${small ? 'border-[1px]' : 'border-[2px] '}`
    }>
      {Icon && (
        <Icon size={24} className="absolute left-4 top-3"></Icon>
      )}
      {label}
    </button>
  )
}

export default Button