import { LOG_USER } from '../constants/action-types'

export function logUser(payload) {
    return { type: LOG_USER, payload }
};