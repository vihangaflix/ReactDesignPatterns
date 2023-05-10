import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

`

//flex: 1; means that it will take up all the space that is left same as right
const Pane = styled.div`
    flex: ${props => props.weight};
`

const SplitScreen = ({
    children: [Left, Right],
    leftWeight = 1,
    rightWeight = 1
}) => {
    return (
        <Container>
            <Pane weight={leftWeight}>
                {Left}
            </Pane>
            <Pane weight={rightWeight}>
                {Right}
            </Pane>
        </Container>
    )
}

export default SplitScreen
