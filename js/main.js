const letters = 'abcdefghijklmnopqrsstuvwxyz';
// و لو عاوز تعمل ارقام زي ما احنا عملنا مع الاخرف عادي

let lettersContainer = document.querySelector('.letters');

let lettersArray = Array.from(letters);

lettersArray.forEach((letter) => {
   let span = document.createElement('span');
   let spanText = document.createTextNode(letter);

   span.appendChild(spanText);
   span.className = 'letter-box';

   lettersContainer.appendChild(span);
});

// or
/*
Array.from(letters, (letter) => {
    
    let span = document.createElement('span');
    let spanText = document.createTextNode(letter);

    span.appendChild(spanText);
    span.className = 'letter-box';

    lettersContainer.appendChild(span);

})
*/

const words = {
   programming: ['php', 'javascript', 'go', 'scala', 'fortran', 'r', 'mysql', 'python'],
   movies: ['prestige', 'inception', 'parasite', 'interstellar', 'whiplash', 'memento', 'coco', 'up'],
   people: ['albert einstein', 'hitchcock', 'alexander', 'cleopatra', 'mahatma ghandi'],
   countries: ['syria', 'palestine', 'yemen', 'egypt', 'bahrain', 'qatar'],
};

// مينفعش اكتب ورد دوت لينث علشان اجيب فيها كام عنصر و اجيب الكول بتاعها فلازم علشان اجيب كول الاوبجيكت اجيب الاول الكي اللي فية و هترجعلي في اراي و بالتالي اقدر اجيب كول الاراي دي لانها هتكون نفس طول العناصر اللي في الاوبجيكت
// كدا اللي هيحصل اني هجيب رقم عشوائي في رنج من صفر لاخر بروبيرتي في الاوبجيكت و هعمل كدا عن طريق اني اجيب عدد البروبيرتي اللي في الاوبجيت عن طريق اني اكتب اوبجيكت دوت كيس و دا هيجبلي كل البروبيرتي اللي في الاوبجيت دا في اراي و الاراي دي ممكن اجيب اللسنث بتاعها و اضربو في رقم عشوائي و اعملو فلوت علشان اجيب ارقام عشوائية من صفر لاخر اندكس في الاوبجيكت
let allPropArray = Object.keys(words); // [prop1, prop2, ...]
let randonPropNum = Math.floor(Math.random() * allPropArray.length);
let randonPropName = allPropArray[randonPropNum];
// or
// let randonPropName = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];

document.querySelector('.game-info .category span').textContent = randonPropName;

// طيب كدا انا جيت اسم البوبيرتي عشوائية فدلوقتي بقي عاوز اجيب عنصر عشوائي من الاراي اللي في البروبيرتي دي
let propValue = words[randonPropName]; // [v1,v2,v3] or ...
let randomValueNum = Math.floor(Math.random() * propValue.length);
let myRandomValue = propValue[randomValueNum];
// or
//let myRandomValue = words[randonPropName][Math.floor(Math.random() * words[randonPropName].length)];

// لو عاوز تخلي الاجابة في الكونسول او حل اللعبة في الكونسول
// console.log(myRandomValue);

let lettersGuessContainer = document.querySelector('.letters-guess');
let lettersAndSpace = Array.from(myRandomValue);

lettersAndSpace.forEach((letter) => {
   let emptySpan = document.createElement('span');

   if (letter === ' ') {
      emptySpan.className = 'with-space';
   }
   lettersGuessContainer.appendChild(emptySpan);
});

// let theStatus = false;  // المفروض دي متطحتش هنا بل المفروض تتحك جوا الكليك علشان اول ما يدوس كليك يخليها فولس و بعدين في الاف لو الحرقين زي بعض يخليها فولس و لما يضغط كليك تاني علي اي حرف يرجع يخليها فولس و بعدين لو الحرفين ززي بعض يخليها ترو لانو لم معملش كدا و عرف دي برا الاون كليك يتبقي فولس و اول ما الحرفين يبقو زي بعض بعدها كل ما يدوس علي اي حرف فهتكون ترو فانت لازم تغيرها لفولس و برضو مش ينفع تحط السطر دا في الالس بتعت الاف لان الاف جوا لوب و لو عملت الالس باتعتها هتتكرر مرات كتير جدا لان هوا بيشوف الحرف و لو مش مطابق للانكس الاول في الاراي هيعملك الالس و يدخل علي الاندكس بتعتو برضو لو مش هوا الحرف يعملك الالس فهتلاقي الالس اتكررت علي حسب عدد الاحرف في الاراي و احنا مش عاوزين كدا فافضل مكان ليها انو اول ما يضغط كليك يخلي القيمة بفولس و بعدين يبدا يشتغل علي الكود اللي بعدو
let wrongAttempts = 0;
let trueAttempts = 0;
let theDrawContainer = document.querySelector('.hangman-draw');

