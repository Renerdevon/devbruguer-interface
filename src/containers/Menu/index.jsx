import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from './style.js';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice.js';
import { CardProduct } from '../../components/CardProduct/index.jsx';

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);


    const nivigate = useNavigate();

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data
                .map((product) => (
                    {
                        currencyValue: formatPrice(product.price),
                        ...product,
                    }));

            setProducts(newProducts)
        }
        loadCategories();

        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory,
            );
            setFilteredProducts(newFilteredProducts);
        }

    }, [products, activeCategory])


    return (
        <Container>

            <Banner>
                <h1> O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI!
                    <br />
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        onClick={() => {
                            nivigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                            );
                            setActiveCategory(category.id);
                            console.log(setActiveCategory)
                        }}

                    >
                        {category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>

                {filteredProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>

        </Container>

    )

}