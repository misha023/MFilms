import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, NavLink, Link} from 'react-router-dom';
import FilmsRender from './FilmsRender';
import './reset.css'
import './index.css'
import LoginForm from "./login";
import {HomeAuth, HomeNotAuth} from "./home";

const newsFilms = [ // Новинки
    {id: 1, name: 'Спасение в пустоте', title: 'Загадочные приключения'},
    {id: 2, name: 'Скрытый мир', title: 'Под поверхностью'},
    {id: 3, name: 'Перекресток судеб', title: 'Тайны прошлого'},
    {id: 4, name: 'Запретный лес', title: 'Лесные тайны'},
    {id: 5, name: 'Плененные во времени', title: 'Время в объятиях'},
    {id: 6, name: 'Исчезнувший след', title: 'Загадочные исчезновения'},
    {id: 7, name: 'Ночные ужасы', title: 'Страхи ночи'},
    {id: 8, name: 'В поисках истины', title: 'Скрытые правды'},
    {id: 9, name: 'Остров сокровищ', title: 'Пиратские приключения'},
    {id: 10, name: 'Ловцы грёз', title: 'Сказочные миры'},
    {id: 11, name: 'Спрятанные истории', title: 'Тайны архивов'},
    {id: 12, name: 'Грань реальности', title: 'Необъяснимые явления'},
    {id: 13, name: 'Подпольные миры', title: 'Скрытые общества'},
    {id: 14, name: 'Лабиринты разума', title: 'Загадки ума'},
    {id: 15, name: 'Звёздные приключения', title: 'Галактические саги'}
];

const bestsellersFilms = [ // Бестселлеры
    {id: 16, name: 'Огонь и лёд', title: 'Ледяной взгляд'},
    {id: 17, name: 'Путь к славе', title: 'Великие судьбы'},
    {id: 18, name: 'Подняться выше', title: 'Новые высоты'},
    {id: 19, name: 'Легенды прошлого', title: 'Сказания времён'},
    {id: 20, name: 'Игра на выживание', title: 'Смертельные игры'},
    {id: 21, name: 'Под покровом ночи', title: 'Тёмные страсти'},
    {id: 22, name: 'Скрытая угроза', title: 'Тайные заговоры'},
    {id: 23, name: 'Поднять занавес', title: 'Секреты успеха'},
    {id: 24, name: 'Гений в действии', title: 'Необычные умы'},
    {id: 25, name: 'Скрытый враг', title: 'Борьба с невидимкой'},
    {id: 26, name: 'Невероятные возможности', title: 'Сила творчества'},
    {id: 27, name: 'Огонь и сталь', title: 'Эпические битвы'},
    {id: 28, name: 'Блеск и роскошь', title: 'Миры богатства'},
    {id: 29, name: 'Поднимая штурвал', title: 'Морские приключения'},
    {id: 30, name: 'Сердце героя', title: 'Судьбы отважных'}
];

const thrillersFilms = [ // Триллеры
    {id: 31, name: 'Смертельная интрига', title: 'Опасные игры'},
    {id: 32, name: 'Ловушка времени', title: 'Гонка со смертью'},
    {id: 33, name: 'Тёмные коридоры', title: 'Тайные пути'},
    {id: 34, name: 'Под покровом тьмы', title: 'Тёмные тайны'},
    {id: 35, name: 'За гранью реальности', title: 'Тревожные сны'},
    {id: 36, name: 'Опасные исследования', title: 'Научные тайны'},
    {id: 37, name: 'Скрытая угроза', title: 'Тёмные сценарии'},
    {id: 38, name: 'Неизвестные враги', title: 'Под прицелом'},
    {id: 39, name: 'Смертоносные улики', title: 'Расследование убийства'},
    {id: 40, name: 'Загадочные пропажи', title: 'Тайные исчезновения'},
    {id: 41, name: 'Скрытая месть', title: 'Месть в тени'},
    {id: 42, name: 'Ловушка для разума', title: 'Психологические триллеры'},
    {id: 43, name: 'Тёмные обманы', title: 'Загадки обмана'},
    {id: 44, name: 'Под покровом зла', title: 'Тёмные обличья'},
    {id: 45, name: 'В сети смерти', title: 'Смертоносные игры'}
];

function ShowFilms(keys) {
    return (
        <>
        <h1 className={"page-name"}>{keys.namePage}</h1>
        <div className="films-container">
            {keys.TypeFilms.map((film) => (
                <FilmsRender key={film.id} card_id={film.id} name={film.name} title={film.title} />
            ))}
        </div>
        </>
    );
}

function Page() {
    const siteName = "MFILMS"
    const isAuth = false
    const userName = "Николай"

    return (
        <Router>
            <div>
                <nav className="menu-container">
                    <ul className="menu">
                        <Link to={"/"}><h1 className="main-logo">{siteName.slice(0, 2)}</h1></Link>
                        <NavLink to="/news" activeClassName="active"><li className="menu-element">Новинки</li></NavLink>
                        <NavLink to="/bestsellers" activeClassName="active"><li className="menu-element">Бестселлеры</li></NavLink>
                        <NavLink to="/thrillers" activeClassName="active"><li className="menu-element">Триллеры</li></NavLink>
                    </ul>
                    <Link to={"/login"}>
                    <div className="auth-container">
                        <i className="fa fa-user-circle-o"></i>
                        <h5 className="auth-title">{isAuth ? "Profile" : "Register"}</h5>
                    </div>
                    </Link>
                </nav>

                <main>
                <Routes>
                    <Route path="/" element={isAuth ? <HomeAuth userName={userName} /> : <HomeNotAuth siteName={siteName} />} />
                    <Route path="/news" element={<ShowFilms namePage={"Новинки"} TypeFilms={newsFilms} />} />
                    <Route path="/bestsellers" element={<ShowFilms namePage={"Бестселлеры"} TypeFilms={bestsellersFilms} />} />
                    <Route path="/thrillers" element={<ShowFilms namePage={"Триллеры"} TypeFilms={thrillersFilms} />} />
                    <Route path="/login" element={<h1>{<LoginForm namePage={isAuth ? "Профиль" : "Регистрация"} />}</h1>} />
                </Routes>
                </main>
            </div>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);