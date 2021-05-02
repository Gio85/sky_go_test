export const getImageForResult = ({
  profile_path,
  backdrop_path,
  poster_path,
  known_for
}: {
  profile_path: string
  backdrop_path: string
  poster_path: string
  known_for: any[]
}) =>
  profile_path || // person
  backdrop_path || // movie
  poster_path || // movie
  (known_for && (known_for.find((kf) => kf.backdrop_path) || {}).backdrop_path) // person
