import { React, useState, useEffect } from "react";
import userApi from "../api/userApi"
import { useForm } from "react-hook-form";
import tools from "../tools";

const Profile = () => {
    const { register, handleSubmit } = useForm();
    const [profile, setProfile] = useState([]);
    const [mess, setMess] = useState(false);
    let userLogin = "";
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
            }
        }
    };

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit(changePassword)}>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputUsername">Username</label>
                            <input type="text" className="form-control" id="exampleInputUsername" placeholder={profile.username} disabled />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" placeholder={profile.name} disabled />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={profile.email} disabled />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputPassword1">Change Password</label>
                            <input {...register("password", { required: true, minlength: 8, maxLength: 20 })} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" minlength="8" maxLength="20" required />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="exampleInputPassword2">Rechange Password</label>
                            <input {...register("repassword", { required: true, minlength: 8, maxLength: 20 })} type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-password" minlength="8" maxLength="20" required />
                        </div>
                        {mess ? (
                            <div className="alert alert-success" role="alert">
                                Change password successfully
                            </div>
                        ) : ""}
                        <button type="submit" className="btn btn-primary my-2">Change</button>
                    </form>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default Profile
