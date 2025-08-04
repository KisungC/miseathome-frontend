import { ReactNode } from "react"

type selectType = {
    title?: string
    className?: string
    children: ReactNode
}

const Select = ({ title, className, children, ...props }: selectType) => {
    return (
        <form className="mx-auto">
            <label>{title}</label>
            <select id="underline_select" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5">
                {children}
            </select>
        </form>
    )
}

export default Select