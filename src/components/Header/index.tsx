import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Copo de café com um foguete do lado das palavras Coffee Delivery" />
            <nav>
                <NavLink to='/'>
                    <MapPin weight='fill' size={22} />
                    <p>Araxá, MG</p>
                </NavLink>
                <NavLink to='/cart'>
                    <ShoppingCart weight='fill' size={22} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}