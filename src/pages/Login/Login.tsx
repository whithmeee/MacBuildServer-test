import styles from "./Login.module.css";
import LoginSvg from "../../assets/login.jpg";
import Button from "../../components/UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { addToken } from "../../redux/user.slice";

export interface LoginForm {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

const Login = () => {
    const [error, setError] = useState<string | null>("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSumbit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        await getUserToken(email.value, password.value);
    };

    const getUserToken = async (email: string, password: string) => {
        try {
            const { data } = await axios.post(
                "https://46d567239b49bc07.mokky.dev/auth",
                {
                    email,
                    password,
                }
            );
            dispatch(addToken(data.token));
            navigate("/");
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
            }
        }
    };
    return (
        <div className={styles["login"]}>
            <div className={styles["login-content"]}>
                <div className={styles["login-img"]}>
                    <img src={LoginSvg} alt="Login" />
                </div>

                <div className={styles["login-item"]}>
                    <h2 className={styles["login-title"]}>Вход</h2>

                    {error && (
                        <div
                            style={{ color: "red", textTransform: "uppercase" }}
                        >
                            {error}
                        </div>
                    )}
                    <form
                        onSubmit={handleSumbit}
                        className={styles["login-form"]}
                    >
                        <div className={styles["login-email"]}>
                            <label htmlFor="">Ваш email</label>
                            <Input
                                placeholder="Email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className={styles["login-password"]}>
                            <label htmlFor="">Ваш пароль</label>
                            <Input
                                placeholder="Пароль"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <Button children={"Sign in"} />
                    </form>

                    <div className={styles["no-login"]}>
                        <p>Нет аккаунта?</p>
                        <Link to={"/register"}>Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
