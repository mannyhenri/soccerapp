import { 
    addNewPlayer, 
    getPlayers, 
    getPlayerWithID, 
    updatePlayer,
    deletePlayer 
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    .get(getPlayers)
    
    // POST endpoint
    .post(addNewPlayer);

    app.route('/player/:PlayerId')
    // get specific Player
    .get(getPlayerWithID)
    
    // put request
    .put(updatePlayer)

    // delete request
    .delete(deletePlayer);
}

export default routes;
