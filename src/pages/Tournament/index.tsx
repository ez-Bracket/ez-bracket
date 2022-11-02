import {
  Bracket,
  IRoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  IRenderSeedProps,
} from 'react-brackets';

export const Tournament = () => {
  const rounds: IRoundProps[] = [
    {
      title: 'Round one',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [
            { name: 'Team A', id: 1, score: 10 },
            { name: 'Team B', score: 8 },
          ],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: 'Team E' }, { name: 'Team F' }],
        },
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team H' }],
        },
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team H' }],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team H' }],
        },
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team H' }],
        },
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team H' }],
        },
      ],
    },
    {
      title: 'Round Two',
      seeds: [
        {
          id: 9,
          date: new Date().toDateString(),
          teams: [
            {
              name: 'Team A',
              img: 'https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png',
            },
            { name: 'Team C' },
          ],
        },
        {
          id: 10,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team F' }],
        },
        {
          id: 11,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team F' }],
        },
        {
          id: 12,
          date: new Date().toDateString(),
          teams: [{ name: 'Team G' }, { name: 'Team F' }],
        },
      ],
    },
    {
      title: 'Round Three',
      seeds: [
        {
          id: 13,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
        {
          id: 14,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
      ],
    },
    {
      title: 'Final',
      seeds: [
        {
          id: 15,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
      ],
    },
  ];

  const CustomSeed = ({
    seed,
    breakpoint,
    roundIndex,
    seedIndex,
  }: IRenderSeedProps) => {
    // breakpoint passed to Bracket component
    // to check if mobile view is triggered or not

    // mobileBreakpoint is required to be passed down to a seed
    return (
      <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        {/* Tentar remover bgColor e box shadow */}
        <SeedItem>
          <div className="bg-green-100 h-[120px] flex flex-col justify-evenly">
            <SeedTeam style={{ color: 'green', fontSize: '16px' }}>
              <img
                className="w-8 h-8 rounded-full"
                src={seed.teams[0].img}
                alt=""
              />
              {seed.teams[0]?.name || 'NO TEAM '}
              <p>{seed.teams[0].score}</p>
            </SeedTeam>
            <SeedTeam style={{ color: 'red', fontSize: '16px' }}>
              <img
                className="w-8 h-8 rounded-full"
                src={seed.teams[0].img}
                alt=""
              />
              {seed.teams[1]?.name || 'NO TEAM '}
              <p>{seed.teams[1].score}</p>
            </SeedTeam>
          </div>
        </SeedItem>
      </Seed>
    );
  };

  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
};
