import { CartForm } from "./components/CartForm";
import { CartContainer } from "./styled";

export function Cart() {
    return (
        <CartContainer className='container'>
            <CartForm />
        </CartContainer>
    )
}