import { React, useState, useEffect } from "react";
import userApi from "../api/userApi"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import tools from "../tools";
import bcrypt from 'bcryptjs';
import { Link } from "react-router-dom";

const schema = yup.object().shape({
    password: yup.string().min(8, 'Password must be at least 8 characters').trim("No blank").required("Password is required"),
    repassword: yup.string().min(8, 'Re-password must be at least 8 characters').trim("No blank").required("Re-password is required"),
    current: yup.string().min(8, 'Current password must be at least 8 characters').trim("No blank").required("Current password is required"),
});

const Profile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [profile, setProfile] = useState([]);
    // const [messProfile, setMessProfile] = useState(false);
    // const [errorMessProfile, setErrorMessProfile] = useState(false);
    const [mess, setMess] = useState(false);
    const [errorMess, setErrorMess] = useState(false);
    var userLogin = "";
    if (localStorage.getItem("token")) {
        userLogin = tools.parseJwt(localStorage.getItem("token")).sub;
    } else {
        userLogin = "";
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await userApi.profile({
                    username: userLogin
                });
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfile();
    }, []);

    const changePassword = async (data) => {
        setMess(false);
        setErrorMess(false);
        const match = bcrypt.compareSync(data.current, profile.password);

        if (match) {
            if (data.password !== null && data.password === data.repassword) {
                try {
                    const response = await userApi.changePassword({
                        username: userLogin,
                        password: data.password
                    });
                    if (response.status === 200) {
                        setMess(true)
                    }
                } catch (error) {
                    console.error(error);
                    setErrorMess(true);
                }
            } else {
                console.log("re password is not match");
                setErrorMess(true);
            }
        } else {
            console.log("current password is not match");
            setErrorMess(true);
        }
    };

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="form-group mb-1">
                        <label htmlFor="exampleInputUsername">Username</label>
                        <input
                            {...register("username")}
                            type="text"
                            className={`form-control ${errors.username ? 'is-invalid' : 'is-valid'}`}
                            id="exampleInputUsername"
                            defaultValue={profile.username}
                            placeholder="Username"
                            disabled
                        />
                        <p className="text-danger">{errors.username?.message}</p>
                    </div>
                    <div className="form-group mb-1">
                        <label htmlFor="exampleInputName">Name</label>
                        <input
                            {...register("name")}
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : 'is-valid'}`}
                            id="exampleInputName"
                            defaultValue={profile.name}
                            placeholder="Name"
                            disabled
                        />
                        <p className="text-danger">{errors.name?.message}</p>
                    </div>
                    <div className="form-group mb-1">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={profile.email} disabled />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mb-1">
                        <Link to="change-profile">Change Profile</Link>
                    </div>
                    <form onSubmit={handleSubmit(changePassword)}>
                        <div className="form-group mb-1">
                            <label htmlFor="current-password">Current Password</label>
                            <input
                                {...register("current")}
                                type="password"
                                className={`form-control ${errors.current ? 'is-invalid' : 'is-valid'}`}
                                id="current-password"
                                placeholder="Current Password"
                            />
                            <p className="text-danger">{errors.current?.message}</p>
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputPassword1">Change Password</label>
                            <input
                                {...register("password")}
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`}
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                            <p className="text-danger">{errors.password?.message}</p>
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputPassword2">Rechange Password</label>
                            <input
                                {...register("repassword")}
                                type="password"
                                className={`form-control ${errors.repassword ? 'is-invalid' : 'is-valid'}`}
                                id="exampleInputPassword2"
                                placeholder="Re-Password"
                            />
                            <p className="text-danger">{errors.repassword?.message}</p>
                        </div>
                        {mess ? (
                            <div className="alert alert-success" role="alert">
                                Change password successfully
                            </div>
                        ) : ""}
                        {errorMess ? (
                            <div className="alert alert-danger" role="alert">
                                Current password or re-password is not correct
                            </div>
                        ) : ""}
                        <button type="submit" className="btn btn-primary my-2">Change Password</button>
                    </form>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default Profile
