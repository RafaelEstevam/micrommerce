'use server'

import { cookies } from "next/headers";

export async function setCookies({k, v}) {
    cookies().set({
        name: k,
        value: v,
        httpOnly: true,
        path: '/',
    });
}