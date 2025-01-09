"use client"

import React, { useState, useEffect } from "react";

import Box from '../components/Box'
import Loading from "../components/Loading";
import Dish from "../components/Dish";
import DishDetails from "../components/DishDetails";
import Title from "../components/Title";

import api from '../api'

export default function Recipes({ changeActualScreen }) {

    const [selectedDish, setSelectedDish] = useState(false)
    const [dishesList, setDishesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const response = await api.getAllRecipes()
            setDishesList(await response.json())
            setTimeout(() => {
                setIsLoading(false)
            }, 2500)
        }
        fetchData()
    }, [])

    return (
        <>
            {
                isLoading ?
                    <Loading />
                    :
                    <div>
                        <Box>
                            <div className="w-[55%] overflow-hidden flex flex-col">
                                <Title type='primary' text='Receitas' classes='text-left pl-6'/>
                                <div className="pb-5 w-full overflow-y-scroll flex justify-center">
                                    <div className="grid grid-cols-4-70 auto-rows-[70px] p-4 pt-4 overflow-y-scroll gap-x-5 gap-y-2">
                                        {
                                            dishesList.map((dish, i) => {
                                                return <Dish dish={dish} key={i} setSelectedDish={setSelectedDish} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-[45%] bg-primary-glass mr-5 my-5 flex justify-center h-[calc(100% - 40px)] rounded-2xl border-t border-l border-solid border-secondary">
                                {
                                    selectedDish ?
                                        <DishDetails selectedDish={selectedDish} />
                                        :
                                        <></>
                                }
                            </div>
                        </Box>
                        <div
                            className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 flex items-center cursor-pointer group"
                            onClick={() => changeActualScreen()}
                        >
                            <svg className="fill-secondary group-hover:fill-neon group-hover:drop-shadow-[0px_0px_8px_var(--primary-neon)]" fill="#000000" height="100px" viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M119.691,106.891c0-4.513,0.798-5.902,2.928-9.617c2.931-5.106,7.358-12.822,7.358-26.236H96.587 c0,4.512-0.798,5.902-2.928,9.616c-2.931,5.106-7.358,12.823-7.358,26.236s4.429,21.13,7.358,26.236 c2.13,3.713,2.928,5.103,2.928,9.616c0,4.511-0.797,5.9-2.928,9.612c-2.93,5.109-7.358,12.824-7.358,26.237h33.391 c0-4.511,0.797-5.9,2.928-9.612c2.931-5.106,7.358-12.822,7.358-26.234c0-13.413-4.429-21.129-7.358-26.236 C120.489,112.794,119.691,111.404,119.691,106.891z"></path> </g> </g> <g> <g> <path d="M222.566,106.892c0-4.512,0.798-5.902,2.928-9.616c2.932-5.106,7.359-12.823,7.359-26.236h-33.391 c0,4.512-0.798,5.901-2.928,9.614c-2.931,5.107-7.359,12.823-7.359,26.237c0,13.413,4.429,21.13,7.359,26.237 c2.13,3.713,2.928,5.102,2.928,9.614c0,4.51-0.798,5.899-2.928,9.612c-2.931,5.106-7.359,12.822-7.359,26.234h33.391 c0-4.51,0.798-5.899,2.928-9.612c2.931-5.106,7.359-12.822,7.359-26.234c0-13.413-4.429-21.13-7.359-26.236 C223.364,112.794,222.566,111.404,222.566,106.892z"></path> </g> </g> <g> <g> <path d="M469.591,245.113H319.154v-21.622H0v142.712c0,41.222,33.537,74.759,74.759,74.759h169.637 c41.222,0,74.759-33.536,74.759-74.759v-36.274h150.437c23.384,0,42.409-19.024,42.409-42.409 C512,264.137,492.975,245.113,469.591,245.113z M469.591,296.538H319.154v-18.035h150.437c4.972,0,9.018,4.045,9.018,9.017 C478.609,292.493,474.563,296.538,469.591,296.538z"></path> </g> </g> </g></svg>
                            <svg className="fill-secondary group-hover:fill-neon group-hover:drop-shadow-[0px_0px_8px_var(--primary-neon)]" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path> </g></svg>
                        </div>
                    </div>
            }
        </>
    )
}