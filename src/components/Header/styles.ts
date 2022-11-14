import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.75rem;
        
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${(props) => props.theme.colors['brand-purple-dark']};
            background: ${(props) => props.theme.colors['brand-purple-light']};

            svg {
                ${(props) => props.theme.colors['brand-purple']};
            }

            &:last-child {
                color: ${(props) => props.theme.colors['brand-yellow-dark']};
                background: ${(props) => props.theme.colors['brand-yellow-light']};
            }
        }
    }
`