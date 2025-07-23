const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Load from environment variables (recommended)
const SUPABASE_URL = 'https://uklnkcfkanfwzgxzivht.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbG5rY2ZrYW5md3pneHppdmh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzI3Mzc2NywiZXhwIjoyMDY4ODQ5NzY3fQ.g15vNNvJhPKkTdTZPCIHKjWDpMm1taqhNFzCcRqOeV4'; // DO NOT EXPOSE THIS TO FRONTEND
const SUPABASE_JWT_SECRET = '4ab7a373-b465-42a0-beff-0238eded1d65'; // Found in Supabase settings

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Root route will show index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));