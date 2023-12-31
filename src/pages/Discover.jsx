import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = 'Pop';
  console.log(data); //CONSOLE.LOG DE DATA PARA VER SI ERA UN ARRAY.

  if(isFetching) return <Loader title='Loading songs...' />;
  if(error) return <Error />;

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 '>
        <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
        <select
          onChange={() => { }}
          value=""
          className='bg-black text-gray-300 p-3text-sm rounded-lg outline-none sm:mt-0 mt-5'
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.countries?.map((song, i) => (
          <SongCard
            key={data.countries.id} //ANTES ERA SONG.KEY
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover;
