export default function Box({ children }) {
    return (
        <div
            className={`
            flex
            flex-row
            max-w-full
            w-[1024px]
            h-[600px]
            shadow-neon
            rounded-3xl
            border-2
            border-solid
            border-neon
        `}
        >
            {children}
        </div>
    )
}