document.addEventListener('click', (e) => {
   if (e.target.className === 'letter-box') {
      let theStatus = false; // هنا افضل مكان ليها
      e.target.classList.add('clicked');
      lettersAndSpace.forEach((letter, index) => {
         // اعملي فور لوب علي الاراي اللي عناصرها عبارة عن احرف الكلمة المرادة و طبعا هعوز الانكس علشان ابقي عارف انهي مكان فية الحرف دا علشان اظهرو
         if (e.target.textContent.toLowerCase() == letter) {
            // لو العنصر اللي انا ضفطت علية دا الكلمة اللي فية بتساوي الكلمة الحالية اللي عليها الدور في الاراي و لازم و انا بقارن بينهم احول الكلمة لسمول علشان كل العناصر اللي في الاراي سمول
            theStatus = true;
            lettersGuessContainer.children[index].textContent = letter;
            // lettersGuessContainer.insertBefore(letter, lettersGuessContainer.children[index]);
            trueAttempts++;
         } // مش هحط الس علشانانا اولا مش محتاج اخلي الستيت هنا بفولس و كمان علشان انا جوا لوب فلو عملت الس هنا هتتنفز مرات كتير علي حسب عدد الاحرف بتعت الكلمة و دا مش حلو
      });

      if (theStatus === false) {
         wrongAttempts++;
         theDrawContainer.classList.add(`wrong-${wrongAttempts}`); // دا هيزود علي الكلاسات الحالية الكلاس دا
         // dont do that // theDrawContainer.className = `wrong${wrongAttempts}`; // اوعا تعمل كدا لان كدا هيشيلك كل الكلاسات و يضيف الكلاس دا فقط
         // mmken te3mel keda // theDrawContainer.className += ` wrong${wrongAttempts}`; // ممكن تعمل كدا بس متستخد الكلاس ليست دوت ادد و خلاص افضل

         document.getElementById('fail').play();

         // هنا انا عمل الحركة دي و هي كالتالي اني لما اشغل الصوت اخلي اليوزؤ ميثدر يضغط علي حاجة لمدة ثانية و نص و انا بعمل كدا لان الصوت اللي عندي مدتة ثامية و نص فانا لو ملعمتش الحركة دي ممكن يدوس رتين و را بعض فيكون الصوت لسا مخلصش فانا علشان اخلية يبدا يدوس تاني لازم اتاكد ان الصوت خلص و الافضل انك متعملش الحركة دي الافضل انك تجيب صوت مدتة قليلة جدا
         document.body.style.pointerEvents = 'none';
         setTimeout(() => {
            document.body.style.pointerEvents = '';
         }, 1400);

         if (wrongAttempts === 8) {
            endGame();
            lettersContainer.classList.add('finished');
         }
      } else {
         document.getElementById('success').play(); // محطتهاش مع ال كونت او العداد بتاع الترو علشان لو الحرف اتكرر مرتين او اتكتب مرتين الصوت مش يتكرر مرتين يعني لو الكلمة فيها الحرف دا مرتين فانا عاوز الصوت يتكرر مرة واحدة فقط و العداد يعد مرتين علشان الكلمة فيها الحرف دا مرتينفهو يعتر نجح مرتين
         // trueAttempts++;  // اوعا تعمل كدا ولا تحط السطر دا هنا لانك لو عملت كدا السطر دا هيتنفز مرة واحدة فقط حتي لو الكلمة فيها الحرف مرتين و احنا م عاوزين كدا بل اللي عاوزينو انو اول ما الحرف يتضاف للسبان زود الكونت دا بواحد

         document.body.style.pointerEvents = 'none';
         setTimeout(() => {
            document.body.style.pointerEvents = '';
         }, 1400);
      }

      if (myRandomValue.length === trueAttempts) {
         winner();
         lettersContainer.classList.add('finished');
      }
   }
});

function endGame() {
   // create popup
   let popupDiv = document.createElement('div');
   let popupDivText = document.createTextNode(`Game Over, the word is ${myRandomValue} reload to play again`);

   popupDiv.appendChild(popupDivText);

   popupDiv.className = 'popup';

   document.body.appendChild(popupDiv);
}

function winner() {
   // create popup
   let winDiv = document.createElement('div');
   let winDivText = document.createTextNode(`you win, the word is ${myRandomValue} reload to play again`);

   winDiv.appendChild(winDivText);

   winDiv.className = 'winner';

   document.body.appendChild(winDiv);
}
