function log(message: string): void {
    console.log(message);
}

function logAndThrow(message: string): never {
    console.log(message);
    throw new Error(message);
}