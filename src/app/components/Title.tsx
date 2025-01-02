import Line from "./Line";

interface Title {
    type: 'primary' | 'secondary',
    text: string
}

export default function Title({ type, text }: Title) {

    function getTitleType(type: string, text: string) {
        if (type == 'primary') {
            return <h1> {text} </h1>
        }
        if (type == 'secondary') {
            return <h2> {text} </h2>
        }
        return <h3>{text}</h3>
    }

    return (
        <div className="w-full pt-4 px-4 text-center">
            {getTitleType(type, text)}
            <Line />
        </div>
    )
}