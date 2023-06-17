import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    text: string;
    navigatePath: string;
}

const ButtonComponent = (props: ButtonProps) => {
    const { text, navigatePath } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClick = () => {
        navigate(navigatePath);
    }

    return (
        <Button variant="contained" onClick={onClick}>
            {t(text)}
        </Button>
    );
}

export default ButtonComponent;