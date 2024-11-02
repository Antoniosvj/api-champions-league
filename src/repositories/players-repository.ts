import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    
        {
            id: 1,
            name: "Lionel Messi",
            club: "Paris Saint-Germain",
            nationality: "Argentina",
            position: "Forward",
            statistics: {
                overall: 93,
                pace: 85,
                shooting: 94,
                passing: 91,
                dribbling: 95,
                defending: 38,
                physical: 65,
            },
        },
        {
            id: 2,
            name: "Cristiano Ronaldo",
            club: "Manchester United",
            nationality: "Portugal",
            position: "Forward",
            statistics: {
                overall: 91,
                pace: 87,
                shooting: 93,
                passing: 82,
                dribbling: 88,
                defending: 35,
                physical: 77,
            },
        },
        {
            id: 3,
            name: "Kevin De Bruyne",
            club: "Manchester City",
            nationality: "Belgium",
            position: "Midfielder",
            statistics: {
                overall: 91,
                pace: 76,
                shooting: 86,
                passing: 93,
                dribbling: 87,
                defending: 64,
                physical: 78,
            },
        },
        {
            id: 4,
            name: "Robert Lewandowski",
            club: "FC Barcelona",
            nationality: "Poland",
            position: "Forward",
            statistics: {
                overall: 92,
                pace: 78,
                shooting: 95,
                passing: 79,
                dribbling: 86,
                defending: 44,
                physical: 82,
            },
        },
        {
            id: 5,
            name: "Virgil van Dijk",
            club: "Liverpool",
            nationality: "Netherlands",
            position: "Defender",
            statistics: {
                overall: 89,
                pace: 74,
                shooting: 60,
                passing: 71,
                dribbling: 70,
                defending: 91,
                physical: 86,
            },
        },
        {
            id: 6,
            name: "Kylian Mbappé",
            club: "Paris Saint-Germain",
            nationality: "France",
            position: "Forward",
            statistics: {
                overall: 91,
                pace: 97,
                shooting: 88,
                passing: 80,
                dribbling: 92,
                defending: 36,
                physical: 76,
            },
        },
        {
            id: 7,
            name: "Neymar Jr.",
            club: "Paris Saint-Germain",
            nationality: "Brazil",
            position: "Forward",
            statistics: {
                overall: 91,
                pace: 87,
                shooting: 85,
                passing: 86,
                dribbling: 94,
                defending: 37,
                physical: 61,
            },
        },
    ];
    


export const FindAllPlayers = async (): Promise<PlayerModel[]> =>{
    return database;
};

export const findPlayersById = async(id: number): Promise<PlayerModel | undefined> =>{
    return database.find(player => player.id === id);
}

export const insertPlayer = async(player: PlayerModel) =>{
    database.push(player)
}

export const deleteOnePlayer = async (id:number) =>{
    const index = database.findIndex( player => player.id === id);

    if(index !== -1){
        database.splice(index, 1);
        return true;
    } else{
        return false;
    }
}

export const findAndModifyPlayer = async (id:number, statistics:statisticsModel): Promise<PlayerModel> =>{
    //find player
    const playerIndex = database.findIndex(player => player.id ===id);

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
}