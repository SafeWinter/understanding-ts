function generateError(msg?: string): never {
    throw new Error(msg);
}

generateError();

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'guest';
}

let input = ''
const didProvideInput = input ?? false;
