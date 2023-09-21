import { useNavigate } from "react-router-dom";
import { StyledButton } from "./style";

interface Props {
  text: string;
  styles?: React.CSSProperties;
  path?: string;
}

export const ButtonSubmit = ({ text, styles, path }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledButton type="submit" style={styles} onClick={() => navigate(path)}>
      {text}
    </StyledButton>
  );
};
