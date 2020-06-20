
const getWeather = (location) => {
  return (dispatch) => {
    dispatch({weather: null, action: "SET_WEATHER"});
    fetchWeather(location).then(w => {
      dispatch({weather: w, action: "SET_WEATHER"});
    }).catch(() => {
      dispatch({weather: null, action: "SET_WEATHER"});
      dispatch({action: "AJJAJJ"});
    });
  }
}

const getWeather = (location) => {
  return (dispatch) => {
    async function gw() {
      try {
          dispatch({weather: null, action: "SET_WEATHER"});
          const w = await fetchWeather(location);
          dispatch({weather: w, action: "SET_WEATHER"});
        } catch {
          dispatch({weather: null, action: "SET_WEATHER"});
          dispatch({action: "AJJAJJ"});
        }
    }
    gw();
  }
}z

const getWeather = *(location) => {
  try {
    yield put({weather: null, action: "SET_WEATHER"});
    const w = yield call(fetchWeather, location);
    yield put({weather: w, action: "SET_WEATHER"});
  } catch {
    yield put({weather: null, action: "SET_WEATHER"});
    yield put({action: "AJJAJJ"});
  }
}

const Weather = () => {
  const dispatch = useDispatch();
  dispatch(getWeather());

  return <asdf>
}
