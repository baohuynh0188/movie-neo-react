import { React, useState, useEffect } from "react";
import userApi from "../api/userApi"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import tools from "../tools";

const schema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 8 characters').trim("No blank").required("Name is required"),
});

const ChangeProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [profile, setProfile] = useState([]);
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

    const changeProfile = async (data) => {
        setMess(false);
        setErrorMess(false);
        try {
            const response = await userApi.changeProfile({
                username: userLogin,
                name: data.name
            });
            if (response.status === 200) {
                setMess(true)
            }
        } catch (error) {
            console.error(error);
            setErrorMess(true);
        }
    }

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit(changeProfile)}>
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
                            />
                            <p className="text-danger">{errors.name?.message}</p>
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={profile.email} disabled />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        {mess ? (
                            <div className="alert alert-success" role="alert">
                                Change successfully
                            </div>
                        ) : ""}
                        {errorMess ? (
                            <div className="alert alert-danger" role="alert">
                                Something went wrong
                            </div>
                        ) : ""}
                        <button type="submit" className="btn btn-primary my-2">Change Profile</button>
                    </form>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default ChangeProfile
