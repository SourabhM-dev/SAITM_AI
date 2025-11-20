// script.js

// 1. Select elements safely
const chatInput = document.querySelector('.chat-input textarea');
const chatbox = document.querySelector(".chatbox");

// We use getElementById because it is more reliable than querySelector
const sendChatBtn = document.getElementById('sendBTN');

let userMessage;

// PASTE YOUR NEW API KEY HERE
const API_KEY = "AIzaSyDjyeI68b_VuJi3cSOn4ceVDlLn2gNKqbQ"; 

// --- START: College Specific Data ---
const collegeInfo = {
    name: "St. Andrews Institute of Technology and Management (SAITM)",
    saitm: "St. Andrews Institute of Technology and Management",
    location: "Khurrampur, Farrukh Nagar, Haily Mandi Road, Gurgaon- 122506",
    address: "Khurrampur, Farrukh Nagar, Haily Mandi Road, Gurgaon- 122506",
    website: "https://www.saitm.org/",
    admissionsContact: "For admissions, contact the office at [Insert Phone Number] or email [Insert Email Address]. Visit the admissions section on our website.",

    applicationFee: "INR 500/-. You can fill the application form online or offline.",

    courseFees: { 
        description: "SAITM offers professional courses at UG and PG levels. St. Andrews College of Pharmacy (SACP), associated with us, offers B.Pharma and D.Pharma.",
        undergraduate: [
            { name: "Bachelors of Technology (B.Tech) / B.Tech Lateral Entry", fee: "INR 1,05,000/- per year", note: "Fee is the same for all B.Tech branches." },
            { name: "Bachelors of Computer Application (BCA)", fee: "INR 82,000/- per year" },
            { name: "Bachelors of Business Administration (BBA)", fee: "INR 82,000/- per year" }
        ],
        postgraduate: [
            { name: "Masters of Business Administration (MBA)", fee: "INR 1,32,000/- per year" },
            { name: "Masters of Technology (M.Tech)", fee: "INR 98,500/- per year" },
            { name: "Masters of Computer Application (MCA)", fee: "INR 82,000/- per year" }
        ],
        pharmacy: [
             { name: "Bachelors of Pharmacy (B.Pharma)", college: "St. Andrews College of Pharmacy (SACP)", fee: "INR 98,500/- per year", note: "4-year undergraduate program focusing on pharmaceutical sciences." },
             { name: "Diploma in Pharmacy (D.Pharma)", college: "St. Andrews College of Pharmacy (SACP)", fee: "INR 78,500/- per year", note: "2-year diploma program providing basic pharmacy knowledge and skills." }
        ]
    },

    hostelFees: { 
        boys: [
            { type: "Double Sharing AC", fee: "INR 1,25,000/- per year" },
            { type: "Triple Sharing AC", fee: "INR 1,02,500/- per year" },
            { type: "Triple Sharing Non-AC", fee: "INR 82,500/- per year" },
            { type: "Four Sharing Non-AC", fee: "INR 57,500/- per year" }
        ],
        girls: [
            { type: "Double Sharing AC", fee: "INR 1,25,000/- per year" },
            { type: "Triple Sharing AC", fee: "INR 82,500/- per year" },
            { type: "Triple Sharing Non-AC", fee: "INR 67,500/- per year" },
            { type: "Four Sharing Non-AC", fee: "INR 57,500/- per year" }
        ]
    },

    mentors_2nd_year: [
        { section: "CSE A (4th semester)", faculty: ["Dr Sunita", "Ms. Anshi"] },
        { section: "CSE B (4th semester)", faculty: ["Ms. Kirti", "Mr. Hitesh"] },
        { section: "CSE C (4th semester)", faculty: ["Mr. Yatin", "Dr Jyoti Anand"] },
        { section: "AIML (4th semester)", faculty: ["Ms Shewangi"] },
        { section: "DS (4th semester)", faculty: ["Mr Rajiv Tiwari"] }
    ],

    subjects: [
        { name: "Computer Organization & Architecture (COA)", code: "PCC-CSE-204G", faculty: "Mr. Yatin" },
        { name: "Operating System (OS)", code: "PCC-CSE-206G", faculty: "Dr. Sunita" },
        { name: "Object Oriented Programming + Lab (OOPs)", code: "PCC-CSE-208G", faculty: "Mrs. Anshi" },
        { name: "Organizational Behaviour (OB)", code: "HSMC-02G", faculty: "Mr. Deepak" },
        { name: "Discrete Mathematics (DM)", code: "PCC-CSE-202G", faculty: "Dr. Jyoti" },
        { name: "Environmental Sciences (EVS)", code: "MC-106G", faculty: "Ms. Jyoti Raghav" },
        { name: "Web Technologies Lab (WT)", code: "PCC-CSE-210G", faculty: "Mrs. Kirti Gautam" },
        { name: "Operating System Lab (OS_LAB)", code: "LC-CSE-212G", faculty: "Dr. Sunita / Shewangi" },
        { name: "OOPS using C++ Lab (OOPS_LAB)", code: "LC-CSE-214G", faculty: "Anshi" },
        { name: "Web Tech Lab (WT_LAB)", code: "LC-CSE-216G", faculty: "Mrs. Kirti" },
        { name: "Universal Human Value & Ethics (UHV)", code: "-", faculty: "Ms. Bhanu" }
    ],

    classSections: [
        {
            program: "B.Tech", department: "CSE/CST", section: "4A", semester: 4,
            students: [
                "Aadarsh Tiwari", "Ashish Yadav", "Abdullah", "Abhay Prasad", "Abhimanyu Kumar", "Abhishek Ray", "Aishwary Sharma", "Ajay", "Akitovi V Shohe", "Aman Kumar Tiwri", "Aman Parmar", "Mohd Aamir", "Anish Kumar Maurya", "Ankush Kumar", "Ansh Kumar", "Ansu", "Anurag Raghav", "Ashish Raj", "Ashish Kumar Singh", "Ayush Anand", "Balansh Agnihotri", "Deepak Kumar Thakur", "Devanshu Gupta", "Diwakar Kumar", "Ebad Ali", "Faizan Raza", "Gaurav Goswami", "Gaurav Kumar Jha", "Hariom Kumar Dubey", "Harshita", "Harshita Bisht", "Jharna Saharia", "Jatin", "Jyoti Kumari", "Kajal", "Kalpana", "Karan Sharma", "Komal", "Lavish", "Manikya Raj", "Manish", "Mithun Chakladar", "Mohit Choudhary", "Mukesh Sharma", "Neha Bora", "Sarthak Dagar", "Priyank Singh", "Prakash Kumar", "Prateek Saggu", "Priti Jha", "Priyanka", "Priyavarat", "Rahul Kumar", "Raj Singh", "Rajat", "Ram Chandra", "Sunny", "Rohan", "Sachin Kumar Sharma", "Sagar Joshi", "Sahil Kumar", "Sandeep Prajapati", "Sandeep", "Sharon Shaji", "Shanuj Kumar", "Vicky", "Alok Kumar Yadav", "Amit Kumar", "Aniket", "Janhvi Singh", "Divyanshu Gupta", "Rahbar Alam", "Rohit Yadav", "Pawan Yadav"
            ]
        },
        {
            program: "B.Tech", department: "CSE/CST", section: "4B", semester: 4,
            students: [
                { rollNo: "233082", name: "Vishal" }, { rollNo: "233083", name: "Vishnu" }, { rollNo: "233084", name: "Vivek" }, { rollNo: "233085", name: "Yash" }, { rollNo: "233087", name: "Zoya" }, { rollNo: "233088", name: "Ankit" }, { rollNo: "233090", name: "Saurabh" }, { rollNo: "233091", name: "Gulfam" }, { rollNo: "233092", name: "Boby" }, { rollNo: "233093", name: "Ravnish" }, { rollNo: "233094", name: "Shivam" }, { rollNo: "233095", name: "Yogesh" }, { rollNo: "233096", name: "Priyanshu" }, { rollNo: "233097", name: "Md Kaif" }, { rollNo: "233099", name: "Sahil" }, { rollNo: "233100", name: "Hitesh" }, { rollNo: "233101", name: "Archita" }, { rollNo: "233102", name: "Kanhaiya" }, { rollNo: "233103", name: "Kanishka" }, { rollNo: "233104", name: "Deepak" }, { rollNo: "233105", name: "Abhimany" }, { rollNo: "233106", name: "Aaditya" }, { rollNo: "233107", name: "Muskan" }, { rollNo: "233108", name: "Nimish" }, { rollNo: "233109", name: "Vikash" }, { rollNo: "233110", name: "Tushar" }, { rollNo: "233111", name: "Vani" }, { rollNo: "233114", name: "Deepak" }, { rollNo: "233115", name: "Harshit" }, { rollNo: "233116", name: "Rishi" }, { rollNo: "233118", name: "Himesh" }, { rollNo: "233119", name: "Nikesh" }, { rollNo: "233120", name: "Anshita" }, { rollNo: "233121", name: "Aditya" }, { rollNo: "233122", name: "Dishu" }, { rollNo: "233124", name: "Anurag" }, { rollNo: "233126", name: "Kanika" }, { rollNo: "233127", name: "Yogita" }, { rollNo: "233128", name: "Ashutosh" }, { rollNo: "233129", name: "Nancy" }, { rollNo: "233130", name: "Sumit" }, { rollNo: "233132", name: "Vipul" }, { rollNo: "233133", name: "Geetanshu" }, { rollNo: "233134", name: "Vanshika" }, { rollNo: "233135", name: "Rai" }, { rollNo: "233136", name: "Aditya" }, { rollNo: "233137", name: "Arhan Ariz" }, { rollNo: "233138", name: "Sourav" }, { rollNo: "233139", name: "Vishal" }, { rollNo: "233140", name: "Vishv" }, { rollNo: "233142", name: "Ansh" }, { rollNo: "233144", name: "Himanshu" }, { rollNo: "233145", name: "Sahil" }, { rollNo: "233146", name: "Siddharth" }, { rollNo: "233147", name: "Aditya" }, { rollNo: "233148", name: "Ankush" }, { rollNo: "233149", name: "Shivam" }, { rollNo: "233150", name: "M Vignesh" }, { rollNo: "233151", name: "Ashish" }, { rollNo: "233153", name: "Harshit" }, { rollNo: "233154", name: "Kapil" }, { rollNo: "233155", name: "Neha" }, { rollNo: "233157", name: "Gautam" }, { rollNo: "233158", name: "Vivekanan" }, { rollNo: "233159", name: "Tanjir" }, { rollNo: "233160", name: "Hemant" }, { rollNo: "236028", name: "Amisha Kumari" }, { rollNo: "236029", name: "Amit Yadav" }, { rollNo: "236031", name: "Sujal Kumar" }, { rollNo: "236032", name: "Alok Mishra" }, { rollNo: "236033", name: "Anuj Kumar" }, { rollNo: "236034", name: "Rishita" }, { rollNo: "236036", name: "Nikhil Saini" }, { rollNo: "236037", name: "Vikash Kumar" }, { rollNo: "236038", name: "Balbeer" }, { rollNo: "236040", name: "Mustafijur Ahmed" }, { rollNo: "236041", name: "Ranjeet Kumar" }, { rollNo: "236043", name: "Ayush Kumar" }
            ]
        },
        {
            program: "B.Tech", department: "CSE/CST", section: "4C", semester: 4,
            students: [
                { rollNo: "233163", name: "Deepanshu" }, { rollNo: "233164", name: "Paras" }, { rollNo: "233165", name: "Ritika" }, { rollNo: "233167", name: "Shubham" }, { rollNo: "233169", name: "Kavya" }, { rollNo: "233170", name: "Himanshu" }, { rollNo: "233171", name: "Prince" }, { rollNo: "233172", name: "Laxmi" }, { rollNo: "233173", name: "Mohd" }, { rollNo: "233174", name: "Anmol" }, { rollNo: "233176", name: "Ankit" }, { rollNo: "233177", name: "Jyoti" }, { rollNo: "233178", name: "Lakshay" }, { rollNo: "233181", name: "Gautam" }, { rollNo: "233183", name: "Mandeep" }, { rollNo: "233185", name: "Mayank" }, { rollNo: "233186", name: "Ashish" }, { rollNo: "233187", name: "Yash" }, { rollNo: "233188", name: "Aayush" }, { rollNo: "233189", name: "Harshit" }, { rollNo: "233191", name: "Sneha" }, { rollNo: "233194", name: "Ayush" }, { rollNo: "233195", name: "Yash" }, { rollNo: "233196", name: "Himanshi" }, { rollNo: "233197", name: "Nishant" }, { rollNo: "233198", name: "Rishab" }, { rollNo: "233199", name: "Himanshu" }, { rollNo: "233200", name: "Ajeet" }, { rollNo: "233202", name: "Naushaba" }, { rollNo: "233203", name: "Garima" }, { rollNo: "233204", name: "Sourabh" }, { rollNo: "233205", name: "Anish" }, { rollNo: "233206", name: "Sachin" }, { rollNo: "233207", name: "Deepak" }, { rollNo: "233209", name: "Akash" }, { rollNo: "233210", name: "Kusharg" }, { rollNo: "233211", name: "Meenakshi" }, { rollNo: "233212", name: "Shivam" }, { rollNo: "233213", name: "Vikas" }, { rollNo: "233214", name: "Rohit" }, { rollNo: "233215", name: "Sachin" }, { rollNo: "233216", name: "Tanisha" }, { rollNo: "233217", name: "Rani" }, { rollNo: "N/A", name: "Aman Singh" }, { rollNo: "234006", name: "Gulshan" }, { rollNo: "234007", name: "Sandeep" }, { rollNo: "234008", name: "Udmi" }, { rollNo: "234009", name: "Jitesh" }, { rollNo: "236020", name: "Himanshu" }, { rollNo: "236030", name: "Aditi" }, { rollNo: "243701", name: "Avijit" }, { rollNo: "243702", name: "Hemant" }, { rollNo: "243703", name: "Ritu" }, { rollNo: "243704", name: "Viney" }, { rollNo: "243706", name: "Vikas" }, { rollNo: "243707", name: "Aryan" }, { rollNo: "243709", name: "Harsh" }, { rollNo: "243712", name: "Aryan" }, { rollNo: "243713", name: "Sneha" }, { rollNo: "243715", name: "Shristy" }, { rollNo: "243716", name: "Aaditya" }, { rollNo: "243717", name: "Ansh" }, { rollNo: "243718", name: "Ashish" }, { rollNo: "243719", name: "Shruti" }, { rollNo: "243705", name: "Aman" }, { rollNo: "236054", name: "Name Not Provided" }, { rollNo: "236055", name: "Shubham Yadav" }, { rollNo: "236056", name: "Abhishek Panjare" }, { rollNo: "236057", name: "Prashant" }, { rollNo: "236058", name: "Abul Hasan" }, { rollNo: "236059", name: "Aashish Kumar" }, { rollNo: "236060", name: "Arun Kumar" }, { rollNo: "236061", name: "Deepak" }, { rollNo: "236062", name: "Gourav" }, { rollNo: "236065", name: "Harsh" }, { rollNo: "236066", name: "Anil Kumar Mahato" }
            ]
        }
    ]
};
// --- END: College Specific Data ---


