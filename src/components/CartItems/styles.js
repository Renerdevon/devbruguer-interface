import styled from "styled-components";

export const ProductImageBox = styled.div`
    background-color: #f3f3f3; /* Fundo cinza conforme o Figma */
    padding: 12px;
    border-radius: 16px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    object-fit: contain;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: #8758a6;
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color: ${(props) => props.theme.darkPurple};
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const ProducTotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;
