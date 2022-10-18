export default async function getShows() {
  const url = 'https://api.tvmaze.com/shows';
  const response = await fetch(url);
  const movies = await response.json();
  return movies;
}
