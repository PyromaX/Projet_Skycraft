Template.header.helpers({
    //add you helpers here
});

Template.header.events({
    //add your events here
    'click [dropdown]': function () {
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'right', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false // Stops event propagation
            }
        );
    }
});

Template.header.onCreated(function () {
    //add your statement here
});

Template.header.onRendered(function () {

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens,
    });

    $('.modal').modal({
        startingTop: '10%'
    });

    /*----------------------------------------------------------------------------------*/
    /*                                   AFFIX                                          */
    /*----------------------------------------------------------------------------------*/

    if (Meteor.Device.isDesktop()){
        $('.target').pushpin({
            top: 200
        });
    }

    /*----------------------------------------------------------------------------------*/
    /*                                CAROUSEL                                          */
    /*----------------------------------------------------------------------------------*/

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    setInterval(function(){
        $('.carousel').carousel('next');
    }, 5000);

});

Template.header.onDestroyed(function () {
    //add your statement here
});
