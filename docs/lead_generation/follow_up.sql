-- 1. Create the table with the correct UUID extension
create table leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null unique,
  status text default 'new', -- new, downloaded, contacted
  last_download_at timestamp with time zone,
  followup_sent boolean default false
);

-- 2. Enable Row Level Security
alter table leads enable row level security;

-- 3. Policy: Allow the website to insert new leads
create policy "Allow public inserts" 
on leads for insert 
to anon, authenticated 
with check (true);

-- 4. Policy: Allow the API to update lead status (used for tracking downloads)
create policy "Allow status updates via API" 
on leads for update 
to anon, authenticated 
using (true) 
with check (true);

-- 5. Policy: Protect the data (Only you can see the list in the dashboard)
create policy "Restrict reading to service role only" 
on leads for select 
to service_role 
using (true);

-- 6. Index on email for faster lookups
create unique index idx_leads_email on leads(email);

-- 7. Add a column to track download tokens (for secure tracking of PDF downloads)
alter table leads add column download_token uuid default gen_random_uuid();
