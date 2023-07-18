import SheetAPI from "../../../Utils/SheetAPI"
import { mainSheetLink } from "../IComponents/Info"

function getInterestGroupsData(summary, id, setSummary, setIgSummary,link=mainSheetLink,sheetName="Landing Pages") {
    if (!summary.length)
        SheetAPI(link, sheetName, setSummary)
    else if (id !== undefined) {
        setIgSummary(summary.find((ig) => ig.code === id))
    }
}

export default getInterestGroupsData


function handleData(mainIg, setMainIg, id, sub, setIgSummary, setSubSummary, setPeople) {
    if (!mainIg.length) {
      SheetAPI(mainSheetLink, 'Landing Pages', setMainIg)
    }
    else if (sub === undefined) {
      const main = mainIg.find((ig) => ig.code === id)
      setIgSummary(main)
    }
    else {
        const subIg = mainIg.find((ig) => ig.code === sub)
        if (subIg.code)
            setIgSummary(subIg)
        if (subIg.sheetlink) {
            SheetAPI(subIg.sheetlink, 'Summary', setSubSummary)
            SheetAPI(subIg.sheetlink, 'People', setPeople)
        }
    }
}

export { handleData }

