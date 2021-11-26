var rng= Math.floor((Math.random()*quick_draw_data_set.length)+1)
console.log(quick_draw_data_set[rng])
sketch=quick_draw_data_set[rng]
document.getElementById("Sketch_to_be_drawn").innerHTML="Sketch_to_be_drawn" +sketch
timer_counter=0
timer_check=""
drawn_sketch=""
answer_holder=""
score=0
