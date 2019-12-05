import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
}

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId}, req.body, { new: true }, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    })
}

export const deletePlayer = (req, res) => {
    Player.remove({ _id: req.params.PlayerId }, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Player'});
    })
}