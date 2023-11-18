const Register = () => {
    return (
        <div className="border">
            <div className="mx-auto md:h-1/2">
                <h3 className="text-3xl my-5">Please Register</h3>
                <form action="">
                    <input className="w-3/4" type="email" name="email" id="" />
                    <br />
                    <input
                        className="my-4 w-3/4"
                        type="password"
                        name="password"
                        id=""
                    />
                    <br />
                    <input type="submit" name="" value="Register" id="" />
                </form>
            </div>
        </div>
    );
};

export default Register;
