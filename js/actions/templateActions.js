import { SHOW_MENU, HIDE_MENU, CHANGE_TEXT_VALUE } from '../constants/constant';

export const showMenuAction = param => ({
    type: SHOW_MENU,
    val: param
});


export const hideMenuAction = () => ({
    type: HIDE_MENU
});


export const changeTextAction = changedText => ({
    type: CHANGE_TEXT_VALUE,
    newText: changedText
});
