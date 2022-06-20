import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import Meetups from '../components/Meetups/Meetups';
function Favorites() {
    const favoriteContext = useContext(FavoritesContext);

    let favorites;
    if(favoriteContext.totalFavorites === 0) {
        favorites = <p>You got no favorites yet. Please add some favorites</p>
    } else {
        favorites = <Meetups meetups={favoriteContext.favorites} />
    }


    return (
        <section>
            <h1>My Favorites</h1>
            {favorites}
        </section>
    );
}

export default Favorites;