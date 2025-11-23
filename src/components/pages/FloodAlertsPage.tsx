import { PageType } from '../../App';
import { AlertTriangle, AlertCircle, Info, MapPin } from 'lucide-react';

interface FloodAlertsPageProps {
  onNavigate: (page: PageType) => void;
}

export function FloodAlertsPage({ onNavigate }: FloodAlertsPageProps) {
  const alerts = [
    {
      level: 'Danger',
      station: 'Patna',
      river: 'Ganga',
      state: 'Bihar',
      currentLevel: '47.32 m',
      dangerLevel: '46.50 m',
      forecast: 'Rising',
      time: '2 hours ago'
    },
    {
      level: 'Danger',
      station: 'Farakka',
      river: 'Ganga',
      state: 'West Bengal',
      currentLevel: '16.85 m',
      dangerLevel: '16.50 m',
      forecast: 'Rising',
      time: '1 hour ago'
    },
    {
      level: 'Warning',
      station: 'Buxar',
      river: 'Ganga',
      state: 'Bihar',
      currentLevel: '45.20 m',
      dangerLevel: '46.00 m',
      forecast: 'Steady',
      time: '30 min ago'
    },
    {
      level: 'Warning',
      station: 'Ayodhya',
      river: 'Sarayu',
      state: 'Uttar Pradesh',
      currentLevel: '82.15 m',
      dangerLevel: '83.00 m',
      forecast: 'Falling',
      time: '45 min ago'
    },
    {
      level: 'Advisory',
      station: 'Guwahati',
      river: 'Brahmaputra',
      state: 'Assam',
      currentLevel: '47.80 m',
      dangerLevel: '49.00 m',
      forecast: 'Rising',
      time: '3 hours ago'
    },
    {
      level: 'Advisory',
      station: 'Hoshangabad',
      river: 'Narmada',
      state: 'Madhya Pradesh',
      currentLevel: '298.75 m',
      dangerLevel: '300.50 m',
      forecast: 'Steady',
      time: '4 hours ago'
    },
  ];

  const forecastData = [
    {
      date: '23-Nov-2024',
      station: 'Patna',
      predicted: '47.80 m',
      trend: 'Rising',
      rainfall: 'Heavy'
    },
    {
      date: '24-Nov-2024',
      station: 'Patna',
      predicted: '48.20 m',
      trend: 'Rising',
      rainfall: 'Moderate'
    },
    {
      date: '25-Nov-2024',
      station: 'Patna',
      predicted: '48.40 m',
      trend: 'Peak',
      rainfall: 'Light'
    },
    {
      date: '26-Nov-2024',
      station: 'Patna',
      predicted: '48.10 m',
      trend: 'Falling',
      rainfall: 'No Rain'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white mb-4">Flood Alerts & Warnings</h1>
          <p className="text-red-100 max-w-3xl">
            Real-time flood alerts and forecasts for major rivers across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Alert Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-red-900">Danger Level</span>
            </div>
            <div className="text-red-600">2 Stations</div>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-900">Warning</span>
            </div>
            <div className="text-yellow-600">2 Stations</div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900">Advisory</span>
            </div>
            <div className="text-blue-600">2 Stations</div>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-green-900">Normal</span>
            </div>
            <div className="text-green-600">1,244 Stations</div>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-gray-900">Active Flood Alerts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Alert Level</th>
                  <th className="px-6 py-3 text-left text-gray-700">Station</th>
                  <th className="px-6 py-3 text-left text-gray-700">River</th>
                  <th className="px-6 py-3 text-left text-gray-700">State</th>
                  <th className="px-6 py-3 text-left text-gray-700">Current Level</th>
                  <th className="px-6 py-3 text-left text-gray-700">Danger Level</th>
                  <th className="px-6 py-3 text-left text-gray-700">Forecast</th>
                  <th className="px-6 py-3 text-left text-gray-700">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {alerts.map((alert, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
                        alert.level === 'Danger' ? 'bg-red-100 text-red-700' :
                        alert.level === 'Warning' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {alert.level === 'Danger' && <AlertTriangle className="w-3 h-3" />}
                        {alert.level === 'Warning' && <AlertCircle className="w-3 h-3" />}
                        {alert.level === 'Advisory' && <Info className="w-3 h-3" />}
                        {alert.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{alert.station}</td>
                    <td className="px-6 py-4 text-gray-600">{alert.river}</td>
                    <td className="px-6 py-4 text-gray-600">{alert.state}</td>
                    <td className="px-6 py-4 text-gray-900">{alert.currentLevel}</td>
                    <td className="px-6 py-4 text-gray-600">{alert.dangerLevel}</td>
                    <td className="px-6 py-4">
                      <span className={`${
                        alert.forecast === 'Rising' ? 'text-red-600' :
                        alert.forecast === 'Falling' ? 'text-green-600' :
                        'text-gray-600'
                      }`}>
                        {alert.forecast}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{alert.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Forecast */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-gray-900">72-Hour Flood Forecast (Patna - Ganga)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Date</th>
                  <th className="px-6 py-3 text-left text-gray-700">Station</th>
                  <th className="px-6 py-3 text-left text-gray-700">Predicted Level</th>
                  <th className="px-6 py-3 text-left text-gray-700">Trend</th>
                  <th className="px-6 py-3 text-left text-gray-700">Expected Rainfall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {forecastData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900">{data.date}</td>
                    <td className="px-6 py-4 text-gray-600">{data.station}</td>
                    <td className="px-6 py-4 text-gray-900">{data.predicted}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        data.trend === 'Rising' ? 'bg-red-100 text-red-700' :
                        data.trend === 'Falling' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {data.trend}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{data.rainfall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-gray-900 mb-3">Emergency Contacts</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-700 mb-1">National Disaster Response</div>
              <div className="text-gray-900">1078 / 1070</div>
            </div>
            <div>
              <div className="text-gray-700 mb-1">CWC Flood Cell</div>
              <div className="text-gray-900">+91-11-2610-6598</div>
            </div>
            <div>
              <div className="text-gray-700 mb-1">Email</div>
              <div className="text-gray-900">flood.cwc@nic.in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
