// Fetching Data
export const addDetails = details => ({
  type: 'FETCH_DATA',
  details,
});

// Clear Details
export const clearDetails = () => ({ type: 'CLEAR_DATA',
  text: "Error please try again"
});

// API Call and Fetching the Data
export const getDetails = (city,secondParameter) => async dispatch => {
    try {
      var url = `http://opentable.herokuapp.com/api/restaurants?city=${city}`;
      if(secondParameter !== ""){
      url = `http://opentable.herokuapp.com/api/restaurants?city=${city}&name=${secondParameter}`;
      }
      const response = await fetch(url);
      const responseBody = await response.json();
      dispatch(addDetails(responseBody));
    } catch (error) {
      console.error(error);
      dispatch(clearDetails());
    }
};
