import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import scrollToNext from "./modules/scrollToNext";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer('30 june 2022');
menu();
modal();
validate();
tabs();
scrollToNext();
slider();
calc();
sendForm({
  formId: 'form1',
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});
sendForm({
  formId: 'form2',
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});
sendForm({
  formId: 'form3',
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});