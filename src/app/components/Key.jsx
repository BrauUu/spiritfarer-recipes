const SIZES = {
    'md' : 'h-5 w-5 text-[10px] rounded-sm',
    'lg' : 'h-7 w-7 text-base rounded-md'
}

export default function Key({ char, label, size }) {
    return (
        <div className="lg:flex hidden flex-row gap-2 ">
            <div className={`
                flex
                items-center 
                justify-center 
                text-gray-300 
                bg-gray-900 
                border-[1px] 
                border-gray-300 
                outline-2 
                outline 
                outline-black 
                ${SIZES[size||'md']}
            `}>
                {char}
            </div>
            {
                label ?
                    <div className="text-base font-bold">{label}</div>
                    :
                    undefined
            }
        </div>
    )
}