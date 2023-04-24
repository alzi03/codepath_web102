import { createClient } from "@supabase/supabase-js";

const API_KEY = import.meta.env.SUPABASE_KEY
const URL = "https://jxnsmlrjyvniktbsyxmo.supabase.co"

export const supabase = createClient(URL, API_KEY)

console.log(supabase)