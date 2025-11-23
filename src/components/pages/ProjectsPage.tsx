import { PageType } from '../../App';
import { Search, Filter } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageType) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const projects = [
    { 
      id: 'P-2024-001', 
      name: 'Polavaram Irrigation Project', 
      state: 'Andhra Pradesh', 
      status: 'Under Construction', 
      budget: '₹55,548 Cr',
      completion: '75%'
    },
    { 
      id: 'P-2024-002', 
      name: 'Sardar Sarovar Dam Rehabilitation', 
      state: 'Gujarat', 
      status: 'Ongoing', 
      budget: '₹12,450 Cr',
      completion: '60%'
    },
    { 
      id: 'P-2023-045', 
      name: 'Ken-Betwa Link Project', 
      state: 'MP/UP', 
      status: 'Planning', 
      budget: '₹44,605 Cr',
      completion: '15%'
    },
    { 
      id: 'P-2024-003', 
      name: 'Gosikhurd Irrigation Project', 
      state: 'Maharashtra', 
      status: 'Under Construction', 
      budget: '₹8,560 Cr',
      completion: '82%'
    },
    { 
      id: 'P-2023-078', 
      name: 'Teesta Barrage Project', 
      state: 'West Bengal', 
      status: 'Completed', 
      budget: '₹6,200 Cr',
      completion: '100%'
    },
    { 
      id: 'P-2024-012', 
      name: 'Damanganga-Pinjal Link', 
      state: 'Gujarat/Maharashtra', 
      status: 'Under Construction', 
      budget: '₹18,940 Cr',
      completion: '45%'
    },
    { 
      id: 'P-2024-008', 
      name: 'Lower Subansiri HE Project', 
      state: 'Arunachal Pradesh', 
      status: 'Ongoing', 
      budget: '₹24,800 Cr',
      completion: '68%'
    },
    { 
      id: 'P-2023-091', 
      name: 'Shahpur Kandi Dam Project', 
      state: 'Punjab/J&K', 
      status: 'Under Construction', 
      budget: '₹2,380 Cr',
      completion: '55%'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white mb-4">Major Water Resource Projects</h1>
          <p className="text-blue-100 max-w-3xl">
            Monitoring and implementation of major and medium irrigation, multipurpose, and hydroelectric projects across India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-gray-900">All Projects</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Project ID</th>
                  <th className="px-6 py-3 text-left text-gray-700">Project Name</th>
                  <th className="px-6 py-3 text-left text-gray-700">State</th>
                  <th className="px-6 py-3 text-left text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-gray-700">Budget</th>
                  <th className="px-6 py-3 text-left text-gray-700">Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-600">{project.id}</td>
                    <td className="px-6 py-4 text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 text-gray-600">{project.state}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        project.status === 'Ongoing' || project.status === 'Under Construction' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{project.budget}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: project.completion }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{project.completion}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
            <div className="text-white mb-2">523</div>
            <div className="text-blue-100">Total Projects</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
            <div className="text-white mb-2">156</div>
            <div className="text-green-100">Completed</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6">
            <div className="text-white mb-2">287</div>
            <div className="text-orange-100">Ongoing</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
            <div className="text-white mb-2">80</div>
            <div className="text-purple-100">In Planning</div>
          </div>
        </div>
      </div>
    </div>
  );
}
