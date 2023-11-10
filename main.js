const picker1 = document.querySelector('#picker1');
const picker2 = document.querySelector('#picker2');


picker1.addEventListener('change', ()=> {
    document.body.setAttribute('style',`background: linear-gradient(to right,${picker1.value},${picker2.value});`);
})
picker2.addEventListener('change', () => {
    document.body.setAttribute('style',`background: linear-gradient(to right,${picker1.value},${picker2.value});`);
});