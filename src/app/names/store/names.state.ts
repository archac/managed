import { State, Action, StateContext, Selector } from '@ngxs/store';
import { NamesActions } from './names.actions';
import { NamesStateModel } from './names.model';

@State<NamesStateModel>({
    name: 'names',
    defaults: {
        names: [],
    }
})
export class NamesState {

    @Selector()
    static getNames(state: NamesStateModel) {
        return state.names;
    }

    @Action(NamesActions.UpdateNames)
    updateNames({ patchState }: StateContext<NamesStateModel>, event: NamesActions.UpdateNames) {
        patchState({
            names: event.names
        });
    }
}
