import React from 'react';

function Navbar({typeSearch, parseSearch, inputClick}){
    return(
        <div className="nav">
            <div className="logo">
                <div className="logo-icon"></div>
                <span>Logo</span>
            </div>
            <div className="items">
                <div className="input" onClick={inputClick}>
                    <input type="text" placeholder="Поиск..." onChange={typeSearch} onKeyPress={parseSearch} />
                </div>
                <div className="favorites">
                    <div className="fav-icon"></div>
                    <span>Избранное</span>
                </div>
                <div className="history">
                    <div className="history-icon"></div>
                    <span>History</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;