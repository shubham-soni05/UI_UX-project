import { PageType } from '../../App';
import { Download, Calendar, Database } from 'lucide-react';

interface HistoricalDataPageProps {
  onNavigate: (page: PageType) => void;
}

export function HistoricalDataPage({ onNavigate }: HistoricalDataPageProps) {
  const datasetCategories = [
    {
      category: 'River Flow Data',
      period: '1950-2024',
      stations: '1,248',
      size: '2.5 GB',
      format: 'CSV, Excel'
    },
    {
      category: 'Rainfall Data',
      period: '1901-2024',
      stations: '5,000+',
      size: '5.8 GB',
      format: 'CSV, NetCDF'
    },
    {
      category: 'Reservoir Storage',
      period: '1960-2024',
      stations: '150',
      size: '850 MB',
      format: 'CSV, Excel'
    },
    {
      category: 'Groundwater Levels',
      period: '1980-2024',
      stations: '2,500+',
      size: '1.2 GB',
      format: 'CSV, Excel'
    },
    {
      category: 'Water Quality',
      period: '1985-2024',
      stations: '800',
      size: '650 MB',
      format: 'CSV, Excel'
    },
    {
      category: 'Sediment Data',
      period: '1970-2024',
      stations: '450',
      size: '420 MB',
      format: 'CSV, Excel'
    },
  ];

  const annualStatistics = [
    { year: '2023', avgRainfall: '1,162 mm', surfaceWater: '1,869 BCM', groundwater: '433 BCM' },
    { year: '2022', avgRainfall: '1,094 mm', surfaceWater: '1,825 BCM', groundwater: '428 BCM' },
    { year: '2021', avgRainfall: '1,243 mm', surfaceWater: '1,952 BCM', groundwater: '441 BCM' },
    { year: '2020', avgRainfall: '1,158 mm', surfaceWater: '1,887 BCM', groundwater: '436 BCM' },
    { year: '2019', avgRainfall: '1,021 mm', surfaceWater: '1,763 BCM', groundwater: '412 BCM' },
    { year: '2018', avgRainfall: '1,189 mm', surfaceWater: '1,921 BCM', groundwater: '438 BCM' },
    { year: '2017', avgRainfall: '1,125 mm', surfaceWater: '1,856 BCM', groundwater: '431 BCM' },
    { year: '2016', avgRainfall: '987 mm', surfaceWater: '1,698 BCM', groundwater: '398 BCM' },
  ];

  const queryBuilder = [
    { parameter: 'Data Type', options: ['River Flow', 'Rainfall', 'Reservoir', 'Groundwater'] },
    { parameter: 'Time Period', options: ['1950-1980', '1980-2000', '2000-2024', 'Custom'] },
    { parameter: 'Region/Basin', options: ['Ganga', 'Brahmaputra', 'Godavari', 'All Basins'] },
    { parameter: 'Output Format', options: ['CSV', 'Excel', 'NetCDF', 'JSON'] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white mb-4">Historical Water Resource Data</h1>
          <p className="text-blue-100 max-w-3xl">
            Access decades of archived hydrological and meteorological data from across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-gray-600 mb-1 text-sm">Data Since</div>
            <div className="text-gray-900">1901</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-gray-600 mb-1 text-sm">Total Records</div>
            <div className="text-gray-900">50M+</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-gray-600 mb-1 text-sm">Data Categories</div>
            <div className="text-gray-900">12</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-gray-600 mb-1 text-sm">Archive Size</div>
            <div className="text-gray-900">12.5 TB</div>
          </div>
        </div>

        {/* Data Query Builder */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-gray-900 mb-6">Custom Data Query</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {queryBuilder.map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 mb-2 text-sm">{field.parameter}</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {field.options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button onClick={() => window.open('../dummt_file.pdf')} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Database className="w-5 h-5" />
            Generate Dataset
          </button>
        </div>

        {/* Available Datasets */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-gray-900">Available Historical Datasets</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Data Category</th>
                  <th className="px-6 py-3 text-left text-gray-700">Time Period</th>
                  <th className="px-6 py-3 text-left text-gray-700">Stations/Points</th>
                  <th className="px-6 py-3 text-left text-gray-700">Dataset Size</th>
                  <th className="px-6 py-3 text-left text-gray-700">Format</th>
                  <th className="px-6 py-3 text-left text-gray-700">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {datasetCategories.map((dataset, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900">{dataset.category}</td>
                    <td className="px-6 py-4 text-gray-600">{dataset.period}</td>
                    <td className="px-6 py-4 text-gray-600">{dataset.stations}</td>
                    <td className="px-6 py-4 text-gray-600">{dataset.size}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {dataset.format}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => window.open('../dummt_file.pdf')} className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Get</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Annual Statistics */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-gray-900">Annual Water Resource Statistics</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Year</th>
                  <th className="px-6 py-3 text-left text-gray-700">Average Rainfall</th>
                  <th className="px-6 py-3 text-left text-gray-700">Surface Water Resources</th>
                  <th className="px-6 py-3 text-left text-gray-700">Groundwater Resources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {annualStatistics.map((stat, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900">{stat.year}</td>
                    <td className="px-6 py-4 text-gray-600">{stat.avgRainfall}</td>
                    <td className="px-6 py-4 text-gray-600">{stat.surfaceWater}</td>
                    <td className="px-6 py-4 text-gray-600">{stat.groundwater}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Access Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-gray-900 mb-2">Data Access Policy</h3>
                <p className="text-gray-700 text-sm">
                  Most historical datasets are freely available for research and educational purposes. Commercial use requires prior approval and proper citation of the data source.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <Database className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-gray-900 mb-2">Bulk Data Requests</h3>
                <p className="text-gray-700 text-sm mb-3">
                  For large-scale data requirements or custom datasets spanning multiple parameters, please submit a formal data request form.
                </p>
                <button className="text-green-600 hover:text-green-700 text-sm">
                  Submit Request →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
