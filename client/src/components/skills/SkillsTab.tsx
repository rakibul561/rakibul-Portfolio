"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import SkillsItems from "./SkillsItem";

type Skill = {
  id: number;
  name: string;
  side: string;
  logo: string;
  category: "Expertise" | "Comfortable" | "Familiar" | "Tools";
};

export default function SkillsTabs() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const res = await fetch("/skills.json");
      const data = await res.json();
      setSkills(data);
    };
    loadSkills();
  }, []);

  const tabsArray = ["Expertise", "Comfortable", "Familiar", "Tools"] as const;

  const FrontEndData = skills.filter((s) => s.category === "Expertise");
  const BackendData = skills.filter((s) => s.category === "Comfortable");
  const ExpertsData = skills.filter((s) => s.category === "Familiar");
  const OthersData = skills.filter((s) => s.category === "Tools");

  return (
    <div>
      <Tabs>
        <TabList className="flex flex-wrap justify-center gap-5 outline-none">
          {tabsArray.map((tab) => (
            <Tab key={tab} className="tab-btn font-Georgian">
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <SkillsItems skills={FrontEndData} />
        </TabPanel>
        <TabPanel>
          <SkillsItems skills={BackendData} />
        </TabPanel>
        <TabPanel>
          <SkillsItems skills={ExpertsData} />
        </TabPanel>
        <TabPanel>
          <SkillsItems skills={OthersData} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
