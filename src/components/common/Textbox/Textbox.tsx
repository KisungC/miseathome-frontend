import styles from '@/styles/Textbox.module.css'

type TextboxProps = {
    placeholder: string;
    type?: string;
    title?: string;
    className?: string;
};


const Textbox = ({ placeholder, type = 'text', className, title, ...props }: TextboxProps) => {
    return (
        <>
                {title && <h4 className=''>{title}</h4>}
                <input
                    className={`${styles.textbox} ${className}`}
                    placeholder={placeholder}
                    type={type}
                    {...props}
                />
        </>
    )
}

export default Textbox