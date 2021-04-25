import React from 'react';
import LinkHistory from './LinkHistory';
import Container from '../../components/Container/Container';
import Navbar from '../../components/Navbar/Navbar';
import ApiDetails from './ApiDetails';


const links = [{ title: 'Logout', pathName: '/logout', isButton: true }];

const Business = () => {
    return (
     <Container>
        <Navbar links={links} />
        <ApiDetails />
        <LinkHistory />
      </Container>
    )
}

export default Business;
