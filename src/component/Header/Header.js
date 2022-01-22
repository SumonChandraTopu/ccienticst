import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="bg-dark header text-light">
            <h1>Nature’s 9: nine people who helped shape science in 2020</h1>
            <h3>A COVID vaccine developer, an Arctic voyager and a prime minister are some of the people behind the year’s big research stories.</h3>
            <h4>The Science Department spends <span>300</span> million dollar.</h4>
        </div>
    );
};

export default Header;