// Function to create chat list item
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    const p = document.createElement("p");
    p.textContent = message;
    if (message.includes('\n')) {
        p.innerHTML = p.textContent.replace(/\n/g, '<br>');
    }
    chatLi.appendChild(p);
    return chatLi;
}

const generateResponse = (incomingChatLi, messageToSendToAI) => {
    // We are removing '-latest' and '-001'. Just plain 'gemini-1.5-flash'
// We are updating to the model explicitly found in your JSON list: Gemini 2.5 Flash
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
    
    const messageElement = incomingChatLi.querySelector("p");
    messageElement.textContent = "Thinking Quickly...";

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: messageToSendToAI }] }]
        })
    };

    fetch(API_URL, requestOptions)
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    console.error("API error response:", err);
                    let errorMsg = `API error: ${res.status} ${res.statusText}`;
                    if (err.error && err.error.message) errorMsg += ` - ${err.error.message}`;
                    if (res.status === 400 && err.error?.message.toLowerCase().includes('api key not valid')) {
                        errorMsg += ". Please check if the API key is correct and enabled.";
                    }
                    throw new Error(errorMsg);
                });
            }
            return res.json();
        })
        .then(data => {
            let responseText = "";
            if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
                responseText = data.candidates[0].content.parts[0].text;
            } else if (data.candidates?.[0]?.finishReason && data.candidates[0].finishReason !== "STOP") {
                 responseText = `Response stopped due to: ${data.candidates[0].finishReason}. Try rephrasing your question.`;
                 messageElement.classList.add("error");
            } else {
                 responseText = "Received an unexpected or empty response from the model.";
                 messageElement.classList.add("error");
                 console.warn("Unexpected API response structure:", data);
            }
            messageElement.textContent = responseText;
            if (responseText.includes('\n')) {
                messageElement.innerHTML = messageElement.textContent.replace(/\n/g, '<br>');
            }
        })
        .catch((error) => {
            messageElement.classList.add("error");
            // This will show the exact error in the chat bubble to help us debug
            messageElement.textContent = `Technical Error: ${error.message}`;
            console.error("Fetch/Process Error:", error);
        })
        .finally(() => {
            chatbox.scrollTo(0, chatbox.scrollHeight);
        });
};

