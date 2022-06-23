import { css } from 'styled-components/native'

const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CenterColumn = css`
    ${Center}
    flex-direction: column;
`

export const CenterRow = css`
    ${Center}
    flex-direction: row;
`

export const MiddleCenterColumn = css`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MiddleCenterRow = css`
    display: flex;
    align-items: center;
    flex-direction: row;
`