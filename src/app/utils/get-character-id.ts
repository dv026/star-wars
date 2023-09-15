// апи не предоставляет отдельное id для персонажа
// поэтому хотим его брать из урла
// для этого напишем маленький хелпер
export const getCharacterId = (url: string) => {
  // get /1/
  const path = url.split("https://swapi.dev/api/people/")[1];
  // get number
  return path?.slice(0, path.length - 1);
};
