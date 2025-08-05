import { ReactNode, forwardRef, SelectHTMLAttributes } from "react"

type SelectProps = {
  title?: string
  className?: string
  children: ReactNode
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ title, className, children, error, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {title && <h4>{title}</h4>}
        <select
          ref={ref}
          {...props}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        >
          {children}
        </select>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  }
)

Select.displayName = "Select"

export default Select
