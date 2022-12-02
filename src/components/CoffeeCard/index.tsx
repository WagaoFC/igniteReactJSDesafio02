import { CoffeeCardContainer, Tags, Name, Description, CardFooter } from './styles'
import expressoTradicional from '../../assets/Coffees/expressoTradicional.png'
import { RegularText, TitleText } from '../Typography'

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src={expressoTradicional} />
            <Tags>
                <span>tradicional</span>
                <span>com leite</span>
            </Tags>
            <Name>Expresso Tradicional</Name>
            <Description>
                O tradicional café feito com água quente e grãos moídos
            </Description>
            <CardFooter>
                <div>
                    <RegularText size='s'>R$</RegularText>
                    <TitleText size='m' color='text' as='strong'>9,90</TitleText>
                </div>
            </CardFooter>
        </CoffeeCardContainer>
    )
}