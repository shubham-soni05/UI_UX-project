import { PageType } from '../../App';
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface WaterDataPageProps {
  onNavigate: (page: PageType) => void;
}

export function WaterDataPage({ onNavigate }: WaterDataPageProps) {
  const realTimeData = [
    { station: 'Haridwar', river: 'Ganga', level: '294.50 m', flow: '2,450 cumecs', trend: 'up', status: 'Normal' },
    { station: 'Ayodhya', river: 'Sarayu', level: '82.15 m', flow: '1,230 cumecs', trend: 'down', status: 'Normal' },
    { station: 'Hoshangabad', river: 'Narmada', level: '298.75 m', flow: '3,180 cumecs', trend: 'stable', status: 'Normal' },
    { station: 'Patna', river: 'Ganga', level: '47.32 m', flow: '8,950 cumecs', trend: 'up', status: 'Warning' },
    { station: 'Jabalpur', river: 'Narmada', level: '393.60 m', flow: '2,890 cumecs', trend: 'down', status: 'Normal' },
    { station: 'Farakka', river: 'Ganga', level: '16.85 m', flow: '12,450 cumecs', trend: 'up', status: 'Alert' },
    { station: 'Surat', river: 'Tapi', level: '8.20 m', flow: '1,560 cumecs', trend: 'stable', status: 'Normal' },
    { station: 'Kota', river: 'Chambal', level: '252.40 m', flow: '980 cumecs', trend: 'down', status: 'Normal' },
  ];

  const rainfallData = [
    { region: 'Northwest India', actual: '245 mm', normal: '230 mm', deviation: '+6.5%' },
    { region: 'Central India', actual: '512 mm', normal: '485 mm', deviation: '+5.6%' },
    { region: 'Northeast India', actual: '1,240 mm', normal: '1,180 mm', deviation: '+5.1%' },
    { region: 'South Peninsula', actual: '685 mm', normal: '720 mm', deviation: '-4.9%' },
    { region: 'East India', actual: '890 mm', normal: '865 mm', deviation: '+2.9%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white mb-4">Real-Time Water Data</h1>
          <p className="text-blue-100 max-w-3xl">
            Live monitoring of water levels, river discharge, and hydrological data across major observation stations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Total Stations</div>
            <div className="text-gray-900">1,248</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Active Alerts</div>
            <div className="text-red-600">12</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Rivers Monitored</div>
            <div className="text-gray-900">89</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Last Updated</div>
            <div className="text-gray-900">5 min ago</div>
          </div>
        </div>

        {/* Real-Time River Data */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-gray-900">Real-Time River Monitoring</h2>
            <button onClick={() => window.open('../dummt_file.pdf')} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Station</th>
                  <th className="px-6 py-3 text-left text-gray-700">River</th>
                  <th className="px-6 py-3 text-left text-gray-700">Water Level</th>
                  <th className="px-6 py-3 text-left text-gray-700">Flow Rate</th>
                  <th className="px-6 py-3 text-left text-gray-700">Trend</th>
                  <th className="px-6 py-3 text-left text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {realTimeData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900">{data.station}</td>
                    <td className="px-6 py-4 text-gray-600">{data.river}</td>
                    <td className="px-6 py-4 text-gray-600">{data.level}</td>
                    <td className="px-6 py-4 text-gray-600">{data.flow}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {data.trend === 'up' && <TrendingUp className="w-4 h-4 text-red-500" />}
                        {data.trend === 'down' && <TrendingDown className="w-4 h-4 text-green-500" />}
                        {data.trend === 'stable' && <Minus className="w-4 h-4 text-gray-500" />}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        data.status === 'Normal' ? 'bg-green-100 text-green-700' :
                        data.status === 'Warning' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {data.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rainfall Data */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-gray-900">Regional Rainfall Data (Current Monsoon Season)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Region</th>
                  <th className="px-6 py-3 text-left text-gray-700">Actual Rainfall</th>
                  <th className="px-6 py-3 text-left text-gray-700">Normal Rainfall</th>
                  <th className="px-6 py-3 text-left text-gray-700">Deviation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rainfallData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900">{data.region}</td>
                    <td className="px-6 py-4 text-gray-600">{data.actual}</td>
                    <td className="px-6 py-4 text-gray-600">{data.normal}</td>
                    <td className="px-6 py-4">
                      <span className={`${
                        data.deviation.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {data.deviation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
