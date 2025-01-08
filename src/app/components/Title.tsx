import Line from "./Line";

interface Title {
    type: 'primary' | 'secondary',
    text: string,
    classes: string
}

export default function Title({ type, text, classes }: Title) {

    function getTitleType() {
        if (type == 'primary') {
            return <h1 className={classes}> {text} </h1>
        }
        if (type == 'secondary') {
            return <h2 className={classes}> {text} </h2>
        }
        return <h3 className={classes}> {text} </h3>
    }

    return (
        <div className="w-full pt-4 px-4 text-center">
            <div className="pb-2">
                {getTitleType()}
            </div>
            <Line />
        </div>
    )
}