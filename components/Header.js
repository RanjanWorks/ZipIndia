import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
const Header = () => {
  return (
    <header>
      <h2>
        Zip<span id="postal">India</span>
      </h2>
      <nav>
        <Tooltip title="Mady by Ranjan" arrow> 
          <Stack direction="row" spacing={1}>
            <Chip
              style={{ color: "white", cursor: "pointer" }}
              avatar={
                <Avatar
                  alt="Ranjan-img"
                  src="https://i.ibb.co/mS4RLV3/ranjan-profile-phtot.jpg"
                />
              }
              label="Ranjan"
              variant="outlined"
            />
          </Stack>
        </Tooltip>
        <Tooltip title="Source Code" arrow>
          <a href="https://github.com/vebpath/ZipIndia">
            <GitHubIcon style={{ color: "white", fontSize: "40px" }} />
          </a>
        </Tooltip>
      </nav>
    </header>
  );
};

export default Header;
