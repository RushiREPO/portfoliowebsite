
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const SkillChart: React.FC = () => {
  const data = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <div className="h-[400px] w-full mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <Radar
            name="Skill Level"
            dataKey="A"
            stroke="#60a5fa"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#60a5fa' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;
