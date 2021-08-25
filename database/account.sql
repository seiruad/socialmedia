CREATE TABLE account (
  id uuid DEFAULT uuid_generate_v4 (),
  login VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  public_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

  image_color VARCHAR(255),
  about VARCHAR(400),

  PRIMARY KEY ("id"),
  UNIQUE("login")
);
