

function getBotResponse(input) {
    if (input == "How do I book for conference") {
        return "You need to go to the respective conference page and redirect to registration page, which can be found below the prices. This is for both speakers and delegates categories. Select the respective category and proceed further to confirm your participation.";
    } else if (input == "How do I register for conference") {
        return "You need to go to the respective conference page and redirect to registration page, which can be found below the prices. This is for both speakers and delegates categories. Select the respective category and proceed further to confirm your participation.";
    } else if (input == "I haven't had confirmation of my conference booking yet, when should i expect it?") {
        return "Once the payment has been received we will email you a registration acknowledgement. However we make every effort to do this as early as possible, so please bear with us, your patience is highly appreciated.";
    } else if (input == "I need an invitation letter to the conference, How do I get one?") {
        return "Invitation letter is provided, who require an invitation to assist with their travel visa application. Regarding the same you can directly contact the respective conference secretary through an email.";
    } else if (input == "Will I get a certificate of attendance at conference?") {
        return "Yes, all delegates and speakers are able to get certificates at conference registration desk and are available anytime during the conference.";
    } else if (input == "I think I've paid twice, what should i do?") {
        return "Contact the respective conference secretary through email or you may directly contact at info@icrtc.net";
    } else if (input == "I need an Invoice before I can pay, what should I do?") {
        return "You can simply email to the respective conference secretary.";
    } else if (input == "What are the dates of the conferences?") {
        return "All conference details will be available on the corresponding conference website or for more details contact the respective conference coordinator.";
    }
    else if (input.includes("date")||input.includes("Date")||input.includes("tareek")) {
        let date ="<a href='index.html#date'>" + "Head to Important Dates section on the Home Page" + "</a>";
        return date;
    }
    else if (input.includes("book")||input.includes("Book")||input.includes("register")||input.includes("Register")) {
        let book ="<a href='index.html#registration'>" + "Head to Registration section on the Home Page" + "</a>";
        return book;
    }
    else if (input.includes("no confirmation")||input.includes("No confirmation")||input.includes("no mail")||input.includes("no email")) {
        let conf ="Once the payment has been received we will email you a registration acknowledgement. However we make every effort to do this as early as possible, so please bear with us, your patience is highly appreciated.";
        return conf;
    }
    else if (input.includes("need an invoice")||input.includes("Need an Invoice")||input.includes("invoice")||input.includes("Invoice")) {
        let conf ="You can check your mail inbox or you can simply email to the respective conference secretary.";
        return conf;
    }

    // Simple responses
    if (input == "hello") {
        return "Hello, there!";
    } else if (input == "goodbye") {
        return "Until the next time!!";
    }
    else if (input == "well"||input == "fine"||input == "Well"||input == "Fine") {
        return "Great!! Ask me anything.";
    }
    else if (input == "hi") {
        return "Hi, there!";
    } else {
        return "I'm afraid I don't understand, please rephrase it!";
    }
}