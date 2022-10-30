function returnQuote(){
    let quote = "";
    const num = Math.floor(Math.random()*50);

    switch (num){
        case 0:
            quote = "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more."
            break;
        case 1:
            quote = "We Shine Bright So That Others May Shine Brighter";
            break;
        case 2:
            quote = "We Never Outgrow The Truth.";
            break;
        case 3:
            quote = "Find Your Peace And Live In It.";
            break;
        case 4:
            quote = "Just Because Your Light Flickers Does Not Mean It’s About To Go Out.";
            break;
        case 5:
            quote = "The Simplest Answer Is Usually The Correct One.";
            break;
        case 6:
            quote = "In This Life You Do Get Second Chances.";
            break
        case 7:
            quote = "Blue Is Not A Lonely Color.";
            break;
        case 8:
            quote = "Find Your Natural Rhythm And Harmonize With It.";
            break;
        case 9:
            quote = "Build Upon What Impresses You And Forget What Everyone Else Thinks.";
            break;
        case 10:
            quote = "Allow Time And Circumstance Not Ego And Vanity To Reveal Your Wisdom.;"
            break;
        case 11:
            quote = "The Most Opportunity Lies On The Path We Set For Ourselves.";
            break;
        case 12:
            quote = "Success Demands We Defy These Imaginary Boundaries.";
            break
        case 13:
            quote = "The Unafraid Dance Over The Lies Of The Wicked.";
            break;
        case 14:
            quote = "Glide Joyfully Toward Your Next Challenge In Life.";
            break;
        case 15:
            quote = "With The Right Education You Really Could Rule The World.";
            break;
        case 16:
            quote = "There Is Always A Rainbow To Look Forward To";
            break;
        case 17:
            quote = "Students Today Have The Real Potential To Move Mountains.";
            break;
        case 18:
            quote = "Wanna Know A Secret? Earn It.";
            break
        case 19:
            quote = "A Blank Canvas Just Means You Have Not Been There Yet.";
            break;
        case 20:
            quote = "Find What You Are Good At And Don’t Stop Learning About It.";
            break;
        case 21:
            quote = "Taking A Nap Under A Tree Once Helped A Guy Solve The Universe.";
            break;
        case 22:
            quote = "Leaders See The Future And Help Others See It Too.";
            break;
        case 23:
            quote = "Leadership Quotes – Leadership Needs Compassion To Thrive";
            break;
        case 24:
            quote = "Everyone Plants Seeds… Leaders Make Them Grow.";
            break
        case 25:
            quote = "Focus On The Team… That’s Leadership.";
            break;
        case 26:
            quote = "Be A Leader Who Never Loses The Perspective Of Those Who Follow You.";
            break;
        case 27:
            quote = "Leadership Quotes – True Leaders Do Not Shy Away From The Mirror.";
            break;
        case 28:
            quote = "A Good Leader Sees Past The Clouds.";
            break;
        case 29:
            quote = "Listen Well, And Your Followers Will Teach You To Be A Great Leader.";
            break;
        case 30:
            quote = "Abundance Awaits A Leader With Patience.";
            break
        case 31:
            quote = "Imagine Your Future… Now Go Create It.";
            break;
        case 32:
            quote = "Asking For Help Is A Top-Tier Leadership Skill.";
            break;
        case 33:
            quote = "Leaders Fuel Tomorrow’s Accomplishments Using Today’s Definitive Thoughts.";
            break;
        case 34:
            quote = "Discomfort For Leadership Is Proof For A Need.";
            break;
        case 35:
            quote = "Step One To Becoming A Leader Is Sticking Your Leg Out And Taking The First Step. Questions?";
            break;
        case 36:
            quote = "If You Can Keep Your Head When All About You Are Losing Theirs And Blaming It On You…You Will Be A Man My Son!";
            break
        case 37:
            quote = "Leadership Quotes – Ask The Right Question And No Task Remains Impossible.";
            break;
        case 38:
            quote = "Excite Your Team By Telling Them How Big Your Plans Really Are.";
            break;
        case 39:
            quote = "Real Success Is Rarely Tied To Money.";
            break;
        case 40:
            quote = "Push Past Being Shy And Let Your Passion Show.";
            break;
        case 41:
            quote = "Success Doesn’t Have To Be A Lonely Road.";
            break;
        case 42:
            quote = "The Path Forward May Be Clear, But Success Is Never Guaranteed.";
            break
        case 43:
            quote = "Your Hard Work And Success Will Clear A Path For Those Who Follow You.";
            break;
        case 44:
            quote = "There Is No ‘End’ When It Comes To Success.";
            break;
        case 45:
            quote = "If Life’s A Beach… Then Success Means Turning Stone To Sand.";
            break;
        case 46:
            quote = "Bring Everything You Got If You Plan To Succeed.";
            break;
        case 47:
            quote = "The Victory Doesn’t Count Unless You Can Bring A Win To Others.";
            break;
        case 48:
            quote = "The Obstacles You Face On The Road To Success Are Supposed To Be There.";
            break
        case 49:
            quote = "It Is NOT Cheating To Use The Proper Tools To Succeed.";
    }
    document.getElementById("quoteDisplay").innerHTML = '"' + quote + '"';
}
function test(){
    const num = Math.floor(Math.random()*50);
    return num;
}


