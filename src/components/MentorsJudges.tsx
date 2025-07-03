
const MentorsJudges = () => {
  const mentors = [
    { name: "Dr. Sarah Chen", title: "Chief AI Officer, TechCorp", avatar: "SC" },
    { name: "Marcus Rodriguez", title: "ML Engineering Lead, StartupX", avatar: "MR" },
    { name: "Lisa Wang", title: "VP of Innovation, Enterprise Solutions", avatar: "LW" },
    { name: "James Thompson", title: "Senior Data Scientist, AI Labs", avatar: "JT" }
  ];

  const judges = [
    { name: "Prof. David Kumar", title: "AI Research Director, University", avatar: "DK" },
    { name: "Amanda Foster", title: "CEO, AI Ventures", avatar: "AF" },
    { name: "Robert Zhang", title: "CTO, Tech Innovations", avatar: "RZ" },
    { name: "Dr. Emily Johnson", title: "Principal Scientist, Research Labs", avatar: "EJ" }
  ];

  const PersonCard = ({ person }: { person: { name: string; title: string; avatar: string } }) => (
    <div className="text-center group">
      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
        {person.avatar}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{person.name}</h3>
      <p className="text-sm text-gray-600">{person.title}</p>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mentors & Judges</h2>
          <p className="text-xl text-gray-600">Learn from industry experts and get your work evaluated by the best</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Mentors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <PersonCard key={index} person={mentor} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Judges</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {judges.map((judge, index) => (
              <PersonCard key={index} person={judge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsJudges;
