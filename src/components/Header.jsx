import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='mt-5 mb-3' src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-secondary fw-semibold'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='bg-secondary-subtle p-3 w-75 mx-auto d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee className='ms-3' pauseOnHover speed={'100'}>
                    Match Highlights: Germany vs Spain — as it happened!   Match Highlights: Germany vs Spain.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;