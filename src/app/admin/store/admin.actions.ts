import {createAction, props} from '@ngrx/store';

export const AddAnimal = createAction('AddAnimal', props<{animal: any}>());
export const EmptyStore = createAction('EmptyStore');