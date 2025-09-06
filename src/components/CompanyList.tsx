import React, { useState, useEffect } from 'react';
import { Company } from '../types/supabase';

interface CompanyListProps {
  className?: string;
}

interface CompanyListState {
  companies: Company[];
  loading: boolean;
  error: string | null;
}

export const CompanyList: React.FC<CompanyListProps> = ({ className = '' }) => {
  const [state, setState] = useState<CompanyListState>({
    companies: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    // Placeholder for future Supabase integration
    // For now, simulate loading state
    setTimeout(() => {
      setState({
        companies: [],
        loading: false,
        error: null
      });
    }, 1000);
  }, []);

  if (state.loading) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="animate-pulse">Loading companies...</div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className={`p-4 text-red-600 ${className}`}>
        Error: {state.error}
      </div>
    );
  }

  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-bold mb-4">Company List</h2>
      {state.companies.length === 0 ? (
        <p className="text-gray-500">No companies found.</p>
      ) : (
        <div className="space-y-2">
          {state.companies.map((company) => (
            <div key={company.id} className="p-3 border rounded-lg">
              <h3 className="font-semibold">{company.name}</h3>
              {company.email && (
                <p className="text-sm text-gray-600">{company.email}</p>
              )}
              {company.phone && (
                <p className="text-sm text-gray-600">{company.phone}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyList;