import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabsStyle = {
  outlineStyle: "none",
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    "box-shadow": "none",
    "&.Mui-selected": {
      outline: "none",
    },

    "&:active": {
      outline: "none",
    },

    "&:hover": {
      outline: "none",
    },
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", justifySelf: "left" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Journals" style={tabsStyle} />
          <Tab label="Progress" style={tabsStyle} />
          <Tab label="Meditation" style={tabsStyle} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Journals
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Progress
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Meditation
      </CustomTabPanel>
    </Box>
  );
}
