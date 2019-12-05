import mongoose from 'mongoose';
import { TeamSchema } from '../models/TeamModel';

const Team = mongoose.model('Team', TeamSchema);

export const addNewTeam = (req, res) => {
    let newTeam = new Team(req.body);

    newTeam.save((err, Team) => {
        if (err) {
            res.send(err);
        }
        res.json(Team);
    });
};

export const getTeams = (req, res) => {
    Team.find({}, (err, Team) => {
        if (err) {
            res.send(err);
        }
        res.json(Team);
    });
};

export const getTeamWithID = (req, res) => {
    Team.findById(req.params.TeamId, (err, Team) => {
        if (err) {
            res.send(err);
        }
        res.json(Team);
    });
}

export const updateTeam = (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.TeamId}, req.body, { new: true }, (err, Team) => {
        if (err) {
            res.send(err);
        }
        res.json(Team);
    })
}

export const deleteTeam = (req, res) => {
    Team.remove({ _id: req.params.TeamId }, (err, Team) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Team'});
    })
}