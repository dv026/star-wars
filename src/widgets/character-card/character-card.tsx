import { FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import { ICharacter } from "../../entities/character/model";
import { styles } from "./styles";
import { getCharacterId } from "../../app/utils/get-character-id";

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const characterId = getCharacterId(character.url);

  return (
    <div css={styles.card}>
      <Link to={`/character/${characterId}`} css={styles.link}>
        <Card title={character.name} hoverable>
          <p>{character.name}</p>
          <p>{character.birth_year}</p>
          <p>Card content</p>
        </Card>
      </Link>
    </div>
  );
};
