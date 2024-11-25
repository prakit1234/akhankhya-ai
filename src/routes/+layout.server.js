import { supabase } from '$lib/auth';

export async function load({ cookies }) {
  const token = cookies.get('sb-access-token');
  const { data: user, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return { user: null };
  }

  return { user };
}
