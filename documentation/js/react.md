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



Now...what exactly should happen when we scroll. its defined in this funciton - 
------->
cosnt handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollleft += event.deltaY;

}
<--------------------


