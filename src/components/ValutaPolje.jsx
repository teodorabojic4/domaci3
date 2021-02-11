import React from 'react'

export default function ValutaPolje(props) {
    return (
        <div className='row mt-2'>
            <div className='col-2'>
                <label >{props.valuta.oznaka}</label>
            </div>
            <div className='col-10'>
                <input className='form-control' value={props.vrednost} onChange={props.onChange} type="text" />
            </div>
        </div>
    )
}
