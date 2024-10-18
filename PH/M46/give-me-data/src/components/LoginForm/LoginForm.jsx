const LoginForm = () => {

    const formSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        console.log("form clicked");
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(address);
    }

    return (
        <>
            <div>
                <form onSubmit={formSubmit} className="space-y-5">
                    <input name="name" required type="text" placeholder="Type your name here" className="input input-bordered w-full max-w-xs " />
                    <br />
                    <input name="email" required type="email" placeholder="Type your email here" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input name="phone" required type="tel" placeholder="Type your number here" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input name="address" required type="text" placeholder="Type your address here" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <button type="submit" className="btn mt-4">Submit</button>
                </form>
            </div>
        </>
    )


}


export default LoginForm;