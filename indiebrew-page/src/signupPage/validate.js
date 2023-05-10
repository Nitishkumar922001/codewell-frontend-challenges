export const validate = (Data) => {
    let error = {}
    if (!Data.name)
        error.name = 'Name cannot be empty'
    if (!Data.email)
        error.email = 'Email cannot be empty'
    else if (!Data.email.match(/\S+@\S+\.\S+/)) {
        error.email = 'please Enter valid Email'
    }
    if(!Data.password)
    error.password='password cannot be empty'
    else if(!Data.password.match(/^(?=[\D])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}/))
    {
        error.password='please enter valid password'
    }
    if(!Data.termsConditions)
    {
        error.termsConditions='please agree terms and conditions'
    }
return error;
}
