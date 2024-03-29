import { createContext, ReactNode, useState } from 'react';
import { CustomToast } from '../components/Toast';

// Utilities
import { Api } from '../services/Api';

export interface ICampProvidertProps {
  children: ReactNode;
}

interface ICampConext {
  getCompetition: (idUser: number) => void;
  camp: ICamp[];
  createCompetition: (data: ICampRegister) => void;
  deleteCompetition: (idCamp: number) => void;
  addPlayersCompetition: (idCamp: number, data: IPlayers[]) => void;
  winnerPlayerCompetition: (
    idCamp: number,
    round: number,
    key: number,
    winnerPlayer: IPlayers,
  ) => void;

  setIdCamp: (id: number) => void;
  idCamp: number;
  isCreateRound: boolean;
}

interface IPlayers {
  player: string;
  playerImg?: string;
}

export interface ICamp {
  id: number;
  idUser: number;
  name: string;
  players: IPlayers[];
  status: boolean;
  winner: IPlayers;
  games: string[][] | any;
  number_of_players: number;
  description: string;
  date?: string;
}

export interface ICampRegister {
  idUser: number;
  name: string;
  status: boolean;
  winner: IPlayers | null;
  games: string[][];
  players: IPlayers[];
  number_of_players: string;
  date?: string;
  description?: string;
}

export const CampConext = createContext<ICampConext>({} as ICampConext);

export const CampProvider = ({ children }: ICampProvidertProps) => {
  const [camp, setCamp] = useState<ICamp[]>([]);
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
        allGames.data.filter((element: ICamp) => element.idUser === idUser),
      );
    } catch (error) {
      return error;
    }
  };

  const createCompetition = async (data: ICampRegister) => {
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

  const addPlayersCompetition = async (idCamp: number, data: IPlayers[]) => {
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
    winnerPlayer: IPlayers,
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
      const newListCamp = camp?.filter((e: ICamp) => e.id !== idCamp);
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
