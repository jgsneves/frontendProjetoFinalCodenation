import React from 'react';
import './Home.css';
import HeaderComponent from '../../components/header/Header';
import FooterComponent from '../../components/footer/Footer';

const Home = () => {

    function handleInputChange() {
        //
    }
    return (
        <>
            <HeaderComponent />

            <main className="mainContainer">
                <form className="inputContainer">
                <fieldset className="inputContainer">
                    <label>
                        Usuário
                        <input 
                            type="text" 
                            name="text" 
                            id="username" 
                            onChange={handleInputChange}
                            className="input"
                        />
                    </label>

                    <label>
                        Senha
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={handleInputChange}
                            className="input"
                        />
                    </label>
                </fieldset>
                </form>
            </main>

            <FooterComponent />
        </>
    );
}

export default Home;