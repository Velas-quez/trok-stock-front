import { TextField, TextFieldProps } from '@mui/material';
import { defaultTheme } from 'styles';

export type TextInputProps = TextFieldProps & {
    color?: keyof typeof defaultTheme.colors;
};

const TextInput: React.FC<TextInputProps> = ({
    color = 'primary',
    ...props
}) => {
    const borderColor = defaultTheme.colors[color];
    return (
        <TextField
            {...props}
            sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    '& fieldset': {
                        borderColor: borderColor.main // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: borderColor.light // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: borderColor.main // Border color when focused
                    }
                },
                '& .MuiInputLabel-root': {
                    // Label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: borderColor.main // Label color when focused
                }
            }}
        />
    );
};

export default TextInput;
