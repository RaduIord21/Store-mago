import ElectricGuitar from "./Assets/ElectricGuitar.png";
import ElectricBass from "./Assets/ElectricBass.png";
import GuitarAmp from "./Assets/GuitarAmp.png";
import BassAmp from "./Assets/BassAmp.png";
import GuitarCable from "./Assets/GuitarCable.png";
import Picks from "./Assets/Guitar Picks.png";
import React, {useState, useEffect} from 'react';
import axios from 'axios';



export const Products = [
    {
        id: 1,
        productName: "Chitară Electrică",
        price: 900.0,
        productImage: ElectricGuitar,
        productDescription: "O chitară electrică versatilă potrivită pentru diverse genuri muzicale.",
    },
    {
        id: 2,
        productName: "Chitară Bass",
        price: 700.0,
        productImage: ElectricBass,
        productDescription: "O chitară bass solidă cu un sunet puternic și adânc pentru entuziaștii de bass.",
    },
    {
        id: 3,
        productName: "Amplificator de Chitară",
        price: 750.0,
        productImage: GuitarAmp,
        productDescription: "Un amplificator de chitară de înaltă calitate pentru amplificarea sunetului chitarei tale electrice.",
    },
    {
        id: 4,
        productName: "Amplificator de Bass",
        price: 250.0,
        productImage: BassAmp,
        productDescription: "Un amplificator proiectat special pentru chitarele bass, oferind tonuri de bass clare.",
    },
    {
        id: 5,
        productName: "Cablu de Instrument",
        price: 20.0,
        productImage: GuitarCable,
        productDescription: "Un cablu de instrument durabil pentru conectarea chitarei tale la un amplificator sau alt echipament.",
    },
    {
        id: 6,
        productName: "Pene de Chitară",
        price: 5.0,
        productImage: Picks,
        productDescription: "Un set de pene pentru chitară pentru a obține tonuri diferite și stiluri de redare.",
    },
];
