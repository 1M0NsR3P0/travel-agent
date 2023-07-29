import React from 'react';
import ActiveLink from './ActiveLink';

const Erorr = () => {
    return (
        <div>
            an error happend
            the page you are looking for is not found or removed or deleted or never existed.
            <div>
                <button className='btn-primaryy'>
                    <ActiveLink to={'/'}>Home</ActiveLink>
                </button>
            </div>
        </div>
    );
};

export default Erorr;