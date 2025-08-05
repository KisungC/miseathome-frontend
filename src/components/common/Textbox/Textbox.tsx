import styles from '@/styles/Textbox.module.css'
import { forwardRef } from 'react';

type TextboxProps = {
    placeholder: string;
    type?: string;
    title?: string;
    className?: string;
    error?: string
};


const Textbox = forwardRef<HTMLInputElement, TextboxProps>((props, ref) => {
  const { placeholder, type = 'text', className = '', title, error, ...rest } = props
    return (
        <>
            {title && <h4 className=''>{title}</h4>}
            <input
                ref={ref}
                className={`${styles.textbox} ${className}`}
                placeholder={placeholder}
                type={type}
                {...rest}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </>
    )
})

export default Textbox