"use client"

import { AnimatePresence, motion } from "motion/react"

import React, { useContext, useEffect, useState, useRef } from "react";
import Image from 'next/image'
import useMetadata from "../hooks/useMetadata";

import { Context } from "../Context";

import Grains from '../../../public/images/ingredients/grains.png'
import Ingredients from '../../../public/images/ingredients/ingredients.png'
import Fish from '../../../public/images/ingredients/fish.png'
import FruitsAndVeggies from '../../../public/images/ingredients/fruits_and_veggies.png'
import Wood from '../../../public/images/ingredients/wood.png'

import QuestionableMeal from '../../../public/images/dishes/questionable_meal.png'

import { LongBox, SmallBox } from '../components/Box'
import Loading from "../components/Loading";
import Line from "../components/Line";
import Key from "../components/Key";
import NewRecipe from "../components/NewRecipe";
import { IngredientPrimary, IngredientBox } from "../components/Ingredient";

import api from '../api'

export default function Cooking({ changeActualScreen }) {

    const {
        dishesList,
        ingredientsList,
        setIngredientsList,
        isLoading,
        setIsLoading
    } = useContext(Context)

    const [actualIngredient, setActualIngredient] = useState(null)
    const [actualIngredientIndex, setActualIngredientIndex] = useState(0)
    const actualIngredientRef = useRef(null)

    const isAlertVisible = useRef(false)
    const [cookedDish, setCookedDish] = useState({})

    const [selectedIngredients, setSelectedIngredients] = useState([])

    const [selectedType, setSelectedType] = useState("Grãos")
    const selectedTypeId = useRef(1)
    const [filteredIngredientsList, setFilteredIngredientsList] = useState([])

    const metadata = {
        title: "🔥 Spiritfarer: Cooking Place",
        description: "Get ready to cook",
    };

    const icons = [
        { id: 1, name: "Grãos", src: Grains.src, description: "Um ícone de um trigo, representando grãos." },
        { id: 2, name: "Ingredientes", src: Ingredients.src, description: "Um ícone de um jarro, representando ingredientes." },
        { id: 3, name: "Pesca", src: Fish.src, description: "Um ícone de um peixe, representando peixes." },
        { id: 4, name: "Frutas e Verduras", src: FruitsAndVeggies.src, description: "Um ícone de uma cenoura e tomate, representando frutas e verduras." },
        { id: 5, name: "Madeira", src: Wood.src, description: "Um ícone de uma tora de árvore, representando madeira." },
    ];

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

    useEffect(() => {
        setFilteredIngredientsList(ingredientsList.filter((ingredient) => ingredient.type === selectedType))
    }, [selectedType, ingredientsList])

    useEffect(() => {
        changeActualIngredient(0)
    }, [filteredIngredientsList])

    useEffect(() => {
        const activeDishElement = document.querySelector('.active')
        if (activeDishElement) {
            activeDishElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }, [actualIngredient]);

    useEffect(() => {
        const KEY_ACTIONS = {
            'ArrowLeft': () => changeActualIngredient(-1, true),
            'ArrowRight': () => changeActualIngredient(1, true),
            'ArrowUp': () => changeActualIngredient(-4, true),
            'ArrowDown': () => changeActualIngredient(4, true),
            'KeyE': () => addIngredientToRecipe(actualIngredientRef.current),
            'Escape': () => removeIngredientFromRecipe(actualIngredientRef.current),
            'KeyR': () => cookRecipe(),
            'Digit1': () => changeSelectedTypeById(-1),
            'Digit2': () => changeSelectedTypeById(1),
            'KeyQ': () => changeActualScreen()
        }

        function handleKeydown(event) {
            if (KEY_ACTIONS[event.code]) {
                KEY_ACTIONS[event.code]();
            }
        }

        document.addEventListener('keydown', handleKeydown)

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [filteredIngredientsList, selectedIngredients])

    function addIngredientToRecipe(ingredient) {
        setSelectedIngredients(prevSelected => {
            if (prevSelected.length === 2 || (prevSelected.length === 1 && prevSelected[0].id === ingredient.id)) {
                return prevSelected;
            }
            return [...prevSelected, ingredient];
        });
    }

    function removeIngredientFromRecipe(ingredient) {
        setSelectedIngredients(prevSelected =>
            prevSelected.filter(selectedIngredient => selectedIngredient.id !== ingredient.id)
        );
    }

    function cookRecipe() {
        if (isAlertVisible.current) {
            return
        }

        const ingredientsListLenght = selectedIngredients.length
        setCookedDish({ "name": "Receita questionável", "src": QuestionableMeal.src })

        if (ingredientsListLenght == 0)
            return

        for (let dish of dishesList) {
            const dishIngredients = dish.ingredients
            const confirmedIngredients = new Set();

            selectedIngredients.forEach(ingredient => {
                dishIngredients.forEach(dishIngredient => {
                    if (dishIngredient.ids.includes(ingredient.id)) {
                        confirmedIngredients.add(dishIngredient.name);
                    }
                });
            });

            if (confirmedIngredients.size == selectedIngredients.length && confirmedIngredients.size == dishIngredients.length) {
                setCookedDish(dish)
                break
            }

        }

        isAlertVisible.current = true
        setTimeout(() => {
            setCookedDish({})
            isAlertVisible.current = false
        }, 3000);

    }

    function changeActualIngredient(index, isAdding = false) {
        setActualIngredientIndex((prevIndex) => {
            const newIndex = isAdding ? prevIndex + index : index
            if (newIndex < 0 || newIndex >= filteredIngredientsList.length) {
                return prevIndex;
            }
            actualIngredientRef.current = filteredIngredientsList[newIndex]
            setActualIngredient(actualIngredientRef.current);
            return newIndex;
        });
    }

    function changeSelectedTypeById(num) {
        const temp = selectedTypeId.current + num
        if (temp < 1 || temp > 5) {
            return
        }
        selectedTypeId.current = temp
        icons.forEach((icon) => {
            if (icon.id == selectedTypeId.current) {
                setSelectedType(icon.name)
                return
            }
        })
    }

    return (
        <div className="w-full h-full bg-fade">
            {
                isLoading ?
                    <Loading />
                    :
                    <div className="h-full w-full flex justify-center lg:flex-row flex-col items-center xl:pl-[50%] gap-x-10">
                        <LongBox title='Ingredientes' className={'xl:translate-x-[-50%]'}>
                            <div className="px-6 flex flex-col grow">
                                <div className="h-14 mx-4 flex flex-row justify-around items-center">
                                    <Key char={'1'} size={'lg'}></Key>
                                    {
                                        icons.map((icon) => {
                                            return (
                                                <Image
                                                    className={`h-14 w-auto cursor-pointer px-4 py-3 filter`}
                                                    style={
                                                        selectedType == icon.name ?
                                                            { filter: 'invert(99%) sepia(96%) saturate(735%) hue-rotate(328deg) brightness(105%) contrast(99%) drop-shadow(0 0 8px var(--primary-neon-shadow))' }
                                                            : { filter: 'invert(90%) sepia(22%) saturate(268%) hue-rotate(10deg) brightness(92%) contrast(91%)' }}
                                                    width={36}
                                                    height={36}
                                                    key={icon.id}
                                                    id={icon.id}
                                                    src={icon.src}
                                                    name={icon.name}
                                                    onClick={
                                                        (event) => {
                                                            setSelectedType(event.target.attributes.name.value)
                                                            selectedTypeId.current = parseInt(event.target.attributes.id.value)
                                                        }
                                                    }
                                                    alt={icon.description}
                                                ></Image>
                                            )
                                        })
                                    }
                                    <Key char={'2'} size={'lg'}></Key>
                                </div>
                                <Line />
                                <div className="w-full h-[282px] flex flex-col overflow-hidden items-center">
                                    <div className="grid grid-cols-auto-max-70 justify-center w-full p-4 overflow-y-scroll gap-x-5 gap-y-2">
                                        {
                                            filteredIngredientsList.map((ingredient, i) => {
                                                return <IngredientPrimary ingredient={ingredient} key={i} index={i} changeActualIngredient={changeActualIngredient} actualIngredientIndex={actualIngredientIndex}></IngredientPrimary>
                                            })
                                        }
                                    </div>
                                </div>
                                <Line />
                                {
                                    actualIngredient ?
                                        <div className="flex flex-col grow">
                                            <div className="flex justify-start gap-1 items-center h-[32px] bg-secondary mt-2">
                                                <span className="h-full w-1 bg-neon"></span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                                </svg>

                                                <div>{actualIngredient.name}</div>
                                            </div>
                                            <div className="flex grow items-center text-secondary justify-center">
                                                <p className="text-center max-w-[400px]">{actualIngredient.description}</p>
                                            </div>
                                        </div>
                                        :
                                        undefined
                                }
                            </div>
                            <div className="h-14 w-full flex flex-col items-center">
                                <div className="w-3/4 flex flex-col items-end">
                                    <Line />
                                    <div className="flex flex-row py-3 gap-3">
                                        <Key char={'E'} label={"Mover"}></Key>
                                        <Key char={'ESC'} label={"Remover"}></Key>
                                    </div>
                                </div>
                            </div>
                        </LongBox>
                        <SmallBox className={'xl:translate-x-[-60%]'} >
                            <div
                                className={`
                                    flex flex-col items-center 
                                    w-full 
                                    px-6 pointer 
                                    bg-primary-glass lg:bg-transparent
                                    rounded-2xl border-t border-l border-solid border-secondary
                                    lg:border-none    
                                `}
                            >
                                <h2 className="py-2">Cozinha</h2>
                                <Line />
                                <div className="flex justify-center flex-row py-4 gap-6 ">
                                    <IngredientBox ingredient={selectedIngredients[0]}></IngredientBox>
                                    <IngredientBox ingredient={selectedIngredients[1]}></IngredientBox>
                                </div>
                                <div className="
                                    p-[5px]
                                    bg-neon-glass
                                    rounded-[12px]
                                    border-1
                                    border-solid
                                    border-neon-glass
                                    shadow-neon-glass
                                    border-b-0"
                                >
                                    <div
                                        className="w-[164px] h-10 rounded-lg bg-neon text-gray-900 flex items-center justify-center cursor-pointer"
                                        onClick={cookRecipe}
                                    >
                                        <Key char={'R'} size={'lg'}></Key>
                                        <span className="ml-3">Cozinhar</span>
                                    </div>
                                </div>
                            </div>
                        </SmallBox>
                        <AnimatePresence>
                            {isAlertVisible.current ?
                                <div className="bg-fade h-full w-full absolute top-0 left-0">
                                    <div className="absolute top-[10%] left-1/2 translate-x-[-50%]">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                        >
                                            <NewRecipe recipe={cookedDish}></NewRecipe>
                                        </motion.div>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </AnimatePresence>
                        <div
                            className="absolute top-1/2 left-0 xl:translate-x-1/2 translate-x-2 -translate-y-1/2 flex items-center cursor-pointer group"
                            onClick={() => changeActualScreen()}
                        >
                            <Key char={'Q'} size={'lg'} className={"hidden"}></Key>
                            <svg className="fill-secondary group-hover:fill-neon group-hover:drop-shadow-neon rotate-180 " height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path> </g></svg>
                            <svg className="text-secondary group-hover:text-neon group-hover:drop-shadow-neon hidden xl:block" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z" fill="currentColor"></path> <path d="M10.7083 4.70969C8.87828 3.71969 6.10828 2.83969 4.22828 2.67969H4.15828C2.95828 2.67969 1.98828 3.64969 1.98828 4.84969V16.7397C1.98828 17.7097 2.77828 18.5997 3.74828 18.7197L4.05828 18.7597C5.69828 18.9797 8.00828 19.6597 9.86828 20.4397C10.5183 20.7097 11.2383 20.2197 11.2383 19.5097V5.59969C11.2383 5.21969 11.0383 4.88969 10.7083 4.70969ZM4.99828 7.73969H7.24828C7.65828 7.73969 7.99828 8.07969 7.99828 8.48969C7.99828 8.90969 7.65828 9.23969 7.24828 9.23969H4.99828C4.58828 9.23969 4.24828 8.90969 4.24828 8.48969C4.24828 8.07969 4.58828 7.73969 4.99828 7.73969ZM7.99828 12.2397H4.99828C4.58828 12.2397 4.24828 11.9097 4.24828 11.4897C4.24828 11.0797 4.58828 10.7397 4.99828 10.7397H7.99828C8.40828 10.7397 8.74828 11.0797 8.74828 11.4897C8.74828 11.9097 8.40828 12.2397 7.99828 12.2397Z" fill="currentColor"></path> </g></svg>
                        </div>
                    </div >
            }
        </div >
    )
}