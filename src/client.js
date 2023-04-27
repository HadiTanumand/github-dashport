import {cerateClient, createClient} from '@supabase/supabase-js';

const supabase = createClient('https://sfkonmdgeykznmvcyzpm.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNma29ubWRnZXlrem5tdmN5enBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0OTMyNjQsImV4cCI6MTk5ODA2OTI2NH0.OlWuupdDHRfyQHOzICcu1nfKmo5aT-J26_JedrkDZls');


export {
  supabase
}