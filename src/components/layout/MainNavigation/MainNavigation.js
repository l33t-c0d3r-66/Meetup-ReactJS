import {Link} from 'react-router-dom'

import cssClasses from './MainNavigation.module.css';

import {useContext} from 'react';
import FavoritesContext from '../../../store/favorite-context';
function MainNavigation () {
    const favoriteContext = useContext(FavoritesContext)
    return (
        <header className={cssClasses.header}>
            <div className={cssClasses.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetup</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            My Favorites
                            <span className={cssClasses.badge}>{favoriteContext.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;