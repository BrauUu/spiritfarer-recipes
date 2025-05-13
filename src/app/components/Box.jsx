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
            h-svh
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
        <div className={`h-full flex items-center justify-center flex-col ${className}`}>
            <div className={`
                    lg:w-auto
                    w-full
                    lg:pt-2
                    lg:px-2
                    lg:bg-secondary-glass
                    lg:z-20 
                    lg:rounded-t-[16px]
                    lg:border-1
                    lg:border-solid
                    lg:border-neon-glass
                    lg:shadow-neon-glass
                    border-b-0
                `}>
                <div className={`
                        px-4
                        lg:px-8
                        py-2 
                        bg-primary 
                        lg:mb-[-16px] 
                        lg:z-10 
                        lg:rounded-t-[16px]
                        lg:border-[1px]
                        lg:border-solid
                        lg:border-neon
                        lg:shadow-neon
                        border-b-0
                    `}>

                    <h1>
                        {title}
                    </h1>
                </div>
            </div>
            <div
                className={`
                    lg:z-0
                    max-w-full
                    lg:rounded-[32px]
                    lg:w-[480px]
                    lg:h-[640px]
                    lg:p-4
                    lg:bg-secondary-glass
                    flex
                    items-center
                    lg:border-1
                    lg:border-solid
                    lg:border-neon-glass
                    lg:shadow-neon-glass
                    w-screen
                    h-full
                `}
            >
                <div className={`
                    flex
                    w-full
                    h-full
                    lg:shadow-neon
                    lg:rounded-[50px]
                    lg:border-[1px]
                    lg:border-solid
                    lg:border-neon
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
            lg:rounded-[32px]
            lg:p-4
            lg:bg-secondary-glass
            flex
            items-center
            lg:border-1
            lg:border-solid
            lg:border-neon-glass
            lg:shadow-neon-glass
            ${className}
            `}>
            <div
                className={`
                w-screen
                flex
                lg:w-[320px]
                p-4
                min-h-[225px]
                flex-col
                items-center
                lg:shadow-neon
                lg:rounded-[50px]
                lg:border-[1px]
                lg:border-solid
                lg:border-neon
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