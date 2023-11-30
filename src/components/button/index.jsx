

export default function Button ({ props, children }) {
    return (
        <button
            type="submit"
            className="
                bg-[#004603]
                text-white
                hover:bg-white
                hover:border-[#004603]
                hover:border-[1.5px]
                hover:text-[#004603]
                font-bold
                py-2 px-4
                rounded
                focus:outline-none
                focus:shadow-outline
                w-full
                p-2
            "
            {...props}
        >
            {children}
        </button>
    )
}