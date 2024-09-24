const DEFAULT_VALIDATION = {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
    lowercase: true,
    trim: true,
}

const EMAIL = {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),	// email validation
    lowercase: true,
    trim: true,
    unique: true,
}

const PHONE = {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),	// phone number validation
}

// export the  EMAIL, DEFAULT_VALIDATION
module.exports = { EMAIL, DEFAULT_VALIDATION, PHONE }