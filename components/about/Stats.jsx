const invoiceStats = [
  { id: 1, name: "Empower Kibera's youth through boxing and educational programs, fostering academic, physical, and entrepreneurial growth.", value: "Mission:" },
  { id: 2, name: "Be a beacon of change, providing skills, discipline, and confidence for a brighter future.", value: "Vision:" },
  { id: 3, name: "Discipline, Consistency, Empowerment, Holistic Growth, Integrity, Community Engagement, Health and Safety.", value: "Core Values:" },
];

export default function InvoiceStats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            VISION, MISSION, AND CORE VALUES            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The Kibra Youth Boxing Initiative (KYBI) was founded with a vision
              to empower youth through boxing and education, fostering personal
              and community growth.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {invoiceStats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
