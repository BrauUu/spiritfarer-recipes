const Box = ({ children }) => {
    return (
        <div
            className={`
            rounded-[32px]
            md:w-[820px]
            md:h-[580px]
            md:p-4
            md:bg-secondary-glass
            flex
            items-center
            md:border-1
            md:border-solid
            md:border-neon-glass
            md:shadow-neon-glass
            w-screen
            h-screen
        `}
        >
            <div
                className={`
                flex
                items-center
                md:flex-row
                w-full
                h-full
                md:shadow-neon
                md:rounded-[50px]
                md:border-[1px]
                md:border-solid
                md:border-neon
                bg-primary
                flex-col
                `}
            >
                {children}
            </div>
        </div>
    )
}

const LongBox = ({ children, title, className }) => {
    return (
        <div className={`flex items-center justify-center flex-col ${className}`}>
            <div className={`
                    pt-2
                    px-2
                    bg-secondary-glass
                    z-20 
                    rounded-t-[16px]
                    border-1
                    border-solid
                    border-neon-glass
                    shadow-neon-glass
                    border-b-0
                `}>
                <div className={`
                        px-10 
                        py-2 
                        bg-primary 
                        mb-[-16px] 
                        z-10 
                        rounded-t-[16px]
                        border-[1px]
                        border-solid
                        border-neon
                        shadow-neon
                        border-b-0
                    `}>

                    <h1 className="text-3xl">
                        {title}
                    </h1>
                </div>
            </div>
            <div
                className={`
                    z-0
                    max-w-full
                    rounded-[32px]
                    md:w-[480px]
                    md:h-[640px]
                    p-4
                    bg-secondary-glass
                    flex
                    items-center
                    border-1
                    border-solid
                    border-neon-glass
                    shadow-neon-glass
                    w-screen
                    h-screen
                `}
            >
                <div className={`
                    flex
                    w-full
                    h-full
                    shadow-neon
                    rounded-[50px]
                    border-[1px]
                    border-solid
                    border-neon
                    bg-primary
                    flex-col
                `}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const SmallBox = ({children, className}) => {
    return (
        <div className={`
            rounded-[32px]
            p-4
            bg-secondary-glass
            flex
            items-center
            border-1
            border-solid
            border-neon-glass
            shadow-neon-glass
            ${className}
        `}>
            <div
                className={`
                flex
                w-[320px]
                h-[225px]
                flex-col
                items-center
                shadow-neon
                rounded-[50px]
                border-[1px]
                border-solid
                border-neon
                bg-primary
            `}
            >
                {children}
            </div>
        </div>
    )
}

export {
    Box,
    LongBox,
    SmallBox
}