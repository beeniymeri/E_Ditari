export interface User{
    id: string;
    username: string;
    displayName: string;
    token: string;
    roli?: number;
    image?: string;
}

export interface Profile{
    id: string;
    username: string;
    emri: string;
    mbiemri: string;
    adresa: string;
    qyteti: string;
    numriKontaktues: string;
}

export interface UserFormValues{
    email: string;
    password: string;
    roli?: number;
    displayName?: string;
    username?: string;
}