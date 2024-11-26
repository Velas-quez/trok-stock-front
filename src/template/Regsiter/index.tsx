import TextInput from 'components/Inputs';
import BaseButton, { TextButton } from 'components/Button';
import ToolsLogo from 'components/ToolsLogo';
import { useRouter } from 'next/router';
import * as S from './styles';

const RegisterTemplate = () => {
    const router = useRouter();
    return (
        <S.Container>
            <S.TitleDiv>
                <ToolsLogo />
            </S.TitleDiv>
            <S.MainDiv>
                <S.Title>Faça seu cadastro</S.Title>
                <S.InputDiv>
                    <TextInput
                        fullWidth
                        label="Nome completo"
                        placeholder="Thiago Velasquez"
                    />
                    <TextInput
                        fullWidth
                        label="Email"
                        placeholder="e.g.c.t@mail.com"
                    />
                    <TextInput fullWidth label="Senha" />
                    <TextInput fullWidth label="Confirme a senha" />
                    <S.ButtonDiv>
                        <BaseButton
                            onClick={() => {
                                router.push('/login');
                            }}
                        >
                            Continuar
                        </BaseButton>
                        <TextButton
                            onClick={() => {
                                router.push('/login');
                            }}
                            text="Já possui conta? Fazer Login"
                        />
                    </S.ButtonDiv>
                </S.InputDiv>
            </S.MainDiv>
        </S.Container>
    );
};

export default RegisterTemplate;
