function string_validate ()
{
   let input = document.querySelector(".input-field");
   let inputval = input.value;
   console.log(inputval);
//WHY everything is a string?
// mas modja a parameter bejuttatasnak?
// if (inputval)

//   if (typeof inputval == 'string')
//    {
//     console.log('ja, it is a string');
//     input.style.borderColor  = "var(--success)"
//    }

if (isNaN(inputval))
{ console.log('ja, it is a string');}

   else
   {
    console.log('this is a number');
    input.style.borderColor  = "red"
   }

}

//ket funkciot osszereakni





















function number_validate ()
{
   let input = document.querySelector(".input-field");
   let inputval = parseInt(input.value);
   console.log(input.value);
//WHY everything is a string?

   if (typeof inputval == 'number')
   {
    console.log('ja, it is a number');
    input.style.borderColor  = "var(--error)"
   }

}