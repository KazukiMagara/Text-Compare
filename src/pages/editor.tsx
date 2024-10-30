import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../components/button'
import { putCompare } from '../compare/compare'
import { CompareModal } from '../components/compare_modal'

const { useState } = React

const Header = styled.header`
  align-content: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: space-between;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const HeaderControl = styled.div`
    height: 2rem;
    display: flex;
    align-content: center;
  `

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const TextArea1 = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const TextArea2 = styled.textarea`
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

export const Editor: React.FC = () => {
    const [text1, setText1] = useState<string>('')
    const [text2, setText2] = useState<string>('')

    const textCompare = (): void => {
        putCompare(text1, text2)
    }

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Header>
                Text Compare
                <HeaderControl>
                    <Button onClick={ () => setShowModal(true) }>
                        比較する
                    </Button>
                </HeaderControl>
            </Header>
            <Wrapper>
                <TextArea1
                    onChange={(event) => {
                        setText1(event.target.value)
                    }}
                    value={text1}
                />
                <TextArea2
                    onChange={(event) => {
                        setText2(event.target.value)
                    }}
                    value={text2}
                />
            </Wrapper>
            {
                showModal && (
                    <CompareModal
                        onCancel={() => setShowModal(false)}
                        text1={text1}
                        text2={text2}
                    />
                )
            }
        </>
    )
}
