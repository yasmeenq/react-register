import { Button, TextField } from "@mui/material";
import css from "./Register.module.css";
import { useState } from "react";
import { UserModel } from "../../Models/UserModel";

export function Register(): JSX.Element {

    const [user, setUser] = useState<UserModel>(new UserModel());
    const [disable, setDisable] = useState<boolean>(true);

    function onFormChange(event: any) {
        if (event.target.name === "firstName") {
            user.firstName = event.target.value;
        }
        if (event.target.name === "lastName") {
            user.lastName = event.target.value;
        }
        if (event.target.name === "email") {
            user.email = event.target.value;
        }
        if (event.target.name === "password") {
            user.password = event.target.value;
        }
        setUser({ ...user });
        finish();
    }
    
    function finish(){
        if(user?.email?.length > 10 && user?.password?.length >= 6 && user?.firstName?.length>= 2 && user?.lastName?.length > 2){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    }

    return (
        <div className={css.Register}>
            <h1>Register:</h1>
            <div className={css.RegisterForm}>

                <TextField
                    id="outlined-basic"
                    label="firstName"
                    variant="outlined"
                    name="firstName"
                    onChange={onFormChange}
                />
                <TextField
                    id="outlined-basic"
                    label="lastName"
                    variant="outlined"
                    name="lastName"
                    onChange={onFormChange}
                />
                <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    name="email"
                    onChange={onFormChange}
                />
                <TextField
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    name="password"
                    onChange={onFormChange}
                />

                <Button disabled={disable} variant="contained">
                    Register
                </Button>
            </div>
        </div>
    );
}
