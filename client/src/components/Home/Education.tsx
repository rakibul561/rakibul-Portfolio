import React from 'react';

// ডেটা (আপনার তথ্য) একটি অ্যারে হিসাবে রাখলে পরিচালনা করা সহজ হবে।
const educationData = [
  {
    institution: "Moulvibazar Polytechnic Institute",
    degree: "Diploma in Engineering",
    department: "CSE",
    year: "2022–2026",
    resultLabel: "Result:",
    resultValue: "3.30 (last semester)",
  },
  {
    institution: "Mir KandaPara High School",
    degree: "SSC",
    department: "Science",
    year: "2020",
    resultLabel: "Result:",
    resultValue: "GPA 4.05",
  },
];

type EducationCardProps = {
  institution: string;
  degree: string;
  department: string;
  year: string;
  resultLabel: string;
  resultValue: string;
};

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, department, year, resultLabel, resultValue }) => (
  
  <div className="p-8  rounded-xl bg-gray-900 shadow-2xl transition-transform transform hover:scale-[1.02] duration-300">
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
      {institution}
    </h3>
    <div className="space-y-2 text-gray-300 text-sm md:text-base">
      <p>
        <span className="font-semibold text-gray-400">Degree:</span> {degree}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Department:</span> {department}
      </p>
      <p>
        <span className="font-semibold text-gray-400">Year:</span> {year}
      </p>
      {/* রেজাল্ট সেকশন, স্ক্রিনশটের মতো দেখতে একটু মোটা ফন্ট ব্যবহার করা হয়েছে */}
      <p className="pt-2">
        <span className="font-semibold text-gray-400">{resultLabel} </span>
        <span className="text-lg font-bold text-teal-400">{resultValue}</span>
      </p>
    </div>
  </div>
);

const Education = () => {
  return (
   
    <section className=" mb-20 bg-[#151030] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
     
        <p className="text-sm font-medium tracking-widest uppercase text-purple-400 mb-2">
          MY EDUCATION
        </p>

      
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-12 md:mb-20">
          Background<span className="text-purple-500">.</span>
        </h2>
        
       
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;