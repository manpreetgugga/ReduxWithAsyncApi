import axios from 'react-native-axios';
import {APIStructure} from './ApplicationApis' 
import store from '../reducers/Index'

const BASE_URL = "https://reqres.in/"

export const defaultState = {
    isLoading : false,
    error: '',
    data : 'ssss'
}

const baseHeader = () => {
    return {
      'Content-Type' : 'application/json',
     }   
}

export const getRequestHeaders = (explicitHeaders) => {
    return Object.assign(baseHeader(), explicitHeaders)
}

export const fetchRequestConfig = (api : APIStructure) => {
    return  {
        url: BASE_URL + api.requestPath,
        method : api.requestMethod,
        headers : getRequestHeaders(api.requestHeader),
        params : api.queryParams,
        data: api.requestBody
    }
}

export const hitServer = (config,action) => {
   store.dispatch(action.loading())
   console.log(config)
   axios(config).then(response => {
        console.log('complete')
        store.dispatch(action.complete(response))
    }).catch(error => {
        console.log("Api call error");
        alert(error.message)
    });   
}