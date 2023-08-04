type Track = {
  track: string;
};

type Genre = {
  tracks: Track[];
};

type GenreProps = Genre[];

export const videoIdList = (genreList: GenreProps): string[] => {
  return genreList.flatMap((genre: Genre) =>
    genre.tracks.map((track: Track) => track.track)
  );
};
