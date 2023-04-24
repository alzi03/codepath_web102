
import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database

const URL = "https://kxaufeumhwjxxhfkesgs.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4YXVmZXVtaHdqeHhoZmtlc2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyNjE5NzYsImV4cCI6MTk5NjgzNzk3Nn0.GeIqxDBRbD4etaSf3gFBiEnKWHbmhKi-ncEhnhlB6vY"
export const supabase = createClient(URL, API_KEY)


