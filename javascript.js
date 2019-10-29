
const quotes1 = [
    '"Niech państwo nie mają złudzeń, że ',
    '"Powiedzmy to wyraźnie ', 
    '"Powtarzam: ',
    '"Oświadczam kategorycznie ',
    '"Ja chcę powiedzieć jedną rzecz: ',
    '"Państwo się nie śmieją, ale ',
    '"Proszę zwrócić uwagę, że ',
    '"Gdzie leży przyczyna problemu? Ja państwu odpowiadam: ',
    '"Ja nie potrzebowałem edukacji seksualnej aby wiedzieć, że ',
    'No niestety: ',
    'To ja przepraszam bardzo ',
    'Yyyyyy... ',
    'Jak powiedział wybitny krakowianin, Stanisław Lem ',
]

const quotes2 = [

    'przedstawiciele czerwonej chołoty ', 
    'tak zwani ekolodzy ', 
    'feministki ',
    'etatyści ',
    'federaści ',
    'funkcjonariusze reżimowej telewizji ',
    'agenci obcych służb ',
    'komuniści z krzyżem w zębach ' ,
    'ci wszyscy (tfu!) demokraci' ,
    'feminazistki ' ,
    'agenci bezpieki ' ,
    'właściciele niewolników ',

]

const quotes3 = [
    'po przeczytaniu Manifestu Komunistycznego ',
    'którymi się brzydzę ',
    'których nienawidzę ',
    'z okolic Gazety Wyborczej ',
    'czyli taka żydokomuna ',
    'odkąd zniesiono karę śmierci',
    'którymi pogardzam ',
    'z nieprawdopodobną pogardą dla człowieka ',
    'za pieniądze podatników ',
    'zupełnie bezkarnie' ,
    'o poglądach na lewo od komunizmu ',
    'z premedytacją ',
    'w ramach postępu ',
]

const quotes4 = [
    'udają homoseksualistów ',
    'niszczą rodzinę ',
    'idą do polityki ',
    'zakazują góralom robienia oscypków ',
    'organizują paraolimpiady ',
    'wprowadzają ustroj, w którym raz na cztery lata można wybrać sobie pana ',
    'ustawiają fotoradary ',
    'wydzielają buspasy ',
    'podnoszą wiek emerytalny ',
    'głoszą brednie o globalnym ociepleniu ',
    'wprowadzają parytety ',
    'próbują skłócić Polskę z Rosją ',
    'zakazują posiadania broni ',
    'nie dopuszczają prawicy do władzy ',
]

const quotes5 = [
    'żeby poddawać wszsytkich tresurze ',
    'bo taka jest ich natura ',
    'bo chcą wszystko kontrolować ',
    'bo chcą wszystko opodatkować ',
    'bo nie rozumieją, że socjalizm nie działa ',
    'żeby wreszcie zapanował socjalizm ',
    'zamiast pozwolić ludziom zarabiać ',
    'żeby wyrwać kobiety z domu ',
    'zamiast pozwolić decydować konsumentowi ',
    'żeby mężczyźni przestali być agresywni ',
    'bo chcą stworzyć raj na ziemi ' ,
    'bo dzięki temu mogą kraść ',
    'bo tak się uczy w państwowej szkole ',
    'bo dostają za to pieniądze ',
    'bo bez tego (tfu!) demokracja nie może ustnieć '

]

const quotes6 = [
    'co zresztą nie ma sensu jak zawody w szachy dla debili." ',
    'co zostało dokładnie zaplanowane w Magdalence przez śp. generała Kiszczaka."',
    'i trzeba być idiotą aby ten system popierać."',
    'ale nawet ja jeszcze dożyję normalnych czasów."',
    'co dowodzi, że wyskrobano nie tych co trzeba."',
    'a zwykłym ludziom wmawiają, że im "coś" dadzą."',
    'a wystarczy przestać wypłacać zasiłki."',
    'i właśnie dlatego Europa wymiera."',
    ' - tak samo zresztą jak za Hitlera."',
    'co lat temu sto nikomu nawet nie przyszłoby do głowy!"',
    'ale przyjdą muzułmanie i zrobią porządek."',
    '- więc proszę zobaczyć co się dzieje na Zachodzie, jeśli państwo mi nie wierzą."',
    'co prowadzi Polskę do katastrofy!"',
]

function newQuote() {
    const firstElement = Math.floor(Math.random() * (quotes1.length)); 
    const secondElement = Math.floor(Math.random() * (quotes2.length)); 
    const thirdElement = Math.floor(Math.random() * (quotes3.length)); 
    const fourthElement = Math.floor(Math.random() * (quotes4.length)); 
    const fifthElement = Math.floor(Math.random() * (quotes5.length)); 
    const sixthElement = Math.floor(Math.random() * (quotes6.length)); 

    
    
   document.getElementById('quoteDisplay').innerHTML = quotes1[firstElement] + quotes2[secondElement] + quotes3[thirdElement] + quotes4[fourthElement] + quotes5[fifthElement] + quotes6[sixthElement];




}