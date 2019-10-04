export const FETCH_ENTRIES = 'FETCH_ENTRIES';

export const fetchEntries = () => dispath => {
    fetch('https://mlk-tms-01.msk.aeroflot.ru:8033/sap/opu/odata/sap/ZTM_WF_SERVICE_SRV/reqitemSet?sap-client=100&$skip=0&$top=20&$orderby=Crdate%20desc&$filter=Cruser%20eq%20%27SPONOMARENKO%27&$select=Dclcode%2cRepyear%2cRepcode%2cNodeItem%2cNodeItem2%2cCruser%2cReqnum%2cCrdate%2cCrtime%2cBasisRequest%2cContextRequest%2cListofrequested%2cAssessment1%2cAssessment2%2cActdate%2cFactdate%2cTimeprep1%2cTimeprep2%2cCompliance%2cReasons%2cInternalDocNum%2cExternalDocNum')
        .then(res => res.json())
        .then(entries => dispath({
            type: FETCH_ENTRIES,
            payload: entries
        }));
};