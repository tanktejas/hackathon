import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faqq.css";


function Faqs() {
  return (
    <>
      <Accordion className="faqq1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Can i hack goverment scholarship website and get more rupees ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, if you want then learn hacking in computer science.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Faqs;
