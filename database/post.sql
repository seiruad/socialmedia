
CREATE TABLE post (
  id uuid DEFAULT uuid_generate_v4 (),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  content VARCHAR(255) NOT NULL,
  account_id uuid NOT NULL REFERENCES account(id) ON DELETE CASCADE,

  PRIMARY KEY ("id") 
);
