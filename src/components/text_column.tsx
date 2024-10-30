import * as React from 'react'
import styled from 'styled-components'

const WrongColumn = styled.div`
  background-color: pink;
`

interface Props {
    textList: string[]
    wrongList: boolean[]
}

export const TextColumn: React.FC<Props> = props => {

    const textLists = props.textList.map((text, i) => {
        if (props.wrongList[i]) {
            return <WrongColumn>{i+1}: {text}</WrongColumn>
        }
        return <div>{i+1}: {text}</div>
    })

    return (
        <div> {textLists}</div>
    )
}