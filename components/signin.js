"use client"
import React from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { Button } from './ui/button';

export default function SignInBTN() {

    const { data: session } = useSession();
    
        if (session && session.user) {
            return (
                <div className="flex gap-4 ml-auto">
                    <p className='text-purple-300'>{session.user.name}</p>
                    <Button onClick={() => signOut()}>Sign Out</Button>
                </div>
            );
        }
    return (
        <Button onClick={() => signIn()}>Sign In</Button>
    );
}