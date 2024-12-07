
// src/lib/auth.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Your Supabase URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to sign out the user
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Error signing out:', error);
    }
};

// Function to sign in the user
export const signIn = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
        console.error('Error signing in:', error);
    }
    return user;
};

// Function to get the current user
export const getCurrentUser  = () => {
    return supabase.auth.user();
};

// Function to listen for authentication state changes
export const onAuthStateChange = (callback) => {
    return supabase.auth.onAuthStateChange((event, session) => {
        callback(event, session);
    });
};