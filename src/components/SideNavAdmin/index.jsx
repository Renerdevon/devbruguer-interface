import Logo from '../../assets/logo.svg';
import { useResolvedPath } from 'react-router-dom';
import { navLinks } from "./navLinks";
import { SignOut } from '@phosphor-icons/react';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';
import { useUser } from '../../hooks/UserContext';


export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>

            <img src={Logo} alt='Hamburguer logo DevBurguer' />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/login' onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}