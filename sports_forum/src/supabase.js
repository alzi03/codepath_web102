import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4bnNtbHJqeXZuaWt0YnN5eG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NzY1ODcsImV4cCI6MTk5NzI1MjU4N30.emFsePD476m6BL7T4Ztmls6pe3Dfx_KM1BgGAtRFWZI"
const SUPABASE_URL = "https://jxnsmlrjyvniktbsyxmo.supabase.co"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
console.log(supabase)
