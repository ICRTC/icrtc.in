

function getBotResponse(input) {
    if (input == "How do I book for conference") {
        return "You need to go to the respective conference page and redirect to registration page, which can be found below the prices. This is for both speakers and delegates categories. Select the respective category and proceed further to confirm your participation.";
    } else if (input == "How do I register for conference") {
        return "You need to go to the respective conference page and redirect to registration page, which can be found below the prices. This is for both speakers and delegates categories. Select the respective category and proceed further to confirm your participation.";
    } else if (input == "I haven't had confirmation of my conference booking yet, when should i expect it?") {
        return "Once the payment has been received we will email you a registration acknowledgement. However we make every effort to do this as early as possible, so please bear with us, your patience is highly appreciated.";
    } else if (input == "I need an invitation letter to the conference, How do I get one?") {
        return "Invitation letter is provided, those who require an invitation to assist with their travel visa application. Regarding the same you can directly contact the respective conference secretary through an email.";
    } else if (input == "Will I get a certificate of attendance at conference?") {
        return "Yes, all delegates and speakers are able to get certificates at conference registration desk and are available anytime during the conference.";
    } else if (input == "I think I've paid twice, what should i do?") {
        return "Contact the respective conference secretary through email or you may directly contact at info@icrtc.net";
    } else if (input == "I need an Invoice before I can pay, what should I do?") {
        return "You can simply email to the respective conference secretary.";
    } else if (input == "What are the dates of the conferences?") {
        return "All conference details will be available on the corresponding conference website or for more details contact the respective conference coordinator.";
    }
    else if (input.includes("date")||input.includes("Date")||input.includes("tareek")||input.includes("when is the event")) {
        let date ="<a href='index.html#date'>" + "Head to Important Dates section on the Home Page" + "</a>";
        return date;
    }
    else if (input.includes("about")||input.includes("About")||input.includes("baare mein")) {
        let about ="<a href='about.html'>" + "Head to About Page" + "</a>";
        return about;
    }
    else if (input.includes("committee")||input.includes("Committee")||input.includes("Member")||input.includes("member")||input.includes("patron")||input.includes("Patrons")||input.includes("chief")||input.includes("Chief")||input.includes("organising chair")||input.includes("organizing chair")||input.includes("Organising chair")||input.includes("Organizing chair")||input.includes("chair")||input.includes("Chair")||input.includes("team")||input.includes("Team")) {
        let committee ="<a href='committee.html'>" + "Head to Committee Page" + "</a>";
        return committee;
    }
    else if (input.includes("venue")||input.includes("where will it happen")||input.includes("Venue")||input.includes("Where will it happen")||input.includes("delhi")||input.includes("Delhi")) {
        let venue ="<a href='venue.html'>" + "Head to Venue Page" + "</a>";
        return venue;
    }
    else if (input.includes("call for paper")||input.includes("Cal for paper")||input.includes("Call for Paper")||input.includes("Call For Paper")) {
        let call ="<a href='call.html'>" + "Head to Call for Paper Page" + "</a>";
        return call;
    }
    else if (input.includes("schedule")||input.includes("Schedule")||input.includes("technical session")||input.includes("Technical session")||input.includes("timing")||input.includes("Timing")) {
        let call ="<a href='tech.html'>" + "Head to Technical Session Page" + "</a>";
        return call;
    }
    else if (input.includes("contact")||input.includes("Contact")||input.includes("Address")||input.includes("address")||input.includes("mail")||input.includes("Mail")||input.includes("phone")||input.includes("Phone")||input.includes("Number")||input.includes("number")||input.includes("website")||input.includes("Website")) {
        let about ="<a href='contact.html'>" + "Head to Contact Page" + "</a>";
        return about;
    }
    else if (input.includes("speakers")||input.includes("Speakers")||input.includes("keynote")||input.includes("Keynote")) {
        let speakers ="<a href='index.html#key'>" + "Head to Keynote Speakers section on the Home Page" + "</a>";
        return speakers;
    }
    else if (input.includes("submission")||input.includes("Submission")||input.includes("submit")||input.includes("Submit")||input.includes("book")||input.includes("Book")||input.includes("register")||input.includes("Register")||input.includes("Fee details")||input.includes("fee details")||input.includes("Fee Details")||input.includes("Cancellation Policy")||input.includes("cancellation policy")||input.includes("Fee inclusion")||input.includes("fee inclusion")||input.includes("included in fee")||input.includes("Included in fee")||input.includes("Guidlines")||input.includes("guidlines")) {
        let submit ="<a href='PaperSub.html'>" + "Head to Paper Submission Page" + "</a>";
        return submit;
    }
    else if (input.includes("dos and donts")||input.includes("dos and don'ts")||input.includes("Dos and donts")||input.includes("Dos and Donts")||input.includes("Dos and Don'ts")) {
        let submit ="<a href='PaperSub.html#conf1'>" + "Head to DOs and DON'Ts section on the Paper Submission Page" + "</a>";
        return submit;
    }
    else if (input.includes("no confirmation")||input.includes("No confirmation")||input.includes("no mail")||input.includes("no email")) {
        let conf ="Once the payment has been received we will email you a registration acknowledgement. However we make every effort to do this as early as possible, so please bear with us, your patience is highly appreciated.";
        return conf;
    }
    else if (input.includes("need an invoice")||input.includes("Need an Invoice")||input.includes("invoice")||input.includes("Invoice")) {
        let invoice ="You can check your mail inbox or you can simply email to the respective conference secretary.";
        return invoice;
    }
    else if (input.includes("certificate")||input.includes("Certificate")||input.includes("invoice")||input.includes("Invoice")) {
        let certificate ="All delegates and speakers are able to get certificates at conference registration desk and are available anytime during the conference";
        return certificate;
    }
    else if (input.includes("need an invitation")||input.includes("Need an invitation")||input.includes("invitation letter")||input.includes("Invitation letter")||input.includes("Invitation")||input.includes("invitation")) {
        let invitation ="Invitation letter is provided, those who require an invitation to assist with their travel visa application. Regarding the same you can directly contact the respective conference secretary through an email";
        return invitation;
    }

    // Simple responses
    if (input.includes("hello")||input.includes("Hello")) {
        return "Hello, there!";
    } else if (input.includes("goodbye")||input.includes("Goodbye")) {
        return "Until the next time!!";
    }
    else if (input.includes("well")||input.includes("fine")||input.includes("Well")||input.includes("Fine")||input.includes("good")||input.includes("Good")||input.includes("kya hal hai")||input.includes("Kya hal haiqw")) {
        return "Great!! Ask me anything.";
    }
    else if (input.includes("not well")||input.includes("not fine")||input.includes("Not well")||input.includes("Not fine")||input.includes("not good")||input.includes("Not Good")) {
        return "Please take care. btw Ask me anything.";
    }
    else if (input.includes("hi")||input.includes("Hi")) {
        return "Hi, there!";
    }else if (input.includes("i love you") || input.includes("I love you")) {
        return "I love innovation and you";
    }else if (input.includes("turtle")) {
        return "🐢";
    }
    else if (input.includes("How are you") || input.includes("how are you")) {
        return "I'm Fine, how are you doing?";
    
    }else if (input.includes("Who made you") || input.includes("who made you")) {
        return "Mr. Samriddha Basu";
    
    }
    else if (input.includes("chod") || input.includes("Chod") || input.includes("Chutiya") || input.includes("chutiya") || input.includes("Fuck") || input.includes("fuck") || input.includes("fcuk") || input.includes("Bitch") || input.includes("bitch")) {
        return "Sorry!! I won't respond to that.";

    }else if (input.includes("Who are you") || input.includes("who are you")) {
        return "Your assistant 😎, how can I help you?";
    
    } else {
        return "I'm afraid 🫢 I don't understand, please rephrase it!";
    }
}