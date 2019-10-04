import { ODataModel, Filter, FilterOperator } from "../../sap/ODataModel";

export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export const FILTER_ENTRIES = 'FILTER_ENTRIES';
export const GET_ENTRY_BY_ID = 'GET_ENTRY_BY_ID';
const oModel = new ODataModel('https://services.odata.org/V2/OData/OData.svc/');

export const fetchEntries = () => {
    return (dispatch) => {
      oModel.read('/Products', {
          success: (oData, req) => {
            dispatch({
                type: FETCH_ENTRIES,
                payload: oData.results
            });
          }
      });
    }
  };

export const filterEntries = () => {
  return(dispatch) => {
    oModel.read('/Products', {
      filters: [
        new Filter({
          path: "Price",
          operator: FilterOperator.BT,
          value1: 1.0,
          value2: 20.0
        }),
        new Filter({
          path: 'Rating',
          operator: FilterOperator.BT,
          value1: 1,
          value2: 5
        })
      ],
      success: (oData, req) => {
        dispatch({
          type: FILTER_ENTRIES,
          payload: oData.results
        });
      }
    });
  }
}

export const getEntryById = (id) => {
  return (dispatch) => {
    oModel.read('/Products(' + id + ')/Category', {
        success: (oData, req) => {
          dispatch({
              type: GET_ENTRY_BY_ID,
              payload: oData
          });
        }
    });
  }
};