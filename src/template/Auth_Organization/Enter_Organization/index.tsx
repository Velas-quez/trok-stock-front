import TextInput from 'components/Inputs';
import BaseButton from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import LinedText from 'components/Text';
import * as S from './styles';

const EnterOrganizationTemplate = () => {
    const router = useRouter();

    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Entrar em Organização</S.Title>
                <S.InputDiv>
                    <LinedText>Entrar em Organização</LinedText>
                    <TextInput
                        fullWidth
                        label="Escolha sua Organização"
                        placeholder="Poli Júnior"
                    />
                    <TextInput
                        fullWidth
                        label="Cargo de entrada"
                        placeholder="Membro"
                    />
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/login');
                            }}
                        >
                            Solicitar Entrada
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
                <S.InputDiv>
                    <LinedText>Criar a minha Organização</LinedText>
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/org_auth/register');
                            }}
                        >
                            Criar Organização
                        </BaseButton>
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default EnterOrganizationTemplate;
