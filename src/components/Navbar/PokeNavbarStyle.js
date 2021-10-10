import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    height: 50px;
    background-color: red;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
`
export const Title = styled.a`
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
    align-items: center;
    line-height: 45px;
`

export const Credit = styled.p`
    color: #fff;
    font-size: small;
    margin-right: 20px;
`