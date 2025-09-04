import React from 'react';
import { Lock } from 'lucide-react';

const BetaLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">QuietVillage Beta</h1>
          <p className="text-gray-600 mt-6 text-lg">
            The QuietVillage Beta has Concluded. Thank you
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            QuietVillage Private Beta • Concluded
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetaLogin;