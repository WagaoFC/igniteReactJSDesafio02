import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
    return (
        <HeaderContainer>
            <div className='container'>
                <img src={logoCoffeeDelivery} alt='Copo de café com um foguete do lado das palavras Coffee Delivery' />
                <HeaderButtonsContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={20} weight="fill" />
                        Araxá, MG
                    </HeaderButton>
                    <HeaderButton variant='yellow'>
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}