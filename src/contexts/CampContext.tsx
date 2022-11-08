import { createContext, ReactNode, useState } from 'react';
import { CustomToast } from '../components/Toast';

// Utilities
import { Api } from '../services/Api';

export interface iCampProvidertProps {
  children: ReactNode;
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
    key: number,
    winnerPlayer: iPlayers,
  ) => void;

  setIdCamp: (id: number) => void;
  idCamp: number;
  isCreateRound: boolean;
}

interface iPlayers {
  player: string;
  playerImg?: string;
}

export interface iCamp {
  id: number;
  idUser: number;
  name: string;
  players: iPlayers[];
  status: boolean;
  winner: iPlayers;
  games: string[][];
  number_of_players: number;
  description: string;
  date?: string;
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
  const [isCreateRound, setIsCreateRound] = useState(false);
  const { toastify } = CustomToast();
  const token = localStorage.getItem(`@EZ:TOKEN`);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getCompetition = async (idUser: number) => {
    try {
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
      await Api.post(`deathmatch`, data, config);
    } catch (error) {
      toastify({
        description: 'Alguma coisa deu errado!',
        status: 'error',
      });
      return error;
    }
  };

  const addPlayersCompetition = async (idCamp: number, data: iPlayers[]) => {
    try {
      if (data.length === 4 || data.length === 8 || data.length === 16) {
        const game = await Api.get(`deathmatch/${idCamp}`);
        game.data.players = data;

        const createGames = [];
        data.sort(() => Math.random() - 0.5);

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
        toastify({
          description: 'Quantidade de jogadores errada! 4 ou 8 ou 16!',
          status: 'error',
        });
      }
    } catch (error) {
      toastify({
        description: 'Alguma coisa deu errado!',
        status: 'error',
      });
      return error;
    }
  };

  const winnerPlayerCompetition = async (
    idCamp: number,
    round: number,
    key: number,
    winnerPlayer: iPlayers,
  ) => {
    try {
      const game = await Api.get(`deathmatch/${idCamp}`);

      if (game.data.games[round - 1].length >= key) {
        game.data.games[round - 1][key - 1].winner = winnerPlayer;
        if (
          !game.data.games[round - 1].find(
            (element: { winner: string }) => element.winner === '',
          ) &&
          game.data.games[round - 1].length > 1
        ) {
          toastify({
            description: `Round ${round}° acabou!`,
            status: 'success',
          });
          setIsCreateRound(!isCreateRound);
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
          toastify({
            description: `Torneio Acabou!`,
            status: 'success',
          });
          setIsCreateRound(!isCreateRound);
        }
        await Api.put(`deathmatch/${idCamp}`, game.data, config);
      } else {
        toastify({
          description: `Essa key ${key} não existe no ${round}° round!`,
          status: 'error',
        });
      }
    } catch (error) {
      toastify({
        description: 'Alguma coisa deu errado!',
        status: 'error',
      });
      return error;
    }
  };

  const deleteCompetition = async (id: number) => {
    try {
      await Api.delete(`deathmatch/${id}`, config);
      const newListCamp = camp?.filter((e: iCamp) => e.id !== idCamp);
      setCamp(newListCamp);
    } catch (error) {
      toastify({
        description: 'Alguma coisa deu errado!',
        status: 'error',
      });
      return error;
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
        isCreateRound,
      }}
    >
      {children}
    </CampConext.Provider>
  );
};
