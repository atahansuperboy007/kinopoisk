import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Form from "./comp/Form";
import Basket from "./comp/Basket";
import MovieList from "./comp/MovieList";
import Pop_movie from "./comp/MovieP";
import Search from "./comp/Search";
import "./style.css";
import Upcoming from "./comp/Upcoming";
import Movie from "./Movie";

function App() {
  //  const [num, setNum] = useState(2)

  //  function rise(){
  //    setNum(num + 2)
  //  }

  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <header>
            <Link to="/" className="logo">
              <h1>KinoPoisk</h1>
            </Link>
            <div className="links">
              <Link to="/">Фильмы в кино</Link>
              <Link to="/up">Скоро выйдут</Link>
              <Link to="/pop">Популярные фильмы</Link>
              <Link to="/Basket">Корзина</Link>
            </div>
          </header>

          <body>
            <h1>Найди любимое кино!</h1>
            <img
              src="https://static.tildacdn.com/tild3261-6361-4962-a534-656461336134/1437406477_cinema.jpg"
              alt=""
            />
            <div className="Search">
              <h1>Поиск фильмов</h1>
            </div>
          </body>

          <div className="search">
            <Form />
          </div>

          <Switch>
            <Route path="/up">
              <Upcoming />
            </Route>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/pop">
              <Pop_movie />
            </Route>
            <Route path="/Basket">
              <Basket />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
          </Switch>
          <footer>
            <hr />
            <h3>Эл.почта:amangaziz9@gmail.com</h3>
            <h3> Фамилия Имя: Аман Газиз</h3>
            <h3>Номер:+7 747 435 29 02</h3>
            <div className="email">
              <h1>Покупка подписки на месяц</h1>
            <input type="text" placeholder="Введите почту"/>
            <button>Отправить</button>
            </div>
         
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
