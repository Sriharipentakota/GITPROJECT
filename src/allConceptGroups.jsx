import { conceptGroups as reactConceptGroups } from "./concepts";
import { htmlConceptGroup } from "./conceptGroupHtml";
import { cssConceptGroup } from "./conceptGroupCss"; // Add this file for CSS
// import { jsConceptGroup } from "./jsConcepts";   // Add this file for JS

export const allConceptGroups = {
    React: reactConceptGroups,
    HTML: [htmlConceptGroup],
    CSS: [cssConceptGroup]
    //   JavaScript: [jsConceptGroup]
};