// I have removed the extra fetch block that was causing the crash here.

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = null;

    // --- START: Check for College Specific Questions ---

    // --- Student List / Find Student Logic ---
    const studentKeywords = ["student", "class list", "roll call", "section list"];
    const findStudentKeywords = ["is ", "find student", "where is student", "student named "]; 
    const listKeywords = ["list students", "student list", "class list", "roll call"];

    // Check if the query is related to students
    if (studentKeywords.some(kw => lowerCaseMessage.includes(kw))) {
        let studentResponse = "";
        let sectionIdentifier = null; 
        let studentNameQuery = null;
        let isListQuery = listKeywords.some(kw => lowerCaseMessage.includes(kw));
        let isFindQuery = false;

        // 1. Identify Section
        if (lowerCaseMessage.includes("4a") || lowerCaseMessage.includes("section a")) sectionIdentifier = "4a";
        else if (lowerCaseMessage.includes("4b") || lowerCaseMessage.includes("section b")) sectionIdentifier = "4b";
        else if (lowerCaseMessage.includes("4c") || lowerCaseMessage.includes("section c")) sectionIdentifier = "4c";

        // 2. Identify if it's a "find student" query
        findStudentKeywords.forEach(kw => {
            if (lowerCaseMessage.startsWith(kw)) {
                 isFindQuery = true;
                 studentNameQuery = userMessage.substring(kw.length).trim();
                 const sectionsInQuery = [" in 4a", " in 4b", " in 4c", " in section a", " in section b", " in section c"];
                 sectionsInQuery.forEach(sec => {
                     if (studentNameQuery.toLowerCase().endsWith(sec)) {
                         studentNameQuery = studentNameQuery.substring(0, studentNameQuery.toLowerCase().lastIndexOf(sec)).trim();
                     }
                 });
            }
        });

        if (isFindQuery && studentNameQuery) {
             let foundInSection = null;
             let foundStudentInfo = null;
             const nameLower = studentNameQuery.toLowerCase();

             collegeInfo.classSections.forEach(section => {
                 if (!sectionIdentifier || section.section.toLowerCase() === sectionIdentifier) {
                     section.students.forEach(student => {
                         let currentName = (typeof student === 'string') ? student : student.name;
                         if (currentName && currentName.toLowerCase() === nameLower) {
                             foundInSection = section.section;
                             foundStudentInfo = student;
                         }
                     });
                 }
             });

             if (foundInSection) {
                 studentResponse = `Yes, ${studentNameQuery} is found in Section ${foundInSection} (B.Tech CSE/CST, 4th Sem).`;
                 if (typeof foundStudentInfo === 'object' && foundStudentInfo.rollNo) {
                     studentResponse += ` Roll No: ${foundStudentInfo.rollNo}.`;
                 }
             } else {
                 studentResponse = `Sorry, I couldn't find a student named "${studentNameQuery}"`;
                 if (sectionIdentifier) {
                    studentResponse += ` in Section ${sectionIdentifier.toUpperCase()}`;
                 }
                 studentResponse += " (B.Tech CSE/CST, 4th Sem).";
             }
             studentResponse += "\n\n(Note: Based on available 4th Sem B.Tech CSE/CST data. Please be mindful of student privacy.)";
             botResponse = studentResponse;

        // 4. Process Query: List Students
        } else if (isListQuery && sectionIdentifier) {
             const targetSection = collegeInfo.classSections.find(s => s.section.toLowerCase() === sectionIdentifier);
             if (targetSection) {
                 studentResponse = `Student List for B.Tech CSE/CST, Section ${targetSection.section}, Semester ${targetSection.semester} (${targetSection.students.length} students):\n\n`;
                 let studentEntries = [];
                 if (typeof targetSection.students[0] === 'string') { // Section 4A format
                     studentEntries = targetSection.students;
                 } else { // Section 4B/4C format
                     studentEntries = targetSection.students.map(s => `- ${s.rollNo || 'N/A'}: ${s.name || 'N/A'}`);
                 }
                 studentResponse += studentEntries.join("\n");

                 if (targetSection.students.length > 20) { 
                      studentResponse += "\n\n(Note: This is a long list.)";
                 }
                 studentResponse += "\n\n(Please be mindful of student privacy. Data based on available records.)";
             } else {
                 studentResponse = `Sorry, I don't have the student list specifically for section ${sectionIdentifier.toUpperCase()}. Available B.Tech CSE/CST 4th Sem sections are 4A, 4B, 4C.`;
             }
             botResponse = studentResponse;

        // 5. Handle Ambiguous Student Queries
        } else {
             botResponse = "I can provide student lists for B.Tech CSE/CST 4th Semester sections 4A, 4B, and 4C, or check if a specific student is in one of these sections.\n\nPlease ask like:\n- 'list students in 4A'\n- 'is [student name] in section 4C?'\n\n(Remember to respect student privacy.)";
        }
    }

    // --- Other Specific Questions (Location, Website, Contact, Mentors, Hostel, Fees, Subjects) ---
    // Put the student logic *first* or ensure keywords don't overlap too much with other sections (like 'list' which might be used elsewhere)
    // The rest of the 'else if' blocks from the previous version follow here...

    // Location check
    else if (lowerCaseMessage.includes("location") || lowerCaseMessage.includes("address") || lowerCaseMessage.includes("where is")) {
        botResponse = `Our college, ${collegeInfo.name}, is located at: ${collegeInfo.location}`;
    }
    // Website check
    else if (lowerCaseMessage.includes("website")) {
        botResponse = collegeInfo.website ? `The official website is: ${collegeInfo.website}` : `I don't have the specific website link, but you can search for "${collegeInfo.name}".`;
    }
     // Contact/Admissions check
     else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("admission office")) {
        botResponse = collegeInfo.admissionsContact || `You can find contact details on the official ${collegeInfo.name} website: ${collegeInfo.website || '(Website not specified)'}`;
    }
    // --- Mentor Check ---
    else if (lowerCaseMessage.includes("mentor") || lowerCaseMessage.includes("class teacher")) {
        let mentorResponse = "";
        let specificMentorFound = false;
        collegeInfo.mentors_2nd_year.forEach(mentorInfo => {
            const sectionShortName = mentorInfo.section.split(' ')[0].toLowerCase();
             const sectionFullNameLower = mentorInfo.section.toLowerCase();
            if (lowerCaseMessage.includes(sectionShortName) || lowerCaseMessage.includes(sectionFullNameLower) ) {
                mentorResponse = `The mentors for ${mentorInfo.section} are: ${mentorInfo.faculty.join(" and ")}.`;
                specificMentorFound = true;
            }
        });
        if (!specificMentorFound) {
             mentorResponse = "Here are the 2nd year (4th Semester) class mentors:\n\n";
             collegeInfo.mentors_2nd_year.forEach(mentorInfo => {
                 mentorResponse += `- ${mentorInfo.section}: ${mentorInfo.faculty.join(" and ")}\n`;
             });
        }
         botResponse = mentorResponse;
    }
    // --- Hostel Fee Check ---
    else if (lowerCaseMessage.includes("hostel") || lowerCaseMessage.includes("dormitory") || lowerCaseMessage.includes("accommodation")) {
         let hostelResponse = "";
         const askedBoys = lowerCaseMessage.includes("boy");
         const askedGirls = lowerCaseMessage.includes("girl");
         let specificRoomFound = false;
         const checkRoomType = (options, gender) => {
             options.forEach(option => {
                 if (lowerCaseMessage.includes(option.type.toLowerCase())) {
                     hostelResponse = `The fee for ${gender} Hostel - ${option.type} is ${option.fee}.`;
                     specificRoomFound = true;
                 }
             });
         };
         if (askedBoys || !askedGirls) checkRoomType(collegeInfo.hostelFees.boys, "Boys");
         if (askedGirls || !askedBoys) checkRoomType(collegeInfo.hostelFees.girls, "Girls");

         if (!specificRoomFound) {
             if (askedBoys) {
                 hostelResponse = "Boys Hostel Fees (per year):\n";
                 collegeInfo.hostelFees.boys.forEach(option => { hostelResponse += `- ${option.type}: ${option.fee}\n`; });
             } else if (askedGirls) {
                 hostelResponse = "Girls Hostel Fees (per year):\n";
                 collegeInfo.hostelFees.girls.forEach(option => { hostelResponse += `- ${option.type}: ${option.fee}\n`; });
             } else {
                 hostelResponse = "Hostel accommodation is available for both boys and girls.\n\nBoys Hostel Fees (per year):\n";
                 collegeInfo.hostelFees.boys.forEach(option => { hostelResponse += `- ${option.type}: ${option.fee}\n`; });
                 hostelResponse += "\nGirls Hostel Fees (per year):\n";
                 collegeInfo.hostelFees.girls.forEach(option => { hostelResponse += `- ${option.type}: ${option.fee}\n`; });
             }
         }
         botResponse = hostelResponse;
    }
     // --- Fee/Cost/Tuition Check (Consolidated) ---
     else if (lowerCaseMessage.includes("fee") || lowerCaseMessage.includes("cost") || lowerCaseMessage.includes("tuition") || lowerCaseMessage.includes("price")) {
        let feeFound = false;
        if (lowerCaseMessage.includes("application") || lowerCaseMessage.includes("apply")) {
            botResponse = `The application fee is ${collegeInfo.applicationFee}.`; feeFound = true;
        }
        if (!feeFound) {
            const allCourses = [...collegeInfo.courseFees.undergraduate, ...collegeInfo.courseFees.postgraduate, ...collegeInfo.courseFees.pharmacy];
            allCourses.forEach(course => {
                const courseNameLower = course.name.toLowerCase();
                 const abbrMatch = course.name.match(/\(([^)]+)\)/);
                 const courseAbbrLower = abbrMatch ? abbrMatch[1].toLowerCase().replace(/\./g, '') : null;
                 const nameParts = courseNameLower.split('(')[0].trim().split(' ');
                 const mentionsCourse = nameParts.some(part => lowerCaseMessage.includes(part)) || (courseAbbrLower && lowerCaseMessage.includes(courseAbbrLower)) || lowerCaseMessage.includes(courseNameLower);
                if (mentionsCourse) {
                     botResponse = `The fee for ${course.name}`; if(course.college) botResponse += ` at ${course.college}`; botResponse += ` is ${course.fee}. ${course.note || ''}`; feeFound = true;
                 }
             });
        }
         if (!feeFound && lowerCaseMessage.includes("pharmacy")) {
             botResponse = `St. Andrews College of Pharmacy (SACP) offers the following programs:\n`;
             collegeInfo.courseFees.pharmacy.forEach(course => { botResponse += `- ${course.name}: ${course.fee}. ${course.note || ''}\n`; }); feeFound = true;
         }
        if (!feeFound) {
            botResponse = `${collegeInfo.courseFees.description}\n\nSAITM Undergraduate Course Fees:\n`;
            collegeInfo.courseFees.undergraduate.forEach(course => { botResponse += `- ${course.name}: ${course.fee} ${course.note || ''}\n`; });
            botResponse += "\nSAITM Postgraduate Course Fees:\n";
            collegeInfo.courseFees.postgraduate.forEach(course => { botResponse += `- ${course.name}: ${course.fee} ${course.note || ''}\n`; });
             botResponse += "\nSACP Pharmacy Course Fees:\n";
             collegeInfo.courseFees.pharmacy.forEach(course => { botResponse += `- ${course.name}: ${course.fee} ${course.note || ''}\n`; });
            botResponse += `\nThe Application Fee is ${collegeInfo.applicationFee}.`; botResponse += "\nFor hostel fees, please ask specifically about 'hostel fees'."; feeFound = true;
        }
    }
    // --- Subject/Faculty Check ---
    else if (lowerCaseMessage.includes("subject") || lowerCaseMessage.includes("course") || lowerCaseMessage.includes("program") || lowerCaseMessage.includes("faculty") || lowerCaseMessage.includes("teacher") || lowerCaseMessage.includes("professor") || lowerCaseMessage.startsWith("who teaches") || lowerCaseMessage.includes("teach")) {
        let foundSpecific = false; let response = "";
        collegeInfo.subjects.forEach(subject => { if (subject.faculty && lowerCaseMessage.includes(subject.faculty.toLowerCase())) { let taughtSubjects = collegeInfo.subjects.filter(s => s.faculty && s.faculty.toLowerCase() === subject.faculty.toLowerCase()).map(s => `${s.name} (${s.code || 'No Code'})`); if (taughtSubjects.length > 0) { response = `${subject.faculty} teaches:\n- ${taughtSubjects.join('\n- ')}`; foundSpecific = true; } return; } });
        if (!foundSpecific && (lowerCaseMessage.startsWith("who teaches") || lowerCaseMessage.includes("faculty of") || lowerCaseMessage.includes("teacher of"))) { let queryPart = lowerCaseMessage.split("who teaches")[1] || lowerCaseMessage.split("faculty of")[1] || lowerCaseMessage.split("teacher of")[1]; if (queryPart) { queryPart = queryPart.trim(); collegeInfo.subjects.forEach(subject => { const nameLower = subject.name.toLowerCase(); const codeLower = subject.code?.toLowerCase(); const abbrMatch = nameLower.match(/\((.*?)\)/); const abbrLower = abbrMatch ? abbrMatch[1].toLowerCase() : null; if (nameLower.includes(queryPart) || (codeLower && codeLower.includes(queryPart)) || (abbrLower && abbrLower.includes(queryPart))) { response = `The faculty for ${subject.name} (Code: ${subject.code || 'N/A'}) is ${subject.faculty || 'Not specified'}.`; foundSpecific = true; } }); } if (queryPart && !foundSpecific) { response = `Sorry, I couldn't find the faculty for "${queryPart}".`; foundSpecific = true; } }
        if (!foundSpecific && (lowerCaseMessage.includes("code for") || lowerCaseMessage.includes("subject code"))) { let queryPart = lowerCaseMessage.split("code for")[1] || lowerCaseMessage.split("subject code")[1]; if (queryPart) { queryPart = queryPart.trim(); collegeInfo.subjects.forEach(subject => { const nameLower = subject.name.toLowerCase(); const abbrMatch = nameLower.match(/\((.*?)\)/); const abbrLower = abbrMatch ? abbrMatch[1].toLowerCase() : null; if (nameLower.includes(queryPart) || (abbrLower && queryPart === abbrLower)) { response = `The code for ${subject.name} is ${subject.code || 'Not specified'}.`; foundSpecific = true; } }); } if (queryPart && !foundSpecific) { response = `Sorry, I couldn't find the code for a subject matching "${queryPart}".`; foundSpecific = true; } }
        if (!foundSpecific) { if (collegeInfo.subjects?.length > 0) { response = `Here are the subjects and faculty details I have (Note: Primarily 4th Sem focus based on data):\n\n`; collegeInfo.subjects.forEach(subject => { response += `- ${subject.name} (Code: ${subject.code || 'N/A'}), Faculty: ${subject.faculty || 'Not specified'}\n`; }); } else { response = `I don't have the specific list of subjects right now.`; } } botResponse = response;
    }

    // --- END: Check for College Specific Questions ---

    // If a specific response was generated, display it
    if (botResponse) {
        const incomingChatLi = createChatLi(botResponse, "chat-incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    } else {
        // Otherwise, send to the AI (Gemini)
        const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi, userMessage);
    }
}

// Event listeners (Send button, Enter key)
// We check if the button exists to prevent errors
if (sendChatBtn) {
    sendChatBtn.addEventListener("click", handleChat);
} else {
    console.error("Send button not found! Check your HTML ID 'sendBTN'.");
}

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && chatInput.value.trim() !== "") {
        e.preventDefault();
        handleChat();
    }
});

// Close button functionality
function cancel() {
    let chatbotcomplete = document.querySelector(".chatBot");
    if (chatbotcomplete.style.display !== 'none') {
        chatbotcomplete.style.display = "none";
        if (!document.querySelector('.lastMessage')) {
             let lastMsg = document.createElement("p");
             lastMsg.textContent = 'Thanks for using our Chatbot!';
             lastMsg.classList.add('lastMessage');
             document.body.appendChild(lastMsg);
        }
    }
}

// --- END script.js ---