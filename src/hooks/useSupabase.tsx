import React from 'react'
import { createClient, User, Session } from '@supabase/supabase-js'
import { OAuthProvider } from '@/lib/types';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
interface SupabaseAuth {
    signInWithEmail: (email: string, password: string) => Promise<void>,
    signInWithOAuth: (provider: OAuthProvider) => Promise<void>,
    signUpWithEmail: (email: string, password: string) => Promise<void>,
    resetPassword: (user: string) => Promise<void>,
    updatePassword: (password: string) => Promise<void>,
    signOut: () => Promise<void>,
    fetchSession: () => Promise<void>,
    fetchUser: () => Promise<void>,
}
    
export function useSupabase(): [User, Session, boolean, string, SupabaseAuth] {
    const [user, setUser] = React.useState<User>();
    const [session, setSession] = React.useState<Session>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [authError, setAuthError] = React.useState<string>('');

    const Supabase: SupabaseAuth = {
        signInWithEmail: async (email: string, password: string): Promise<void> => {
            setLoading(true)
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) {
                setAuthError(error.message)
                return
            }

            setUser(data.user!)
            setAuthError('')
            setSession(data.session!)
            setLoading(false)
        },

        signInWithOAuth: async (provider: OAuthProvider): Promise<void> => {
            setLoading(true)
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider
            })

            if (error) {
                setAuthError(error.message)
                return
            }

            setAuthError('')
            setLoading(false)
            console.log(data)
        },

        signUpWithEmail: async (email: string, password: string): Promise<void> => {
            setLoading(true)
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            })

            if (error) {
                setAuthError(error.message)
                return
            }

            setUser(data.user!)
            setAuthError('')
            setSession(data.session!)
            setLoading(false)
        },

        resetPassword: async (user: string) => {
            await supabase.auth.resetPasswordForEmail(user, {
                redirectTo: 'https://next-fullstack-app-one.vercel.app/account/update-password',
            })
        },

        updatePassword: async (password: string) => {
            await supabase.auth.updateUser({
                password,
            })
        },

        signOut: async () => {
            const { error } = await supabase.auth.signOut()
            
            if (error) {
                setAuthError(error.message)
                return
            }

            setAuthError('')
        },

        fetchSession: async (): Promise<void> => {
            setLoading(true)
            const { data, error } = await supabase.auth.getSession()

            if (error) {
                setAuthError(error.message)
                return
            }

            setAuthError('')
            setSession(data.session!)
            setLoading(false)
        },

        fetchUser: async (): Promise<void> => {
            const { data: { user } } = await supabase.auth.getUser()

            if (!user) {
                setAuthError("User not found.")
                return
            }

            setAuthError('')
            setUser(user)
            setLoading(false)
        }
    }
    

    return [user!, session!, loading, authError, Supabase]
}

