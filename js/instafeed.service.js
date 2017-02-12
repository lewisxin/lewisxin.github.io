"use strict";
/**
 * Instafeed service to retrieve instagram photos
 */
function getInstaPics() {
    var template1 = `<div class="col-md-4 col-sm-6" style="padding:0px 5px">  
                        <a class="insta-photo" href="{{link}}">
                            <img class="img-rounded" src="{{image}}" />
                        </a>
                    </div>`;
    var template2 = `<div class="col-md-4 col-sm-6" style="padding:0px 5px">  
                        <div class="hovereffect">
                            <a class="insta-photo" href="{{link}}">
                                <img class="img-rounded" src="{{image}}" alt="image">
                                <div class="overlay">
                                    <h2>{{caption}}</h2>
                                </div>
                            </a> 
                        </div>
                    </div>`
    var feed = new Instafeed({
        get: 'user',
        userId: 453782812,
        accessToken: '453782812.65a1405.71711c7043bd4dcab4b8e1817244e828',
        resolution: 'standard_resolution',
        template: template2
    });
    feed.run();
}

getInstaPics();