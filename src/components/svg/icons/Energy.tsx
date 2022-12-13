import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const EnergyCircle: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg className={cls('fill-none', className)} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 22 22'} {...rest}>
      <path
        d="M1.6852 8.32586C0.208309 13.4764 3.18638 18.849 8.33691 20.3259C8.33691 20.3259 3.27959 13.3247 11.0111 11C18.7425 8.67527 13.6852 1.67415 13.6852 1.67415C8.53467 0.197256 3.16209 3.17533 1.6852 8.32586Z"
        fill="#06b6d4"
      />
      <path
        d="M8.33691 20.3259C13.4874 21.8027 18.86 18.8247 20.3369 13.6741C21.8138 8.52362 18.8357 3.15104 13.6852 1.67415C13.6852 1.67415 18.7425 8.67527 11.0111 11C3.27959 13.3247 8.33691 20.3259 8.33691 20.3259Z"
        fill="#4f46e5"
      />
      <path
        d="M8.33691 20.3259C13.4874 21.8027 18.86 18.8247 20.3369 13.6741C21.8138 8.52362 18.8357 3.15104 13.6852 1.67415M8.33691 20.3259C3.18638 18.849 0.208309 13.4764 1.6852 8.32586C3.16209 3.17533 8.53467 0.197256 13.6852 1.67415M8.33691 20.3259C8.33691 20.3259 3.27959 13.3247 11.0111 11C18.7425 8.67527 13.6852 1.67415 13.6852 1.67415"
        stroke="#3b82f6"
        stroke-width="2.5"
      />
    </svg>
  )
}

export default memo(EnergyCircle)
