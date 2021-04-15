import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'large' | 'small'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  buttonType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
/**
 ButtonHTMLAttributes<HTMLElement> react提供了button标签的原生属性
 AnchorHTMLAttributes<HTMLElement> react提供了a标签的原生属性
 typeScript中的Partial 将属性变成可选的
 */
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { 
    buttonType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-large, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${buttonType}`]: buttonType,
    [`btn-${size}`]: size,
    'disabled': (buttonType === 'link') && disabled
  })
  if (buttonType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  buttonType: 'default'
}

export default Button;