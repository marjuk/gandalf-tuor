var elem, target;

elem = $( 'html' )[0];
target = $( '#wisdom-container' )[0];

(function () {
    var messages, i;
    
    i = 0;
    messages = [
      
        '<div class="animated fadeIn"> Fucking Schedule Tasks Like College Classes. </div>',
        '<div class="animated fadeIn"> Fucking Delete the Task. Do not Reschedule It.  </div>', 
        '<div class="animated fadeIn"> Avoid Fucking Distractions.  </div>',
        '<div class="animated fadeIn"> Never Ever Answer the Phone Unless You Are Expecting The Call.  </div>',
        '<div class="animated fadeIn"> Stay Fucking On Top of Your Health. </div>',
        '<div class="animated fadeIn"> Fucking Have a Morning Brain Purge. </div>', 
        '<div class="animated fadeIn"> Create a Routine and Fucking Follow it. </div>', 
        '<div class="animated fadeIn"> Always Set Fucking Deadlines. </div>', 
        '<div class="animated fadeIn"> Set a Specific Time Of the Day to Check Your Fucking Email. </div>', 
        '<div class="animated fadeIn"> Turn Off Fucking Email Notifications </div>', 
        '<div class="animated fadeIn"> Fucking Batch Your Tasks. </div>', 
        '<div class="animated fadeIn"> Create a Fucking Weekly Strategy Document. </div>',
        '<div class="animated fadeIn"> Get to Inbox Zero Fucking Every Day. </div>',
        '<div class="animated pulse"> Learn to Say Fucking NO. </div>',
        '<div class="animated fadeIn"> Do the One Fucking Thing that Would Make You Satisfied with Your Day. </div>', 
        '<div class="animated fadeIn"> Again Fucking Priorotize.  </div>',
        '<div class="animated fadeIn"> Follow the Fucking Pomodoro Technique, and Move around at least Once an Hour to Get the Fucking Blood Flowing. </div>',
        '<div class="animated fadeIn"> Run Every Task through an Impact vs. Effort Analysis. </div>',
        '<div class="animated pulse"> Never, Ever Fucking Proctastinate.   </div>',
        '<div class="animated fadeIn"> Fucking Work Even When You Do Not Feel Like It. </div>',
        '<div class="animated fadeIn"> Journal Daily, Even When It Seems Like There is No Fucking Time. </div>', 
        '<div class="animated fadeIn"> Set Fucking Activities Outside of Work. </div>'

        

        

        








        
         
  
         
        
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



