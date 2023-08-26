async function emailValidation(body) {
    const { name, surname, email, message } = body;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let isValid = {
        validation: true,
        message: "Validation successful",
    }

    if (!name) {
        isValid.validation = false;
        isValid.message = "Username is required!";
    }

    if (!surname) {
        isValid.validation = false;
        isValid.message = "Surname is required!";
    }

    if (!email || !(regex.test(email))) {
        isValid.validation = false;
        isValid.message = "Valid email address is required!";
    }

    if (!message) {
        isValid.validation = false;
        isValid.message = "Message is required!";
    }

    return isValid;
}

export { emailValidation }