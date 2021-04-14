import { FormCard } from "../components/FormCard";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Buttons } from "../components/Buttons";
import { apiRoute } from "../config/apiRoute";
import Router from 'next/router'
import { setCookie } from "../lib/cookies";

export const LoginContainer = () => {
    const [state, setState] = useState({
        username: "",
        password: ""
    });
    const [loader, setLoader] = useState(false);
    const onSubmit = (evt) => {
        evt.preventDefault();
        setLoader(true);
        const page = "https://www.codeunic.com/dashboard"
        const otherPage = false;
        fetch(apiRoute.get("login"), {
            body: JSON.stringify(state),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(rs => rs.json())
            .then(({data, message}) => {
                setLoader(false);
                if (!data && message) {
                    alert(message);
                    return;
                }
                setState({username: "", password: ""});
                if (!otherPage) {
                    setCookie("token", data.token, 1);
                    setCookie("user", JSON.stringify(data.user), 1);
                    Router.push("/dashboard");
                } else {
                    window.location.href = `${page}?token=${data.token}?token_type=${data.token_type}`;
                }
            });
    };
    const onChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value,
        })
    }
    return (
        <>
            <Logo/>
            <FormCard onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name={"username"}
                    placeholder={"Email"}
                    value={state.username}
                    type={"email"}
                />
                <Input
                    onChange={onChange}
                    name={"password"}
                    placeholder={"Password"}
                    value={state.password}
                    type={"password"}
                />
                <Button type="submit" loader={loader}>
                    Login
                </Button>
            </FormCard>
            <Buttons login/>
        </>
    );
};
