-- Create companies table
CREATE TABLE companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar NOT NULL,
  email varchar,
  phone varchar,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX idx_companies_name ON companies(name);
CREATE INDEX idx_companies_created_at ON companies(created_at);

-- Add RLS policies for multi-tenant security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view companies they belong to
CREATE POLICY "Users can view their own company"
  ON companies
  FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT company_id FROM users
      WHERE users.id = auth.uid()
    )
  );

-- Allow authenticated users to update their own company
CREATE POLICY "Company admins can update their company"
  ON companies
  FOR UPDATE
  TO authenticated
  USING (
    id IN (
      SELECT company_id FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'admin'
    )
  );

-- Allow company creation (typically done during user registration)
CREATE POLICY "Allow company creation"
  ON companies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);