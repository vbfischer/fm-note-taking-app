import { signIn } from "@/auth";

const SignIn = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1>Hello</h1>
            <form
                action={async (formData) => {
                    "use server";
                    await signIn("credentials", formData);
                }}
            >
                <label htmlFor="email">
                    Email
                    <input name="email" id="email" />
                </label>
                <label htmlFor="password">
                    Password
                    <input name="password" id="password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
