what does map() do
basically it takes two parameters
in our code - 
cards.amp(card,index)
so in here card is one object and its going to map with an index that going from 0 to n. so the first object is mapped to index 0 , and then the second one is 1st index and so on. 



useRef - 
ref means... reference. this react hook creates a reference to a dom element.
lik a pointer or hundle to access the actual html element.
this is persist across rerenders. so like a let var

useEffect - 
remeber this as aftereffects lol.
this hook runs after the component rendering happened.  
this aint gonna stay after a render. 
blud gone after one reload.

so lets explain the example - 
---------------------------------------------
const TitleCards = () => {

    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault;
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{cardsRef.current.addEventListener('wheel',handleWheel)}, [])


    return (
        <div className = 'titlecards'>
            <h2>
                Popular On Netflix
            </h2>
            <div className="card-list" ref={cardsRef}>
                {cards_data.map((card,index)=>{
                    return (
                    <div className='card' key={index} > 
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

------------------------------------------

ok so const cardsRef = useRef();
this just basically creating a reference to a dom element.
initially..INITIALLY.
cardsRef.current = undefined.....
untill we put a ref in somewhere and map it
<div className="card-list" ref={cardsRef}>
like in here. 

but why?
cus we need to catch that actuall dom element that we want to manipulate yk. and then what we want to do? we want to make scrolling weird. so we have to put some event listeners to that reference and then do some cool shit with it .

now we rendering happens. before rendirng useRef happens. 

after redering we doing a event listener to catch scrolls
that is -
useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
}, [])

so this bih runs after redering. AfterEffect.
so react schedules this code but doesnt run it yet. 
[] this nigga tells react only run this once after first render. 

while react rendering the dom shit....
that nigga sees a 'ref'. like whaaaa.
<div className="card-list" ref={cardsRef}>
```

**What happens:**
- React creates the actual `<div class="card-list">` element in the browser
- React takes that **real DOM element** and puts it in the box!
- Now: `cardsRef.current = <the actual div element>`

ok now useRef is mapped. and rendering is fully done. 

TIME TO RUN UseEffect

useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel)
}, [])


**What happens:**

1. **`cardsRef.current`** - Gets the actual `<div class="card-list">` element from the box
2. **`.addEventListener('wheel', handleWheel)`** - Tells the browser:
```
Browser: "Okay, whenever someone uses the mouse wheel 
         while hovering over this div, call the handleWheel function"



Now...what exactly should happen when we scroll. its defined in this funciton - 
------->
cosnt handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollleft += event.deltaY;

}
<--------------------

what does event.preventDefault(); do
prevents default behavior of the wheel event.

.scrollLeft

A property of the DOM element
Controls horizontal scroll position in pixels
scrollLeft = 0 means scrolled all the way left
scrollLeft = 500 means scrolled 500px to the right;

event.deltaY

How much you scrolled vertically with the mouse wheel
Positive number = scrolling down
Negative number = scrolling up

-------------------------------------
React APIs

fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
          .then(res => res.json())
          .then(res => setApiData(res.results)) //results is the object that we want from the api data
          .catch(err => console.error(err));

what is this. so basically like in fetch you have the path like the link to get the data. endpoint is /movie/now_playing part. and after that we have query parameters.

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjA1MGMzOTdjZjViMDZiOWIwOGIxOTYyNWQzM2Y2YSIsIm5iZiI6MTc2Mjk0OTU1Ni40NTgsInN1YiI6IjY5MTQ3OWI0YTc3MGZmMzhjNWMwNmUwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X2d3M0-dvs5_EaBDBArlJDZeEQxqlhaF-VHHcdII1bI'
        }
    };

    in here we have the options object. in here bearer is a authorization technique in APIs

    alright so in the fetch we have .then . then alot
    that means after that do this , after that do this and so on. 

.then(res => res.json())
.then(res => setApiData(res.results))
.catch(err => console.error(err));

res is the raw response from server like a sealed package. 

.json() is to unpack it in to readable javascript object
this .then returns a promise (another thing to wait for)

.then(res => setApiData(res.results))

now res is the actual move data. 
res.results have the array of 20 movies isnide.
setApiData(res.results) = this saves it to state so react can display it

if there is an error then
.catch(err=> console.error(err))

so in here this is the flow - 

first with react component mounts and then
after rendering useeffect runs.
 in our useeffect we have a fetch. so it fetches.
 pars json and gets the movie array and then save that to setApiData(res.results) state.

now react re-renders to show the movies with the map function. 

// ❌ WRONG
fetch`https://...`

// ✅ CORRECT
fetch(`https://...`)

// ❌ WRONG
<img src=`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />

// ✅ CORRECT
<img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />


---------------------------------
tf is useParams

thatt comes from react-router-dom library

so lets say you want to like pass a value with the link as a parameter.
then you can use that

how ?
const {id} = useParams()
thats itt
------------------------

we know how to link in app.jsx right ?
then how to link frm page to page.

first you have to import Link from react router dom

<Link to={`/player/${card.id}`} className="card" key={index} >
                    <div className='card' key={index} > 
                    <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                    </div>
                    </Link>

and then do this. 
as you can see with 'to' property we can set the path that it want to go yk.

-------------------------b

buttt
you have another way to navigate
 use useNavigate() for that. and then store that shit in a variable and each time someone click something catch it with onClick and put a arrow function to do this- 
naviagte(-2) : (navigate = useNavigate())

-2 means two back clicks.
instead of that
navigate('/home')

----------------------------------------------------

HOW TO SET UP AUTHENTICATION WITH FIREBASE- 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    getAuth,
    signOut } from "firebase/auth";

import { 
    addDoc,
    collection, 
    getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB3IvQe-Xt0--i9yhQHDD_ifEJoJSZvS44",
  authDomain: "netflixclonebyhess.firebaseapp.com",
  projectId: "netflixclonebyhess",
  storageBucket: "netflixclonebyhess.firebasestorage.app",
  messagingSenderId: "52578054084",
  appId: "1:52578054084:web:c710bc09d19c60e2aefe91",
  measurementId: "G-VZXG44QQ9Q"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"), {
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    }catch (error) {
        console.log(error);
        alert(error)
    }
}

const logout = async () => {
    try {
        signOut(auth);
    }
    catch(error) {
        console.log(error);
        alert(error);
    }
}

export {auth, db , login , signup , logout};


this is the configuration file. 
in here we need to create every function to happen through firebase. so we need to happen login signup and log out. so we should  have 3 funcitns.
that firebase config has the data it need to connect with our firebase account like api keys and shit. 

with firebase you can get signinwithemailandpassword type functions. those are built in functions in firebase.we just have to pass the need shit thats all. basically the initialization. 





