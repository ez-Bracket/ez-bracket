import { createContext, useState } from 'react';

// Utilities
import { Api } from '../services/Api';

export interface iCampProvidertProps {
  children: React.ReactNode;
}

interface iCampConext {
  getCompetition: (idUser: number) => void;
  camp: iCamp[];
  createCompetition: (data: iCampRegister) => void;
  deleteCompetition: (idCamp: number) => void;

  addPlayersCompetition: (idCamp: number, data: iPlayers[]) => void;

  winnerPlayerCompetition: (
    idCamp: number,
    round: number,
    chave: number,
    winnerPlayer: iPlayers
  ) => void;

  setIdCamp: (id: number) => void;
  idCamp: number;
}

interface iPlayers {
  player: string;
  playerImg?: string;
}

interface iCamp {
  id: number;
  idUser: number;
  name: string;
  players: iPlayers[];
  status: boolean;
  winner: iPlayers;
  games: string[][];
  number_of_players: number;
}

export interface iCampRegister {
  idUser: number;
  name: string;
  status: boolean;
  winner: iPlayers | null;
  games: string[][];
  players: iPlayers[];
  number_of_players: string;
  date?: string;
  description?: string;
}

export const CampConext = createContext<iCampConext>({} as iCampConext);

export const CampProvider = ({ children }: iCampProvidertProps) => {
  const [camp, setCamp] = useState<iCamp[]>([]);
  const [idCamp, setIdCamp] = useState<number>(0);

  const getCompetition = async (idUser: number) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('@EZ:TOKEN')}`,
        },
      };
      const allGames = await Api.get(`deathmatch`, config);
      setCamp(
        allGames.data.filter((element: iCamp) => element.idUser === idUser),
      );
    } catch (error) {
      return error;
    }
  };

  const createCompetition = async (data: iCampRegister) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('@EZ:TOKEN')}`,
        },
      };
      await Api.post(`deathmatch`, data, config);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const addPlayersCompetition = async (idCamp: number, data: iPlayers[]) => {
    try {
      if (data.length === 4 || data.length === 8 || data.length === 16) {
        const config = {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('@EZ:TOKEN')}`,
          },
        };
        const game = await Api.get(`deathmatch/${idCamp}`);
        game.data.players = data;

        const createGames = [];

        data.sort((a, b) => Math.random() - 0.5);

        for (let index = 0; index < data.length; index = index + 2) {
          createGames.push({
            player1: data[index],
            player2: data[index + 1],
            winner: '',
          });
        }

        game.data.games[0] = createGames;

        await Api.put(`deathmatch/${idCamp}`, game.data, config);
      } else {
        console.log('Quantidade de jogadores errada! 4 ou 8 ou 16!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const winnerPlayerCompetition = async (
    idCamp: number,
    round: number,
    chave: number,
    winnerPlayer: iPlayers
  ) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('@EZ:TOKEN')}`,
        },
      };
      const game = await Api.get(`deathmatch/${idCamp}`);

      console.log(game.data.games[round - 1].length);
      console.log(chave);
      if (game.data.games[round - 1].length >= chave) {
        game.data.games[round - 1][chave - 1].winner = winnerPlayer;
        if (
          !game.data.games[round - 1].find(
            (element: { winner: string }) => element.winner === '',
          ) &&
          game.data.games[round - 1].length > 1
        ) {
          console.log(`Round ${round}° Acabou!`);

          const createGames = [];
          for (
            let index = 0;
            index < game.data.games[round - 1].length;
            index = index + 2
          ) {
            createGames.push({
              player1: game.data.games[round - 1][index].winner,
              player2: game.data.games[round - 1][index + 1].winner,
              winner: '',
            });
          }
          game.data.games.push(createGames);
        } else if (game.data.games[round - 1].length === 1) {
          game.data.winner = winnerPlayer;
          game.data.status = false;
        }
        await Api.put(`deathmatch/${idCamp}`, game.data, config);
      } else {
        console.log(`Essa chave ${chave} não existe no ${round}° round !`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCompetition = async (id: number) => {
    console.log(id);
    const token = localStorage.getItem(`@EZ:TOKEN`);
    console.log(token);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('@EZ:TOKEN')}`,
        },
      };
      await Api.delete(`deathmatch/${id}`, config);
      const newListCamp = camp?.filter((e: iCamp) => e.id !== idCamp);
      setCamp(newListCamp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CampConext.Provider
      value={{
        getCompetition,
        camp,
        createCompetition,
        deleteCompetition,
        addPlayersCompetition,
        winnerPlayerCompetition,
        setIdCamp,
        idCamp,
      }}
    >
      {children}
    </CampConext.Provider>
  );
};
