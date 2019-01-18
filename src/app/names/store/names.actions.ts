import { Name } from './names.model';

const prefix = '[Names]';

export namespace NamesActions {
    export class UpdateNames {
        static readonly type = `${prefix} Gets filtered names from database`;
        constructor(public names: Array<Name>) { }
    }
}
