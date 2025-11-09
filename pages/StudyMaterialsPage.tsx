
import React from 'react';
import { STUDY_MATERIALS } from '../constants';
import { StudyMaterial } from '../types';

const TypeIcon: React.FC<{ type: StudyMaterial['type'] }> = ({ type }) => {
    switch(type) {
        case 'pdf':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
        case 'link':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
        case 'image':
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
    }
}

const StudyMaterialsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Study Materials</h2>
        <p className="text-gray-600 mt-2">Download PDFs, notes, and other resources.</p>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <ul className="space-y-4">
          {STUDY_MATERIALS.map((material) => (
            <li key={material.id} className="border-b last:border-b-0 pb-4 last:pb-0">
              <a href={material.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <TypeIcon type={material.type}/>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800">{material.title}</h3>
                    <p className="text-gray-500">{material.description}</p>
                  </div>
                </div>
                <div className="text-primary-600 font-semibold">
                  {material.type === 'link' ? 'Open Link' : 'View/Download'}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyMaterialsPage;
