var elem, target;

elem = $( 'html' )[0];
target = $( '#wisdom-container' )[0];

(function () {
    var messages, i;
    
    i = 0;
    messages = [
      
        '<div class="animated fadeInUp">  Schedule Tasks Like College Classes. </div>',
        '<div class="animated fadeInDown"> Delete the Task. Do not Reschedule It.  </div>', 
        '<div class="animated fadeInUp"> Avoid Distractions.  </div>',
        '<div class="animated fadeInDown"> Never Ever Answer the Phone Unless You Are Expecting The Call.  </div>',
        '<div class="animated fadeInUp"> Stay On Top of Your Health. </div>',
        '<div class="animated fadeInDown"> Have a Morning Brain Purge. </div>', 
        '<div class="animated fadeInUp"> Create a Routine and  Follow it. </div>', 
        '<div class="animated fadeInDown"> Always Set  Deadlines. </div>', 
        '<div class="animated fadeInUp"> Set a Specific Time Of the Day to Check Your Email. </div>', 
        '<div class="animated fadeInDown"> Turn Off Email Notifications </div>', 
        '<div class="animated fadeInUp">  Batch Your Tasks. </div>', 
        '<div class="animated fadeInDown"> Create a Weekly Strategy Document. </div>',
        '<div class="animated fadeInUp"> Get to Inbox Zero  Every Day. </div>',
        '<div class="animated pulse"> Learn to Say Fucking NO. </div>',
        '<div class="animated fadeInDown"> Do the One Thing that Would Make You Satisfied with Your Day. </div>', 
        '<div class="animated fadeInUp"> Again Priorotize.  </div>',
        '<div class="animated fadeInDown"> Follow the Pomodoro Technique, and Move around at least Once an Hour to Get the Fucking Blood Flowing. </div>',
        '<div class="animated fadeInUp"> Run Every Task through an Impact vs. Effort Analysis. </div>',
        '<div class="animated pulse"> Never, Ever Proctastinate.   </div>',
        '<div class="animated fadeInUp"> Work Even When You Do Not Feel Like It. </div>',
        '<div class="animated fadeInDown"> Journal Daily, Even When It Seems Like There is No Time. </div>', 
        '<div class="animated fadeInUp"> Set Activities Outside of Work. </div>'

        

        

        








        
         
  
         
        
    ];
    
    $( elem ).click( function () {
    
      
          if ( i === messages.length ) { i = 0; }
        $( target ).html( messages[ i ] );
        i += 1;
    });
          

}());

//var count = 0;
//$( "p" ).each(function() {
 // var $thisParagraph = $( this );
 // var count = 0;
 // $thisParagraph.click(function() {
   // count++;
   // $thisParagraph.find( "span" ).text( "clicks: " + count );
  //  $thisParagraph.toggleClass( "highlight", count % 3 === 0 );
 // });
//});



