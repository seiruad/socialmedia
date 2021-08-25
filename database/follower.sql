
CREATE TABLE follower (
  id uuid DEFAULT uuid_generate_v4 (),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  user_id uuid NOT NULL REFERENCES account(id) ON DELETE CASCADE,
  follower_id uuid NOT NULL REFERENCES account(id) ON DELETE CASCADE,

  PRIMARY KEY ("id"),
  UNIQUE(user_id, follower_id)
);
