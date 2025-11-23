import { Clock, ArrowRight, Megaphone } from 'lucide-react';

export function LatestUpdates() {
  const updates = [
    {
      type: 'Notice',
      title: 'Guidelines for Water Resource Management Projects 2024',
      date: '20 Nov 2024',
      isNew: true,
    },
    {
      type: 'Tender',
      title: 'Construction of Dam Safety Monitoring System - Phase II',
      date: '18 Nov 2024',
      isNew: true,
    },
    {
      type: 'Report',
      title: 'Annual Report on Water Statistics 2023-24',
      date: '15 Nov 2024',
      isNew: false,
    },
    {
      type: 'Circular',
      title: 'Updated Guidelines for Flood Forecasting Systems',
      date: '12 Nov 2024',
      isNew: false,
    },
    {
      type: 'Event',
      title: 'National Water Conference 2024 - Registration Open',
      date: '10 Nov 2024',
      isNew: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-gray-900 mb-2">Latest Updates</h2>
          <p className="text-gray-600">Stay informed with our latest announcements and publications</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {updates.map((update, index) => (
          <div
            key={index}
            className="p-4 hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    {update.type}
                  </span>
                  {update.isNew && (
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                      New
                    </span>
                  )}
                </div>
                <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {update.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{update.date}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>

      <button className="md:hidden mt-4 w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors py-3">
        View All Updates
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
