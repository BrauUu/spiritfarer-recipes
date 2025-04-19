import Line from "./Line";
interface Title {
    type: 'primary' | 'secondary',
    text: string,
}

export default function Title({ type, text }: Title) {

    function getTitleType() {
        if (type == 'primary') {
            return <h1 className={`text-left text-shadow-neon`}> {text} </h1>
        }
        if (type == 'secondary') {
            return <h2 className={`text-center text-shadow-neon`}> {text} </h2>
        }
    }

    return (
        <div className="w-full pt-2 px-4 md:pt-4 text-center md:px-8">
            <div className="pb-2">
                {getTitleType()}
            </div>
            <Line />
        </div>
    )
}