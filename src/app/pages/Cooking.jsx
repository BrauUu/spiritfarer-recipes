"use client"

import React, { useContext, useEffect, useState } from "react";
import Image from 'next/image'
import useMetadata from "../hooks/useMetadata";

import { Context } from "../Context";

import Grains from '../../../public/images/ingredients/grains.png'
import Ingredients from '../../../public/images/ingredients/ingredients.png'
import Fish from '../../../public/images/ingredients/fish.png'
import FruitsAndVeggies from '../../../public/images/ingredients/fruits_and_veggies.png'

import { LongBox, SmallBox } from '../components/Box'
import Loading from "../components/Loading";
import Line from "../components/Line";
import { IngredientPrimary } from "../components/Ingredient";

import api from '../api'

export default function Cooking({ changeActualScreen }) {

    const {
        ingredientsList,
        setIngredientsList,
        isLoading,
        setIsLoading
    } = useContext(Context)

    const [actualType, setActualType] = useState(0)
    const [selectedIngredient, setSelectedIngredient] = useState(0)

    const metadata = {
        title: "🔥 Spiritfarer: Cooking Place",
        description: "Get ready to cook",
    };

    useMetadata(metadata)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.getAllIngredients()
                const data = await response.json()
                setIngredientsList(data)
                localStorage.setItem('ingredientsList', JSON.stringify(data))
            } catch (error) {

            } finally {
                setIsLoading(false)
            }
        }

        if (!localStorage.getItem('ingredientsList')) {
            setIsLoading(true)
            fetchData()
            return
        }

        setIngredientsList(() => {
            try {
                return JSON.parse(localStorage.getItem('ingredientsList'));
            } catch {
                return [];
            }
        })


    }, [])

    return (
        <>
            {
                isLoading ?
                    <Loading />
                    :
                    <div className="w-full h-full flex bg-fade flex-row items-center pl-[50%]">
                        <LongBox title='Ingredientes' className={'translate-x-[-50%]'}>
                            <div className="px-5 flex flex-col grow">
                                <div className="h-14 mx-12 flex flex-row justify-around items-center">
                                    <Image
                                        className={`h-14 w-auto cursor-pointer px-4 py-3`}
                                        width={36}
                                        height={36}
                                        src={Grains.src}
                                        alt={'Um ícone de um trigo, representando grãos.'}
                                    ></Image>
                                    <Image
                                        className={`h-14 w-auto cursor-pointer px-4 py-3`}
                                        width={36}
                                        height={36}
                                        src={Ingredients.src}
                                        alt={'Um ícone de um jarro, representando ingredientes.'}
                                    ></Image>
                                    <Image
                                        className={`h-14 w-auto cursor-pointer px-4 py-3`}
                                        width={36}
                                        height={36}
                                        src={Fish.src}
                                        alt={'Um ícone de um peixe, representando peixes.'}
                                    ></Image>
                                    <Image
                                        className={`h-14 w-auto cursor-pointer px-4 py-3`}
                                        width={36}
                                        height={36}
                                        src={FruitsAndVeggies.src}
                                        alt={'Um ícone de uma cenoura e tomate, representando frutas e verduras.'}
                                    ></Image>
                                </div>
                                <Line />
                                <div className="w-full h-[282px] flex flex-col overflow-hidden items-center">
                                    <div className="grid grid-cols-4-70 auto-rows-[70px] p-4 overflow-y-scroll gap-x-5 gap-y-2">
                                        {
                                            ingredientsList.map((ingredient, i) => {
                                                return <IngredientPrimary ingredient={ingredient} key={i}></IngredientPrimary>
                                            })
                                        }
                                    </div>
                                </div>
                                <Line />
                                {
                                    ingredientsList[0] ?
                                        <div className="flex flex-col grow">
                                            <div className="flex justify-start gap-1 items-center h-[32px] bg-secondary mt-2">
                                                <span className="h-full w-1 bg-neon"></span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                                </svg>

                                                <div>{ingredientsList[0].name}</div>
                                            </div>
                                            <div className="flex grow items-center text-secondary">
                                                <p className="text-center">{ingredientsList[0].description}</p>
                                            </div>
                                        </div>
                                        :
                                        undefined
                                }
                            </div>
                        </LongBox>
                        <SmallBox className={'translate-x-[-60%]'} >
                            <div className="flex flex-col items-center w-full">
                                <h2 className="py-2">Cozinha</h2>
                                <Line />
                                <div className="flex justify-center flex-row py-4 gap-6 ">
                                    <IngredientPrimary ingredient={selectedIngredient[0]}></IngredientPrimary>
                                    <IngredientPrimary ingredient={selectedIngredient[1]}></IngredientPrimary>
                                </div>
                                <div className="
                                    py-[6px]
                                    px-[6px]
                                    bg-secondary-glass
                                    rounded-[12px]
                                    border-1
                                    border-solid
                                    border-neon-glass
                                    shadow-neon-glass
                                    border-b-0"
                                >
                                    <div className="w-[164px] h-10 rounded-lg bg-neon text-gray-900 flex items-center justify-center">
                                        Cozinhar
                                    </div>
                                </div>
                            </div>
                        </SmallBox>
                        <div
                            className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 flex items-center cursor-pointer group"
                            onClick={() => changeActualScreen()}
                        >
                            <svg className="fill-secondary group-hover:fill-neon group-hover:drop-shadow-[0px_0px_8px_var(--primary-neon)] rotate-180" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path> </g></svg>
                            <svg className="text-secondary group-hover:text-neon group-hover:drop-shadow-[0px_0px_8px_var(--primary-neon)]" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z" fill="currentColor"></path> <path d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z" fill="currentColor"></path> </g></svg>
                        </div>
                    </div>
            }
        </>
    )
}