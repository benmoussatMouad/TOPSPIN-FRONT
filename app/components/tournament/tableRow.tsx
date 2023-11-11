import React from "react";
import classes from "./tournament.module.scss";

function TableRow() {
  return (
    <tr>
      <td>
        <div className={classes.player}>
          <img src="https://s3-alpha-sig.figma.com/img/a1fe/db1d/abc95db3c5a2851052554a82d6066b2d?Expires=1700438400&Signature=WJpSs3JF7tsY-pso7OhGX7ZBHE-2kZPpjdWeibheQ8oQxzvk7iFPOJDiB92Vh-zyCuOC06YBavPLAI60BGaM2IOuXMdq7wMCwGhflmN-Sm1yEDGJO18fuCHf3S0mKsVwSG7ajd6eWEcI~fZOzQH7-1YtIppui3dSRmSsGD2mxTWG8GRvY4NKc-BUNea1FDVgst32duGDl1Cxz26nB2sG6QhFO1BKG4SK7fBhbXgiwiA23h6pM0xrmL2jN9iSWc3V2P1az93AKRJBuFa2z0ZqJVUniOZRuFYE0ueI5eM8arNhFSuCEgvvZYkEuQca7ytXquSmbKWSHyxX7RZiZmq4WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <p>Gauff</p>
        </div>
        <div className={classes.player}>
          <img src="https://s3-alpha-sig.figma.com/img/a1fe/db1d/abc95db3c5a2851052554a82d6066b2d?Expires=1700438400&Signature=WJpSs3JF7tsY-pso7OhGX7ZBHE-2kZPpjdWeibheQ8oQxzvk7iFPOJDiB92Vh-zyCuOC06YBavPLAI60BGaM2IOuXMdq7wMCwGhflmN-Sm1yEDGJO18fuCHf3S0mKsVwSG7ajd6eWEcI~fZOzQH7-1YtIppui3dSRmSsGD2mxTWG8GRvY4NKc-BUNea1FDVgst32duGDl1Cxz26nB2sG6QhFO1BKG4SK7fBhbXgiwiA23h6pM0xrmL2jN9iSWc3V2P1az93AKRJBuFa2z0ZqJVUniOZRuFYE0ueI5eM8arNhFSuCEgvvZYkEuQca7ytXquSmbKWSHyxX7RZiZmq4WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <p>Pegula</p>
        </div>
      </td>
      <td className={classes.firstSet}>
        <span>1</span>
      </td>
      <td>6</td>
      <td className={classes.border}>1</td>
      <td></td>
      <td></td>
    </tr>
  );
}

export default TableRow;
