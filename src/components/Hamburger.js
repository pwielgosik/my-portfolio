import React from 'react'

import { HamburgerButton, InnerHamburger } from './Hamburger.styled'

const Hamburger = ({ toggleSideMenu, isOpen }) => {
    return (
        <HamburgerButton
            aria-label="Otwórz/zamknij menu nawigacyjne"
            onClick={toggleSideMenu}
        >
            <InnerHamburger aria-hidden="true" isOpen={isOpen} />
        </HamburgerButton>
    )
}

export default Hamburger
