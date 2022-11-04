import React from 'react';

import { Button } from '@chakra-ui/react';
import { BsController, BsCalendarDate, BsInfoCircle } from 'react-icons/bs';

interface ICampInfoProps {
  name: string;
  number_of_players: string;
  date: string;
  status: boolean;
}

const CampInfo = ({
  name,
  number_of_players,
  date,
  status,
}: ICampInfoProps) => {
  return (
    <div className="w-full flex laptop:flex-row flex-col flex-wrap laptop:justify-start laptop:gap-8 laptop:items-center relative">
      <div>
        {status ? (
          <span className="absolute text-green-100 -top-4 text-base font-normal">
            Ativo
          </span>
        ) : (
          <span className="absolute text-error-100 -top-4 text-base font-normal">
            Inativo
          </span>
        )}
        <h1 className="text-4xl text-white font-semibold">{name}</h1>
      </div>
      <div className="mt-4 laptop:mt-0">
        <h2 className="text-base text-white font-normal">
          <BsController className="inline-block text-xl mr-1 text-green-100" />{' '}
          Quantidade de participantes:{number_of_players}
        </h2>
      </div>
      <div className="flex gap-8">
        <h2 className="text-base text-white leading-[60px] font-normal">
          <BsCalendarDate className="inline-block text-base mr-1 text-green-100" />{' '}
          {date}
        </h2>
        <Button fontWeight={400} color="white" variant="link">
          <BsInfoCircle className="inline-block text-xl mr-2 text-green-100" />{' '}
          Informações
        </Button>
      </div>
    </div>
  );
};

export default CampInfo;