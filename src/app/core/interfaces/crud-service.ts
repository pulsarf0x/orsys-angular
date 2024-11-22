import { Observable } from "rxjs";

export interface UniqueData {
    id: number | string
}

export interface MethodAcceptance {
    label: 'ACCEPTED' | 'REJECTED'
    reason: string
}

export interface CrudService<D extends UniqueData> {
    data$: Observable<D[]>

    create(data: Omit<D, 'id'>): Observable<MethodAcceptance>

    read(): Observable<MethodAcceptance>

    update(target: D, data: Partial<D>): Observable<MethodAcceptance>

    delete(): Observable<MethodAcceptance>

}
