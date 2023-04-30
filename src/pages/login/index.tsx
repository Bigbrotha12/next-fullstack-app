
export default function LoginPrompt() {
    return (
        <form onSubmit={() => alert("Logged In")}>
            <h3>Login Prompt</h3>
            <label htmlFor='username-input' />
            <input id='username-input' name='username-input' type='text' placeholder="Username" />
            <input type='password' placeholder="password" />
            <input type='submit'>Sign In</input>
            
        </form>
    )
};