
export interface KeyValueExt {
    key: string,
    value: string,
    parentCode: string
}

export interface ILookupExt {
    [key: string]: KeyValueExt[]
}