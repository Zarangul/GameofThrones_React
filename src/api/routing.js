const BASE_URL = 'https://thronesapi.com/api/v2/Characters';

export const ENDPOINTS = {
    GET_CHARS: ()=>`${BASE_URL}`,
    GET_CHAR_BY_ID: (id)=>`${BASE_URL}/${id}`
}