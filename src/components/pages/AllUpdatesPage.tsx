import { PageType } from '../../App';

interface AllUpdatesProps {
  onNavigate: (page: PageType) => void;
  onSelectUpdate: (update: { type: string; title: string; date: string; isNew?: boolean; content?: string }) => void;
}

export function AllUpdatesPage({ onNavigate, onSelectUpdate }: AllUpdatesProps) {
  const sampleTitles = [
    'Release of Water Resource Management Guidelines 2024',
    'Tender: Dam Safety Monitoring System - Phase II',
    'Annual Water Statistics Report 2023-24 Published',
    'Circular: Updated Flood Forecasting Protocols',
    'National Water Conference 2024 - Registration Open',
    'New Basin Mapping Data Released for Godavari',
    'Public Consultation: River Basin Development Plan',
    'Technical Manual: Sediment Management Practices',
    'Notice: Changes to Data Access Policy',
    'Tender: Hydrological Instrumentation Supply',
    'Report: Groundwater Assessment 2024',
    'Workshop: Dam Safety Capacity Building',
    'Publication: Climate Change Impact on Water Resources',
    'Alert: Monsoon Advisory and Preparedness Measures',
    'Update: Reservoir Operation Schedule - Sardar Sarovar',
    'Release: GIS Shapefiles for Major River Basins',
  ];

  const updates = sampleTitles.map((title, i) => ({
    type: i % 5 === 0 ? 'Notice' : i % 5 === 1 ? 'Tender' : i % 5 === 2 ? 'Report' : i % 5 === 3 ? 'Circular' : 'Event',
    title,
    date: `0${(i % 12) + 1} Nov 2024`,
    isNew: i < 3,
    content:
      `Summary: ${title}.\n\nDetails: This announcement provides detailed information about ${title.toLowerCase()}. It includes background, scope, and recommended next steps for stakeholders.\n\nAction: Review the documents and reach out to the Data Services Division for clarifications.`,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-semibold">All Updates</h1>
          <p className="text-blue-100 mt-2">Browse all updates, notices, tenders and reports.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {updates.map((update, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectUpdate(update);
                  onNavigate('update');
                  window.scrollTo(0, 0);
                }}
                className="p-4 hover:bg-gray-50 cursor-pointer flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-700 text-xs">{update.type}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-900 font-medium">{update.title}</h3>
                    <div className="text-gray-500 text-sm">{update.date}</div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">{update.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
