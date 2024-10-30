import * as React from 'react'
import styled from 'styled-components'
import { Button } from './button'
import { TextColumn } from './text_column'
import { putCompare } from '../compare/compare'

const { useState } = React

const Wrapper = styled.div`
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Modal = styled.div`
  background: #fff;
  padding: 1rem;
  width: 70rem;
`

const Control = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`

const CompareArea = styled.div`
  display: flex;
  left: 0;
  right: 0;
  top: 3rem;
`

const Preview1 = styled.div`
  overflow-y: scroll;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  width: 50vw;
`

const Preview2 = styled.div`
  overflow-y: scroll;
  font-size: 1rem;
  padding: 1rem;
  right: 0;
  width: 50vw;
`

interface Props {
    onCancel: () => void
    text1: string
    text2: string
}

export const CompareModal: React.FC<Props> = props => {
    const { onCancel, text1, text2 } = props

    const [text1column, setText1column] = useState(text1.split('\n'))
    const [text2column, setText2column] = useState(text2.split('\n'))

    const [wrongList, setWrongList] = useState(putCompare(text1, text2))

    return (
        <Wrapper>
            <Modal>
                <p>比較結果
                        <Button onClick={onCancel} cancel>
                            閉じる
                        </Button>
                    
                </p>
                <CompareArea>
                    <Preview1>
                        <TextColumn textList={text1column} wrongList={ wrongList } />
                    </Preview1>
                    <Preview2>
                        <TextColumn textList={text2column} wrongList={ wrongList } />
                    </Preview2>
                </CompareArea>
            </Modal>
        </Wrapper>
    )
}
