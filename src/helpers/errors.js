module.exports = {
    MissingPropertyError,
    InvalidPropertyError,
    InternalServerError,
    IllegalResourceCreationError,
    NotFoundError
}

class MissingPropertyError extends Error {
    constructor(property, value) {
        if (!property){
            super(`One or more properties are missing, received: ${value}`);
        } else {
            super(`${property} is required, received: ${value}.`);
        }
        this.status = 400;
        this.name = "MissingPropertyError";
    }
}

class InvalidPropertyError extends Error {
    constructor(message, value) {
        super(`${message}, received ${value}.`);
        this.status = 400;
        this.name = "InvalidPropertyError";
    }
}

class InternalServerError extends Error {
    constructor(message, value) {
        super(`${message}, received ${value}`);
        this.stutus = 500;
        this.name = "InternalServerError";
    }
}

class IllegalResourceCreationError extends Error {
    constructor(property, value) {
        super(`Resource with given ${property} already exists, received ${value}.`);
        this.status = 400;
        this.name = "IllegalResourceCreationError";
    }
}

class NotFoundError extends Error {
    constructor(property, value) {
        if (!value) {
            super(`${property[0].toUpperCase() + property.slice(1)} with given identifiers doesn't exists.`)
        } else {
            super(`${property[0].toUpperCase() + property.slice(1)} with given identifier doesn't exists, received ${value}.`);
        }
        this.status = 404;
        this.name = "NotFoundError";
    }
}
