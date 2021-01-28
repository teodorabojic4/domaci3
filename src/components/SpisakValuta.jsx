import React, { useState } from 'react'
import ValutaRed from './ValutaRed';

export default function SpisakValuta(props) {
    const [selValuta, setSelValuta] = useState(0);

    return (
        <div className='container'>
            <div className='row mt-2 text-center'>
                <div className='col-12'>
                    <h1>Spisak svih valuta</h1>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h5>Izaberite valutu na osnovu koje uporedjujete ostale</h5>
                    <select className='form-control' onChange={(e) => {
                        const val = e.target.value;
                        setSelValuta(parseInt(val));
                    }}>
                        {props.valute.map((element, index) => {
                            return <option value={index} >{element.oznaka}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-12'>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Naziv valute</th>
                                <th>Kupovni kurs</th>
                                <th>Srednji kurs</th>
                                <th>Prodajni kurs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.valute.map(element => (
                                <ValutaRed osnova={props.valute[selValuta].vrednost} valuta={element} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
} 
