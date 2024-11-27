import * as S from './styles';

type CardProps = {
    title: string;
    detail?: string;
};

const TextCard: React.FC<CardProps> = ({ title, detail }) => {
    return (
        <S.Container>
            <S.MainText>{title}</S.MainText>
            {detail && <S.Detail>{detail}</S.Detail>}
        </S.Container>
    );
};

export default TextCard;
