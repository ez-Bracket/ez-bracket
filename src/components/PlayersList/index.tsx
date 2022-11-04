import React from 'react';
import dashboard from '../../assets/dashboard.jpg';

const PlayersList = () => {
  return (
    <div className="bg-gray-200 w:full tablet:w-[400px] p-8 rounded-[10px] mb-[100px] tablet:mb-0">
      <h3 className="text-green-100 text-2xl mb-3">Participantes</h3>
      <ul>
        <li>
          <img
            className=" inline-block w-[30px] h-[30px] rounded-full mr-2"
            src={dashboard}
            alt=""
          />
          <span className="font-base text-gray-100">Jogador 1</span>
        </li>
      </ul>
    </div>
  );
};

export default PlayersList;
