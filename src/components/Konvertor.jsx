import React, { useState } from 'react'
import ValutaPolje from './ValutaPolje'

export default function Konvertor(props) {
    const [vrednosti, setVrednosti] = useState(props.valute.map(element => 0));

    const promenaInputa = (index) => (e) => {
        const value = e.target.value;
        setVrednosti(props.valute.map((element, ind) => {

            return props.valute[index].vrednost * value / props.valute[ind].vrednost
        }))
    }

    return (
        <div className='container'>
            <div className='row mt-2 text-center'>
                <div className='col-12'>
                    <h1>Izvrsite konverziju valuta</h1>
                </div>
            </div>
            {props.valute.map((element, index) => (
                <ValutaPolje valuta={element} vrednost={vrednosti[index]} onChange={promenaInputa(index)} />
            ))}
        </div>
    )
}
