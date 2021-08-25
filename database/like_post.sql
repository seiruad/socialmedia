
CREATE TABLE like_post (
  id uuid DEFAULT uuid_generate_v4 (),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  user_id uuid NOT NULL REFERENCES account(id) ON DELETE CASCADE,
  post_id uuid NOT NULL REFERENCES post(id) ON DELETE CASCADE,

  PRIMARY KEY ("id"),
  UNIQUE(user_id, post_id)
);
