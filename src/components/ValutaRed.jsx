import React from 'react'

export default function ValutaRed(props) {
    console.log(props);
    const srednji = (props.valuta.vrednost) / (props.osnova);
    console.log(srednji);
    return (
        <tr>
            <td>
                {props.valuta.oznaka}
            </td>
            <td>
                {srednji * 0.9}
            </td>
            <td>
                {srednji}
            </td>
            <td>
                {srednji * 1.1}
            </td>
        </tr>
    )
}
