export interface SoraSuccess<T> {
    ok: true,
    data: T
}

export interface SoraError {
    ok: false,
    message: string
}

export type SoraResponse<T> = SoraSuccess<T> | SoraError;