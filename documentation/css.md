what does width do actually?
its make the content span the full width of its container?
but its already happening right?
Sometimes NO. specially with images and when it comes to different screensizes. so always make width 100%
--------------------------------------------
what does mask-image:linear-gradient do?
its creating a gradient which is linear.

mask-image: linear-gradient(to right, transparent, black 75%);
this gradient goes frm left to right
fully transparent on the left.
fully black on the right

so we can see the text on the left side clearly
-webkit-mask-image: linear-gradient(...);

Safari/Chrome compatibility
-webkit- is a vendor prefix for older WebKit browsers
Same effect as mask-image but for better browser support
---------------------------------------------
what does position do. 
well its basically for child elements. so like in child element if you want to go relative to the parent components then you have to set parent component to relative and then that child component to "position:relative"
------------------------------------------------
what does padding-left:6% do ?



