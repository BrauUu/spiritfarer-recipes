"use client"

import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react"

export default function MusicController({ isMusicActive, changeMusicState }) {
    return (
        <button
            className={`
                absolute
                bottom-4
                right-4
            `}
            onClick={() => changeMusicState()}
        >
            {isMusicActive ?
                <SpeakerHigh size={40} className="fill-secondary hover:fill-neon hover:drop-shadow-neon"/> :
                <SpeakerSlash size={40} className="fill-secondary hover:fill-neon hover:drop-shadow-neon"/>
            }
        </button>
    )
}