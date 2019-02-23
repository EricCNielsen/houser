const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0

}

const ADDRESS_INFO = 'ADDRESS_INFO'
const IMG_INFO = 'IMG_INFO'
const MORTGAGE_INFO = 'MORTGAGE_INFO'
const CLEAR_INFO = 'CLEAR_INFO'

export default function reducer (state = initialState, action) {
    let {type, payload} =action
    switch (type) {
        case ADDRESS_INFO:
            return {...state, ...payload}
        case IMG_INFO:
            return {...state, img:payload}
        case MORTGAGE_INFO:
            return {...state, ...payload}
        case CLEAR_INFO:
            return payload
        default:
            return state
    }
}

export function updateAddress(addressObj) {
    return {
        type: ADDRESS_INFO,
        payload: addressObj
    }
}
export function updateImg(imgUrl) {
    return {
        type: IMG_INFO,
        payload: imgUrl
    }
}
export function updateMortgage(mortgageObj) {
    return {
        type: MORTGAGE_INFO,
        payload: mortgageObj
    }
}
export function clear() {
    return {
        type: CLEAR_INFO,
        payload: initialState
    }
}
