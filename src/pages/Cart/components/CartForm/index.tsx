import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components';
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from './AddressForm';
import { CartFormContainer, FormSectionContainer } from "./styles";

export function CartForm() {
    const { colors } = useTheme();
    return (
        <CartFormContainer>
            <TitleText size='xs' color='subtitle'>
                Complete seu pedido
            </TitleText>
            <FormSectionContainer>
                <SectionTitle
                    title='Endereço de Entrega'
                    subtitle='Informe o endereço onde deseja receber seu pedido'
                    icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
                />
                <AddressForm />
            </FormSectionContainer>
        </CartFormContainer>
    )
}