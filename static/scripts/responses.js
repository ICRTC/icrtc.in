

function getBotResponse(inp) {
    let input=inp.toLowerCase()
    if (input == "how do i book for conference") {
        return "You need to go to the respective conference page and redirect to registration page, which can be found below the prices. This is for both speakers and delegates categories. Select the respective category and proceed further to confirm your participation.";
    } else if (input == "how do i register for conference") {
        return "You need to go to the respective conference page and redirect to registration page, which can be found below the prices. This is for both speakers and delegates categories. Select the respective category and proceed further to confirm your participation.";
    } else if (input == "i haven't had confirmation of my conference booking yet, when should i expect it?") {
        return "Once the payment has been received we will email you a registration acknowledgement. However we make every effort to do this as early as possible, so please bear with us, your patience is highly appreciated.";
    } else if (input == "i need an invitation letter to the conference, how do i get one?") {
        return "Invitation letter is provided, those who require an invitation to assist with their travel visa application. Regarding the same you can directly contact the respective conference secretary through an email.";
    } else if (input == "will i get a certificate of attendance at conference?") {
        return "Yes, all delegates and speakers are able to get certificates at conference registration desk and are available anytime during the conference.";
    } else if (input == "i think i've paid twice, what should i do?") {
        return "Contact the respective conference secretary through email or you may directly contact at info@icrtc.net";
    } else if (input == "i need an invoice before i can pay, what should I do?") {
        return "You can simply email to the respective conference secretary.";
    } else if (input == "what are the dates of the conferences?") {
        return "All conference details will be available on the corresponding conference website or for more details contact the respective conference coordinator.";
    }
    else if (input.includes("date")||input.includes("tareek")||input.includes("when is the event")||input.includes("when is event")) {
        let date ="<a href='index.html#date'>" + "Head to Important Dates section on the Home Page" + "</a>";
        return date;
    }
    else if (input.includes("about")||input.includes("baare mein")) {
        let about ="<a href='about.html'>" + "Head to About Page" + "</a>";
        return about;
    }
    else if (input.includes("committee")||input.includes("member")||input.includes("patron")||input.includes("chief")||input.includes("chair")||input.includes("team")) {
        let committee ="<a href='committee.html'>" + "Head to Committee Page" + "</a>";
        return committee;
    }
    else if (input.includes("venue")||input.includes("where will it happen")||input.includes("delhi")) {
        let venue ="<a href='venue.html'>" + "Head to Venue Page" + "</a>";
        return venue;
    }
    else if (input.includes("call for paper")) {
        let call ="<a href='call.html'>" + "Head to Call for Paper Page" + "</a>";
        return call;
    }
    else if (input.includes("schedule")||input.includes("routine")||input.includes("technical session")||input.includes("timing")) {
        let call ="<a href='tech.html'>" + "Head to Technical Session Page" + "</a>";
        return call;
    }
    else if (input.includes("contact")||input.includes("address")||input.includes("mail")||input.includes("phone")||input.includes("number")||input.includes("website")) {
        let about ="<a href='contact.html'>" + "Head to Contact Page" + "</a>";
        return about;
    }
    else if (input.includes("speakers")||input.includes("keynote")) {
        let speakers ="<a href='index.html#key'>" + "Head to Keynote Speakers section on the Home Page" + "</a>";
        return speakers;
    }
    else if (input.includes("submission")||input.includes("submit")||input.includes("book")||input.includes("register")||input.includes("fee details")||input.includes("cancellation policy")||input.includes("fee inclusion")||input.includes("included in fee")||input.includes("guidlines")) {
        let submit ="<a href='PaperSub.html'>" + "Head to Paper Submission Page" + "</a>";
        return submit;
    }
    else if (input.includes("dos and donts")||input.includes("dos and don'ts")) {
        let submit ="<a href='PaperSub.html#conf1'>" + "Head to DOs and DON'Ts section on the Paper Submission Page" + "</a>";
        return submit;
    }
    else if (input.includes("no confirmation")||input.includes("no mail")||input.includes("no email")) {
        let conf ="Once the payment has been received we will email you a registration acknowledgement. However we make every effort to do this as early as possible, so please bear with us, your patience is highly appreciated.";
        return conf;
    }
    else if (input.includes("invoice")) {
        let invoice ="You can check your mail inbox or you can simply email to the respective conference secretary.";
        return invoice;
    }
    else if (input.includes("certificate")) {
        let certificate ="All delegates and speakers are able to get certificates at conference registration desk and are available anytime during the conference";
        return certificate;
    }
    else if (input.includes("invitation")) {
        let invitation ="Invitation letter is provided, those who require an invitation to assist with their travel visa application. Regarding the same you can directly contact the respective conference secretary through an email";
        return invitation;
    }

    // Simple responses
    if (input.includes("hello")||input.includes("hey")||input.includes("wassup")||input.includes("hello")||input.includes("what's up")||input.includes("sup")) {
        return "Hello, there!";
    } else if (input.includes("goodbye")) {
        return "Until the next time!!";
    }
    else if (input.includes("well")||input.includes("fine")||input.includes("good")||input.includes("kya hal hai")) {
        return "Great!! Ask me anything.";
    }
    else if (input.includes("not well")||input.includes("not fine")||input.includes("not good")||input.includes("bad")) {
        return "Please take care. Btw, Ask me anything.";
    }
    else if (input.includes("hi")) {
        return "Hi, there!";
    }else if (input.includes("i love you")) {
        return "I love innovation and you";
    }else if (input.includes("what can you do")) {
        return "Try to answer you, please go ahead!!";
    }else if (input.includes("turtle")) {
        return "🐢";
    }
    else if ( input.includes("how are you")) {
        return "I'm Fine, how are you doing?";
    
    }else if (input.includes("who made you")) {
        return "Mr. Samriddha Basu";
    
    }
    else if (input.includes("chod") ||input.includes("chutiya") ||input.includes("fuck") || input.includes("fcuk") || input.includes("bitch")) {
        return "Sorry!! I won't respond to that.";

    }else if (input.includes("who are you")) {
        return "Your assistant 😎, how can I help you?";
    
    } else {
        return "I'm afraid 🫢 I don't understand, please rephrase it!";
    }
}