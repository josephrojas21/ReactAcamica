import { StyledDesktopNavbar } from "../styles/styledNav";

import { useState, useEffect } from "react";

export const DesktopNavbar = () => {
  const [credits, setCredits] = useState(1000);

  useEffect(() => {});

  return (
    <StyledDesktopNavbar>

      <div className="logo">Rewards Store</div>
      <div>
        <div></div>
        <span>Balance: {credits}</span>
        <div>
          <select>
            <option>1000</option>
            <option>5000</option>
            <option>7500</option>
          </select>
          <button>Add Credits</button>
        </div>
      </div>
    </StyledDesktopNavbar>
  );
};
