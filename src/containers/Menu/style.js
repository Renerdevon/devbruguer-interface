import styled from "styled-components";
import BannerHamburguer from '../../assets/banner-hamburguer.svg'
import Background from '../../assets/backgroundl2.svg'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
    url('${Background}');

`


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburguer}') no-repeat;
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background: cover ;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #ffff;
        position: absolute;

        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #ffff;
            font-size: 20px;
        }
    }

`


export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;

`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory
        ? (props) => props.theme.purple
        : (props) => props.theme.orange};
    font-size: 24px;
    font-weight: 500;
    padding: 5px 10px;
    line-height: 20px;
    border: none;
    border-radius: 6px;

    /* Transição suave */
    transition: background-color 1.5s ease, color 1.5s ease;

    &:hover {
        background-color: ${(props) => props.theme.purple}; /* o roxo */
        color: #fff;              /* deixa o texto branco */
    }
`;



export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;

`

export const HomeButton = styled.button`
    position: relative;
    width: 192px;     /* 48 * 4 */
    height: 56px;     /* h-14 */
    background: #fff;
    color: #000;
    font-size: 20px;  /* text-xl */
    font-weight: 600;
    border: none;
    border-radius: 16px; /* rounded-2xl */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    p {
        transform: translateX(8px);
        z-index: 5;
    }

    .slider {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 48px;      /* w-1/4 de 192px */
        height: 48px;     /* h-12 */
        background: ${(props) => props.theme.purple}; /* green-400 */
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: width 0.5s;
    }

    &:hover .slider {
        width: 184px; /* group-hover:w-[184px] */
    }
`;

