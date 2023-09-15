import { CharacterList } from "../../widgets/character-list/character-list";
import { SearchBar } from "../../widgets/search-bar/search-bar";
import { styles } from "./styles";

export const HomePage = () => {
  return (
    <div css={styles.homePage}>
      <SearchBar />
      <CharacterList />
    </div>
  );
};
