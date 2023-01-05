import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateAccount from './Components/account/CreateAccount';
import { LoginContextProvider } from './Components/contexts/AuthContext';
import Home from './Components/home/Home';
import About from './Components/layouts/About';
import FAQ from './Components/layouts/FAQ';
import Menu from './Components/layouts/NavBar';
import Login from './Components/login/Login';
import Profile from './Components/profile/Profile';
import ToDoList from './Components/profile/ToDoList';
import UserProjects from './Components/profile/UserProjects';
import ViewClientProfile from './Components/profile/ViewClientProfile';
import Workers from './Components/workers/Workers';
import Contact from './Components/layouts/Contact';
import { HomeContextProvider } from './Components/contexts/WorkerContext';
import RequestRecoverPassword from './Components/account/RequestRecoverPassword';
import RecoverPassword from './Components/login/RequestPassword';

const App = () => {
    return (
        <div className='app'>
        <BrowserRouter>
            <Routes>
                <Route path='' element= {<LoginContextProvider><HomeContextProvider><Menu/></HomeContextProvider></LoginContextProvider>}>
                    <Route index element= { <Home />} />
                    <Route path='crear-cuenta' element= { <CreateAccount />  } />
                    <Route path='trabajadores' element= { <Workers /> } />
                    <Route path='perfil' element= { <Profile /> } />
                    <Route path='/trabajadores/perfil/vista/:id' element= { <ViewClientProfile /> } />
                    <Route path='login' element= { <Login /> } />
                    <Route path='/solicitud-recuperar-clave' element= { <RequestRecoverPassword /> } />
                    <Route path='/resetear-password/:id/:token' element= { <RecoverPassword /> } />
                    <Route path='preguntas-frecuentes' element= { <FAQ /> } />
                    <Route path='sobre-nosotros' element= { <About /> } />
                    <Route path='mis-proyectos' element= { <UserProjects /> } />
                    <Route path='mis-solicitudes' element= { <ToDoList /> } />
                    <Route path='contacto' element= { <Contact /> } />
                    <Route path='*' element={ <Navigate replace to = "/"/> } />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
};

export default App;