import { Name } from './names.model';

const prefix = '[Names]';

export namespace NamesActions {
    export class UpdateNames {
        static readonly type = `${prefix} Update names in the state`;
        constructor(public names: Array<Name>) { }
    }
}
