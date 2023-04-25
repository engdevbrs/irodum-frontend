import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AccountType from './Components/account/AccountType';
import CreateAccount from './Components/account/CreateAccount';
import CreateAccountPyme from './Components/account/CreateAccountPyme';
import { LoginContextProvider } from './Components/contexts/AuthContext';
import Home from './Components/home/Home';
import About from './Components/layouts/About';
import FAQ from './Components/layouts/FAQ';
import Menu from './Components/layouts/NavBar';
import Login from './Components/login/Login';
import Profile from './Components/profile/Profile';
import ProfilePyme from './Components/profile/ProfilePyme';
import ToDoList from './Components/profile/ToDoList';
import UserProjects from './Components/profile/UserProjects';
import Workers from './Components/workers/Workers';
import Contact from './Components/layouts/Contact';
import { HomeContextProvider } from './Components/contexts/WorkerContext';
import RequestRecoverPassword from './Components/account/RequestRecoverPassword';
import RecoverPassword from './Components/login/RequestPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import PymeWorkers from './Components/workers/PymeWorkers';
import ViewByTypeEmployed from './Components/profile/ViewByTypeEmployed';
import TermsAndConditions from './Components/layouts/TermsAndConditions';

const App = () => {
    return (
        <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path='' element= {<LoginContextProvider><HomeContextProvider><Menu/></HomeContextProvider></LoginContextProvider>}>
                    <Route index element= { <Home />} />
                    <Route path='crear-cuenta' element= { <AccountType />  } />
                    <Route path='crear-cuenta-independiente' element= { <CreateAccount />  } />
                    <Route path='crear-cuenta-pyme' element= { <CreateAccountPyme />  } />
                    <Route path='trabajadores' element= { <Workers /> } />
                    <Route path='pymes' element= { <PymeWorkers /> } />
                    <Route path='perfil' element= { <Profile /> } />
                    <Route path='perfil-pyme' element= { <ProfilePyme /> } />
                    <Route path='/trabajadores/perfil/vista/:type/:id' element= { <ViewByTypeEmployed /> } />
                    <Route path='login' element= { <Login /> } />
                    <Route path='/solicitud-recuperar-clave' element= { <RequestRecoverPassword /> } />
                    <Route path='/resetear-password/:id/:token' element= { <RecoverPassword /> } />
                    <Route path='preguntas-frecuentes' element= { <FAQ /> } />
                    <Route path='sobre-nosotros' element= { <About /> } />
                    <Route path='mis-proyectos' element= { <UserProjects /> } />
                    <Route path='mis-solicitudes' element= { <ToDoList /> } />
                    <Route path='contacto' element= { <Contact /> } />
                    <Route path='terminos-y-condiciones' element= { <TermsAndConditions /> } />
                    <Route path='*' element={ <Navigate replace to = "/"/> } />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
};

export default App;