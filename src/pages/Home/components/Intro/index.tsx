import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography'

export function Intro() {
    return (
        <IntroContainer>
            <IntroContent className='container'>
                <div>
                    <section>
                        <IntroTitle size='xl'>
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size='l' color='subtitle' as='h3'>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <p>
                            <ShoppingCart size={20} weight="fill" />
                        </p>
                        <p>
                            <Package size={20} weight="fill" />
                        </p>
                        <p>
                            <Timer size={20} weight="fill" />
                        </p>
                        <p>
                            <Coffee size={20} weight="fill" />
                        </p>
                    </BenefitsContainer>
                </div>
                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}