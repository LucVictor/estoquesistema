import * as React from "react";
import CompareReportDamaged from "./reportcompare";

function DamagedIndex() {
  return (
    <div>
      <CompareReportDamaged
        dateFirstReport1={new Date("2025-04-21T16:00:00")}
        dateLastReport1={new Date("2025-04-25T16:00:00")}
        dateFirstReport2={new Date("2025-04-21T16:00:00")}
        dateLastReport2={new Date("2025-04-25T16:00:00")}
      />
    </div>
  );
}

export default DamagedIndex;
