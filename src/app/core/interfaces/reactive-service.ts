import { Observable } from "rxjs";

/**
 * A reactive service exposes :
 * - A reactive data source allowing subscription.
 * - Unify API to request state modification.
 * - Expect "D" the type of data.
 * - Expect "C" the type of accepted command.
 */
export interface ReactiveService<D,C> {

    data$:Observable<D>

    execute(command:C):void
}
