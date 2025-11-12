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



