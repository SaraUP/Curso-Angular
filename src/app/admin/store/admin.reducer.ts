import {Action, createReducer, on} from '@ngrx/store';
import {AddAnimal, EmptyStore} from './admin.actions';

export interface AdminState {
  vaccinated: number;
  notVaccinated: number;
}

export const initiealState: AdminState = {
  vaccinated: 0,
  notVaccinated: 0
};

const featureReducer = createReducer(
  initiealState,
  on(AddAnimal, (state, {animal}) => {
    // tslint:disable-next-line:max-line-length
    return (animal.vaccinated || animal.vaccinated === 'true') ? {...state, vaccinated: (state.vaccinated + 1)} : {...state, notVaccinated: (state.notVaccinated + 1)};
  }),
  on(EmptyStore, (state => {
    return {...state, vaccinated: 0, notVaccinated: 0};
  }))
);

export function reducer(state: AdminState, action: Action): any {
  return featureReducer(state, action);
}