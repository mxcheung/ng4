
export interface KeyValuePair {
    key: string,
    value: string
}

export interface Player {
    firstName: string,
    lastName: string
    stats:  KeyValuePair[]
}