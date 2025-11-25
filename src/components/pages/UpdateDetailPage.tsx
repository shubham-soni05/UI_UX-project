import { PageType } from '../../App';

interface UpdateDetailProps {
  update: { type: string; title: string; date: string; isNew?: boolean; content?: string } | null;
  onNavigate: (page: PageType) => void;
}

function renderParagraphs(text: string) {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, i) => (
      <p key={i} className="mb-4">
        {p}
      </p>
    ));
}

export function UpdateDetailPage({ update, onNavigate }: UpdateDetailProps) {
  if (!update) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl p-8 bg-white rounded-xl shadow">
          <h2 className="text-gray-900 mb-4">Update not found</h2>
          <p className="text-gray-600 mb-6">The requested update could not be found.</p>
          <button onClick={() => onNavigate('home')} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const content = update.content ?? '';
  const paragraphs = renderParagraphs(content);

  // create a few 'key points' from the first paragraph sentences (fallback)
  const firstPara = content.split(/\n\n/)[0] ?? '';
  const sentences = firstPara.split(/[.\?\!]+/).map((s) => s.trim()).filter(Boolean);
  const keyPoints = sentences.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-4 py-14">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-sm">{update.title}</h1>
          <div className="text-blue-100 mt-3 text-sm md:text-base">{update.type} • {update.date}</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-800">
                <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                {paragraphs.length > 0 ? paragraphs[0] : <p>No summary available.</p>}

                <h2 className="text-2xl font-semibold mt-6 mb-2">Details</h2>
                {paragraphs.length > 0 ? paragraphs : <p>No details available.</p>}

                <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points</h2>
                <ul className="list-disc list-inside">
                  {keyPoints.length > 0 ? keyPoints.map((kp, idx) => <li key={idx}>{kp}.</li>) : <li>No key points available.</li>}
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    onClick={() => onNavigate('home')}
                    className="w-full sm:w-auto m-4 px-4 py-2 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors text-sm"
                  >
                    Back
                  </button>

                  <button
                    onClick={() => onNavigate('data-reports')}
                    className="w-full sm:w-auto m-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow text-sm text-center"
                  >
                    View Related Reports
                  </button>

                  <a
                    href="../dummt_file.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto m-4 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 text-sm"
                  >
                    Open Attachment
                  </a>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Timeline</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Released:</strong> {update.date}</li>
                  <li><strong>Effective from:</strong> {update.date}</li>
                  <li><strong>Review Date:</strong> TBD</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2">Contact</h3>
                <div className="text-sm text-gray-700">
                  <div className="mb-2">Data Services Division</div>
                  <div className="text-xs text-gray-500">Email: <a className="text-blue-600" href="mailto:dataservices@cwc.gov.in">dataservices@cwc.gov.in</a></div>
                  <div className="text-xs text-gray-500">Phone: +91-11-2610-0000</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2">Attachments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="../dummt_file.pdf" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                      Tender Document (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="../dummt_file.pdf" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                      Technical Guidelines (PDF)
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
