import React from "react";
import { ChartsHeader } from "../../component";
import { Stacked as StackedChart } from "../../component";
const Stacked = () => {
  return (
    <div className="m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown"></ChartsHeader>
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
