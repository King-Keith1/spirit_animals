document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { text: "What is your name?", type: "text", key: "name" },
        { text: "Is your name based on the Bible?", type: "boolean", key: "nameOrigin" },
        { text: "What is your birthdate?", type: "date", key: "birthDate" },
        { text: "At a party, you tend to...", type: "choice", key: "mbti_EI1",
            options: ["Mingle with everyone, energized by the crowd", "Stick to a few people or find a quiet corner"],
            mbti: { "Mingle with everyone, energized by the crowd": "E", "Stick to a few people or find a quiet corner": "I" } },
        { text: "After a long, demanding week, you recharge best by...", type: "choice", key: "mbti_EI2",
            options: ["Going out and being around people", "Having quiet time alone"],
            mbti: { "Going out and being around people": "E", "Having quiet time alone": "I" } },
        { text: "In a group project, you'd rather...", type: "choice", key: "mbti_EI3",
            options: ["Think out loud and bounce ideas off others", "Process your thoughts internally before sharing"],
            mbti: { "Think out loud and bounce ideas off others": "E", "Process your thoughts internally before sharing": "I" } },
        { text: "Meeting new people generally makes you feel...", type: "choice", key: "mbti_EI4",
            options: ["Energized and curious", "A little drained, even if it goes well"],
            mbti: { "Energized and curious": "E", "A little drained, even if it goes well": "I" } },
        { text: "You trust more...", type: "choice", key: "mbti_SN1",
            options: ["Concrete facts and past experience", "Patterns, possibilities, and future potential"],
            mbti: { "Concrete facts and past experience": "S", "Patterns, possibilities, and future potential": "N" } },
        { text: "When learning something new, you prefer...", type: "choice", key: "mbti_SN2",
            options: ["Step-by-step instructions and concrete examples", "Grasping the big picture and filling in details later"],
            mbti: { "Step-by-step instructions and concrete examples": "S", "Grasping the big picture and filling in details later": "N" } },
        { text: "You're more drawn to conversations about...", type: "choice", key: "mbti_SN3",
            options: ["What's happening right now", "What could happen someday"],
            mbti: { "What's happening right now": "S", "What could happen someday": "N" } },
        { text: "Your imagination tends to run toward...", type: "choice", key: "mbti_SN4",
            options: ["Practical improvements to real things", "Abstract ideas and hypotheticals"],
            mbti: { "Practical improvements to real things": "S", "Abstract ideas and hypotheticals": "N" } },
        { text: "When making a tough call, you lead with...", type: "choice", key: "mbti_TF1",
            options: ["Logic and consistency", "Values and how it affects people"],
            mbti: { "Logic and consistency": "T", "Values and how it affects people": "F" } },
        { text: "When a friend vents about a problem, your instinct is to...", type: "choice", key: "mbti_TF2",
            options: ["Offer solutions and point out the fix", "Listen and validate their feelings first"],
            mbti: { "Offer solutions and point out the fix": "T", "Listen and validate their feelings first": "F" } },
        { text: "You'd rather be known for being...", type: "choice", key: "mbti_TF3",
            options: ["Fair and objective", "Compassionate and warm"],
            mbti: { "Fair and objective": "T", "Compassionate and warm": "F" } },
        { text: "Feedback lands better with you when it's...", type: "choice", key: "mbti_TF4",
            options: ["Direct and to the point", "Delivered gently, with care for your feelings"],
            mbti: { "Direct and to the point": "T", "Delivered gently, with care for your feelings": "F" } },
        { text: "You prefer your days to be...", type: "choice", key: "mbti_JP1",
            options: ["Planned out with a clear structure", "Open-ended, ready to adapt as you go"],
            mbti: { "Planned out with a clear structure": "J", "Open-ended, ready to adapt as you go": "P" } },
        { text: "Right before a trip, you...", type: "choice", key: "mbti_JP2",
            options: ["Have an itinerary mapped out", "Pack light and figure it out as you go"],
            mbti: { "Have an itinerary mapped out": "J", "Pack light and figure it out as you go": "P" } },
        { text: "Deadlines make you...", type: "choice", key: "mbti_JP3",
            options: ["Plan backward and finish early", "Work best in a last-minute burst"],
            mbti: { "Plan backward and finish early": "J", "Work best in a last-minute burst": "P" } },
        { text: "Your workspace or room usually looks...", type: "choice", key: "mbti_JP4",
            options: ["Organized, everything has a place", "Comfortably chaotic, you know where things are"],
            mbti: { "Organized, everything has a place": "J", "Comfortably chaotic, you know where things are": "P" } },
        { text: "How do you handle pressure or stress?", type: "choice", key: "stressHandling", options: ["Stay calm and analyze", "Act quickly to resolve it", "Take a break and come back", "Get overwhelmed but push through"] },
        { text: "Are you a night or day person?", type: "choice", key: "timeOfDay", options: ["Night", "Day", "Both, just depends on the situation"] },
        { text: "Which best describes how you make decisions?", type: "choice", key: "decisionMaking", options: ["Logically, based on facts", "Emotionally, based on feelings", "Intuitively, gut feeling", "I struggle with decisions"] },
        { text: "Would you rather be a ruler of a nation or be free, not shackled to anything?", type: "choice", key: "rulerOrFree", options: ["Ruler", "Free"] },
        { text: "Would you rather be a Carnivore, Herbivore, or Omnivore?", type: "choice", key: "diet", options: ["Carnivore", "Herbivore", "Omnivore"] },
        { text: "What kind of environment do you thrive in?", type: "choice", key: "environment", options: ["Forest", "Desert", "Mountains", "City", "Ocean", "Plains"] },
        { text: "Would you prefer being alone most of your life or surrounded by people?", type: "choice", key: "socialPreference", options: ["Alone", "Surrounded by people"] },
        { text: "Do you naturally take charge in group situations, or do you prefer to follow others' lead?", type: "choice", key: "leadership", options: ["Take charge", "Follow others' lead"] },
        { text: "What season do you thrive in?", type: "choice", key: "season", options: ["Spring", "Summer", "Fall", "Winter"] },
        { text: "Which trait best defines you?", type: "choice", key: "definingTrait",
            options: [
                "Curiosity — always exploring, always asking why",
                "Empathy — attuned to how others feel",
                "Independence — you'd rather chart your own path",
                "Wisdom — thoughtful, grounded, sees the big picture",
                "Perseverance — you don't quit"
            ],
            mapKeys: {
                "Curiosity — always exploring, always asking why": { mainTrait: "Curiosity", personality: "Curious" },
                "Empathy — attuned to how others feel": { mainTrait: "Empathy", personality: "Peaceful" },
                "Independence — you'd rather chart your own path": { mainTrait: "Independence", personality: "Creative" },
                "Wisdom — thoughtful, grounded, sees the big picture": { mainTrait: "Wisdom", personality: "Sensible" },
                "Perseverance — you don't quit": { mainTrait: "Perseverance", personality: "Courageous" }
            } },
        { text: "If you had to rely on just one of your senses, what would it be?", type: "choice", key: "sense", options: ["Hearing", "Smell", "Eyesight", "Sixth sense"] },
        { text: "When you take on a task, you like to get it done...?", type: "choice", key: "taskApproach", options: ["Your way", "In a team", "As soon as possible"] },
        { text: "Faced with an unusual situation...", type: "choice", key: "unusualSituation", options: ["React immediately", "Think before acting", "Get around the problem"] },
        { text: "How do you react to failure?", type: "choice", key: "failureReaction", options: ["Learn from it and move on", "Try again immediately", "Take time to recover", "Avoid risks to prevent failure"] },
        { text: "What do people find most compelling about you?", type: "choice", key: "compellingTrait",
            options: [
                "Your charisma and confidence",
                "Your mind and intelligence",
                "Your speed and drive",
                "Your curiosity and air of mystery",
                "Not sure"
            ],
            mapKeys: {
                "Your charisma and confidence": { firstImpression: "Charisma", seduction: "Confidence" },
                "Your mind and intelligence": { firstImpression: "Mind", seduction: "Intelligence" },
                "Your speed and drive": { firstImpression: "Speed", seduction: "Determination" },
                "Your curiosity and air of mystery": { firstImpression: "Curiosity", seduction: "Mystery" },
                "Not sure": { firstImpression: "I don't know", seduction: "I don't know" }
            } },
        { text: "What does your ideal vacation look like?", type: "choice", key: "vacation", options: ["Relaxing in nature or at home", "Exciting adventures and exploring", "Socializing at parties and events"] },
        { text: "Most important objective?", type: "choice", key: "objective", options: ["Fame", "Wealth", "Love", "Peace"] },
        { text: "Your ambition?", type: "choice", key: "ambition", options: ["Fulfill dreams", "Enjoy life", "Be a leader in major projects"] },
        { text: "Which major animal do you identify with?", type: "choice", key: "animalType", options: ["Bird", "Mammal", "Reptile", "Fish", "Amphibian"] },
        { text: "Which superpower would you choose?", type: "choice", key: "superpower", options: ["Super strength", "Super speed", "Flight", "X-ray vision", "Breathe underwater"] },
        { text: "Which element do you feel connected to?", type: "choice", key: "element", options: ["Fire", "Water", "Wind", "Earth"] },
        { text: "How do you handle conflict?", type: "choice", key: "conflictHandling", options: ["Avoid it", "Face it head-on", "Try to mediate", "Stay silent but hold a grudge"] },
        { text: "How do you handle criticism?", type: "choice", key: "criticismHandling", options: ["Reflect and learn from it", "Defend yourself and explain", "Feel hurt but move on", "Ignore it entirely"] },
        { text: "How do you prefer to spend your free time?", type: "choice", key: "freeTime", options: ["Exploring new hobbies", "Relaxing and recharging", "Spending time with loved ones", "Working on personal projects"] },
        { text: "What motivates you to keep going when things get tough?", type: "choice", key: "motivationSource", options: ["Your long-term goals", "Support from loved ones", "The desire to prove yourself", "The belief that things will get better"] }
        ];
        let currentQuestionIndex = 0;
        let userResponses = {};
    
        const questionText = document.getElementById("question-text");
        const answerOptions = document.getElementById("answer-options");
        const nextBtn = document.getElementById("next-btn");
        const progressBarFill = document.getElementById("progress-bar-fill");
    
        function loadQuestion() {
            const question = questions[currentQuestionIndex];
            questionText.textContent = question.text;
            answerOptions.innerHTML = "";
            nextBtn.disabled = true;

            if (progressBarFill) {
                const percent = Math.round((currentQuestionIndex / questions.length) * 100);
                progressBarFill.style.width = percent + "%";
            }
    
            if (question.type === "text" || question.type === "date" || question.type === "number") {
                const input = document.createElement("input");
                input.type = question.type;
                input.addEventListener("input", () => {
                    userResponses[question.key] = input.value;
                    nextBtn.disabled = input.value === "";
                });
                answerOptions.appendChild(input);
            } else if (question.type === "boolean") {
                ["YES", "NO"].forEach(choice => {
                    const button = document.createElement("button");
                    button.textContent = choice;
                    button.addEventListener("click", () => {
                        userResponses[question.key] = choice === "YES";
                        nextBtn.disabled = false;
                    });
                    answerOptions.appendChild(button);
                });
            } else if (question.type === "choice") {
                question.options.forEach(choice => {
                    const button = document.createElement("button");
                    button.textContent = choice;
                    button.addEventListener("click", () => {
                        if (question.mapKeys && question.mapKeys[choice]) {
                            Object.assign(userResponses, question.mapKeys[choice]);
                        } else {
                            userResponses[question.key] = choice;
                        }
                        nextBtn.disabled = false;
                    });
                    answerOptions.appendChild(button);
                });
            }
        }
    
        const mbtiDescriptions = {
            INTJ: "The Architect — strategic, independent, always three steps ahead.",
            INTP: "The Logician — endlessly curious, loves untangling ideas.",
            ENTJ: "The Commander — bold, decisive, born to lead.",
            ENTP: "The Debater — quick-witted, thrives on possibility.",
            INFJ: "The Advocate — quietly idealistic, deeply insightful.",
            INFP: "The Mediator — guided by values, rich inner world.",
            ENFJ: "The Protagonist — charismatic, brings people together.",
            ENFP: "The Campaigner — enthusiastic, sees potential everywhere.",
            ISTJ: "The Logistician — dependable, practical, keeps things running.",
            ISFJ: "The Defender — warm, loyal, quietly protective.",
            ESTJ: "The Executive — organized, decisive, gets things done.",
            ESFJ: "The Consul — caring, sociable, keeps the group together.",
            ISTP: "The Virtuoso — hands-on, calm under pressure.",
            ISFP: "The Adventurer — gentle, spontaneous, led by aesthetics.",
            ESTP: "The Entrepreneur — energetic, bold, lives in the moment.",
            ESFP: "The Entertainer — spontaneous, warm, loves the spotlight."
        };

        function computeMBTI(responses) {
            const dichotomies = [
                { keys: ["mbti_EI1", "mbti_EI2", "mbti_EI3", "mbti_EI4"], letters: ["E", "I"] },
                { keys: ["mbti_SN1", "mbti_SN2", "mbti_SN3", "mbti_SN4"], letters: ["S", "N"] },
                { keys: ["mbti_TF1", "mbti_TF2", "mbti_TF3", "mbti_TF4"], letters: ["T", "F"] },
                { keys: ["mbti_JP1", "mbti_JP2", "mbti_JP3", "mbti_JP4"], letters: ["J", "P"] }
            ];
            let type = "";
            for (const dichotomy of dichotomies) {
                const counts = {};
                dichotomy.keys.forEach(key => {
                    const question = questions.find(q => q.key === key);
                    const answer = responses[key];
                    if (question && question.mbti && answer && question.mbti[answer]) {
                        const letter = question.mbti[answer];
                        counts[letter] = (counts[letter] || 0) + 1;
                    }
                });
                const [first, second] = dichotomy.letters;
                if (!counts[first] && !counts[second]) return null; // dichotomy unanswered
                type += (counts[first] || 0) >= (counts[second] || 0) ? first : second;
            }
            return type;
        }

        // Counts how many of the 4 letter positions two MBTI types share
        function mbtiOverlap(typeA, typeB) {
            if (!typeA || !typeB || typeA.length !== 4 || typeB.length !== 4) return 0;
            let matches = 0;
            for (let i = 0; i < 4; i++) {
                if (typeA[i] === typeB[i]) matches++;
            }
            return matches;
        }

        nextBtn.addEventListener("click", () => {
            currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            console.log("Quiz complete!", userResponses);

            if (userResponses["birthDate"]) {
                const birthDate = new Date(userResponses["birthDate"]);
                if (isNaN(birthDate.getTime())) {
                    console.error("Birthdate is invalid.");
                    return;
                }
                const zodiacGen = getZodiacAndGeneration(birthDate);
                userResponses["zodiac"] = zodiacGen.zodiac;
                userResponses["generation"] = zodiacGen.generation;
            } else {
                console.error("Birthdate is missing.");
            }

            const mbtiType = computeMBTI(userResponses);
            if (mbtiType) {
                userResponses["mbtiType"] = mbtiType;
            }

            const selectedAnimal = determineSpiritAnimal(userResponses);

            let resultContainer = document.getElementById("result-container");
            if (!resultContainer) {
                resultContainer = document.createElement("div");
                resultContainer.id = "result-container";
                document.body.appendChild(resultContainer);
            }

            // Hide the quiz container
            const quizContainer = document.getElementById("quiz-container");
            quizContainer.style.display = "none";

            function escapeHtml(str) {
                const div = document.createElement("div");
                div.textContent = str;
                return div.innerHTML;
            }

            function possessive(name) {
                const trimmed = (name || "").trim();
                if (!trimmed) return "Your";
                const escaped = escapeHtml(trimmed);
                return escaped.endsWith("s") || escaped.endsWith("S") ? `${escaped}'` : `${escaped}'s`;
            }

            console.log(selectedAnimal, "MBTI:", userResponses["mbtiType"]);
            const mbtiBlurb = userResponses["mbtiType"] && mbtiDescriptions[userResponses["mbtiType"]]
                ? `<p>${mbtiDescriptions[userResponses["mbtiType"]]}</p>`
                : "";
            resultContainer.innerHTML = `
                <img src="${selectedAnimal.image}" alt="${selectedAnimal.name}" class="spirit-animal-image" loading="lazy">
                <h2>${possessive(userResponses["name"])} Spirit Animal: ${selectedAnimal.name}</h2>
                ${userResponses["mbtiType"] ? `<span class="mbti-badge">${userResponses["mbtiType"]}</span>` : ""}
                <p>Symbolic Meaning: ${selectedAnimal.symbolicMeaning}</p>
                ${mbtiBlurb}
                ${userResponses["mbtiType"] ? `<p class="mbti-disclaimer">Just for fun — this quiz isn't a substitute for a real MBTI assessment. Think of it as a nudge, not a verdict.</p>` : ""}
            `;
            resultContainer.classList.add("fade-in");
        }
    });

    function getZodiacAndGeneration(dateString) {
        let zodiac = "Unknown";
        let generation = "Unknown";

        if (dateString) {
            const date = new Date(dateString);
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const year = date.getFullYear();

            const zodiacSigns = [
                { sign: "Capricorn", start: "12-22", end: "01-19" },
                { sign: "Aquarius", start: "01-20", end: "02-18" },
                { sign: "Pisces", start: "02-19", end: "03-20" },
                { sign: "Aries", start: "03-21", end: "04-19" },
                { sign: "Taurus", start: "04-20", end: "05-20" },
                { sign: "Gemini", start: "05-21", end: "06-20" },
                { sign: "Cancer", start: "06-21", end: "07-22" },
                { sign: "Leo", start: "07-23", end: "08-22" },
                { sign: "Virgo", start: "08-23", end: "09-22" },
                { sign: "Libra", start: "09-23", end: "10-22" },
                { sign: "Scorpio", start: "10-23", end: "11-21" },
                { sign: "Sagittarius", start: "11-22", end: "12-21" },
            ];

            for (let zodiacItem of zodiacSigns) {
                const [startMonth, startDay] = zodiacItem.start.split("-").map(Number);
                const [endMonth, endDay] = zodiacItem.end.split("-").map(Number);
                const startDate = new Date(year, startMonth - 1, startDay);
                const endDate = new Date(year, endMonth - 1, endDay);
                const currentDate = new Date(year, month - 1, day);

                if (startMonth > endMonth) {
                    if (currentDate >= startDate || currentDate <= endDate) {
                        zodiac = zodiacItem.sign;
                        break;
                    }
                } else {
                    if (currentDate >= startDate && currentDate <= endDate) {
                        zodiac = zodiacItem.sign;
                        break;
                    }
                }
            }

            if (year >= 1946 && year <= 1964) generation = "Boomers";
            else if (year >= 1965 && year <= 1980) generation = "Gen X";
            else if (year >= 1981 && year <= 1996) generation = "Millennials";
            else if (year >= 1997 && year <= 2012) generation = "Gen Z";
            else if (year > 2012) generation = "Gen Alpha";
        }

        return { zodiac, generation };
    }
    
    const animalData = {
    "birds": [
        {
            "name": "Eagle",
            "type": "Bird",
            "traits": [
                "Visionary",
                "Independent",
                "Strong-willed"
            ],
            "zodiacMatches": [
                "Aries",
                "Scorpio"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Leadership, Freedom, Perspective",
            "image": "images/Eagle.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze",
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts",
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Mountains",
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall",
                    "Spring"
                ],
                "mainTrait": [
                    "Independence",
                    "Wisdom"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way",
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on",
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Charisma",
                    "Mind"
                ],
                "seduction": [
                    "Confidence",
                    "Determination"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous",
                    "Curious"
                ],
                "objective": [
                    "Fame",
                    "Leadership"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight",
                    "Super strength"
                ],
                "element": [
                    "Wind",
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Reflect and learn from it",
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Exploring new hobbies",
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals",
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "ENTJ"
            ]
        },
        {
            "name": "Hawk",
            "type": "Bird",
            "traits": [
                "Focused",
                "Strategic",
                "Determined"
            ],
            "zodiacMatches": [
                "Aries",
                "Sagittarius"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Vision, Clarity, Purpose",
            "image": "images/Hawk.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze",
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts",
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Mountains",
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall",
                    "Spring"
                ],
                "mainTrait": [
                    "Independence",
                    "Curiosity"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way",
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on",
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Mind"
                ],
                "seduction": [
                    "Confidence",
                    "Determination"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous",
                    "Curious"
                ],
                "objective": [
                    "Leadership"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight",
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies",
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals",
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "ENTJ"
            ]
        },
        {
            "name": "Raven",
            "type": "Bird",
            "traits": [
                "Mysterious",
                "Curious",
                "Stealthy"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Aquarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Mysticism, Intelligence, Transformation",
            "image": "images/Raven.webp",
            "attributes": {
                "stressHandling": [
                    "Take a break and come back",
                    "Get overwhelmed but push through"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Mountains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall",
                    "Winter"
                ],
                "mainTrait": [
                    "Curiosity",
                    "Wisdom"
                ],
                "sense": [
                    "Sixth sense"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting",
                    "Get around the problem"
                ],
                "failureReaction": [
                    "Take time to recover"
                ],
                "firstImpression": [
                    "Curiosity"
                ],
                "seduction": [
                    "Mystery",
                    "Intelligence"
                ],
                "vacation": [
                    "Relaxing in nature or at home"
                ],
                "personality": [
                    "Peaceful",
                    "Creative"
                ],
                "objective": [
                    "Knowledge"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Sixth sense",
                    "Flight"
                ],
                "element": [
                    "Air",
                    "Darkness"
                ],
                "conflictHandling": [
                    "Stay silent but hold a grudge"
                ],
                "criticismHandling": [
                    "Ignore it entirely",
                    "Feel hurt but move on"
                ],
                "freeTime": [
                    "Reading, exploring secrets"
                ],
                "motivationSource": [
                    "The belief that things will get better"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Owl",
            "type": "Bird",
            "traits": [
                "Wise",
                "Intuitive",
                "Stealthy"
            ],
            "zodiacMatches": [
                "Capricorn",
                "Pisces"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Wisdom, Mystery, Perception",
            "image": "images/Owl.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts",
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest",
                    "Mountains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Wisdom",
                    "Independence"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mind"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relaxing in nature or at home"
                ],
                "personality": [
                    "Peaceful",
                    "Sensible"
                ],
                "objective": [
                    "Knowledge",
                    "Wisdom"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Sixth sense"
                ],
                "element": [
                    "Wind",
                    "Darkness"
                ],
                "conflictHandling": [
                    "Try to mediate"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Reading, observing"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Phoenix",
            "type": "Bird",
            "traits": [
                "Resilient",
                "Transformative",
                "Immortal"
            ],
            "zodiacMatches": [
                "Leo",
                "Sagittarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Rebirth, Fire, Renewal",
            "image": "images/Phoenix.webp",
            "attributes": {
                "stressHandling": [
                    "Try again immediately",
                    "Get overwhelmed but push through"
                ],
                "timeOfDay": [
                    "Both, just depends on the situation"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Desert",
                    "Mountains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Perseverance"
                ],
                "sense": [
                    "Sixth sense"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Charisma"
                ],
                "seduction": [
                    "Confidence",
                    "Mystery"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight",
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ENTP",
                "INTP"
            ]
        },
        {
            "name": "Albatross",
            "type": "Bird",
            "traits": [
                "Navigator",
                "Longevity",
                "Graceful"
            ],
            "zodiacMatches": [
                "Sagittarius",
                "Aquarius"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Freedom, Endurance, Journey",
            "image": "images/Albatross.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Wisdom"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Graceful"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Exploring new places"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Hummingbird",
            "type": "Bird",
            "traits": [
                "Energetic",
                "Joyful",
                "Agile"
            ],
            "zodiacMatches": [
                "Gemini",
                "Virgo"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Lightness, Adaptability, Happiness",
            "image": "images/Hummingbird.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Curiosity"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Joyful"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Curious",
                    "Creative"
                ],
                "objective": [
                    "Happiness"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Get around the problem"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ENTP",
                "ENFP"
            ]
        },
        {
            "name": "Kingfisher",
            "type": "Bird",
            "traits": [
                "Precise",
                "Focused",
                "Resilient"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Capricorn"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Patience, Precision, Prosperity",
            "image": "images/Kingfisher.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean",
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Perseverance"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Focused"
                ],
                "seduction": [
                    "Determination"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Osprey",
            "type": "Bird",
            "traits": [
                "Hunter",
                "Strong",
                "Determined"
            ],
            "zodiacMatches": [
                "Aries",
                "Leo"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Power, Focus, Victory",
            "image": "images/Osprey.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Mountains",
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Determination"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Parrot",
            "type": "Bird",
            "traits": [
                "Communicative",
                "Social",
                "Intelligent"
            ],
            "zodiacMatches": [
                "Gemini",
                "Libra"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Expression, Vibrancy, Adaptability",
            "image": "images/Parrot.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "City"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Curiosity"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Get around the problem"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Charisma"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Creative"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ENTP",
                "ENFP"
            ]
        },
        {
            "name": "Penguin",
            "type": "Bird",
            "traits": [
                "Resilient",
                "Loyal",
                "Adaptable"
            ],
            "zodiacMatches": [
                "Cancer",
                "Capricorn"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Survival, Community, Endurance",
            "image": "images/Penguin.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Loyalty"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Loyal"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Griffin",
            "type": "Mythical Bird",
            "traits": [
                "Guardian",
                "Regal",
                "Mighty"
            ],
            "zodiacMatches": [
                "Leo",
                "Aries"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Power, Honor, Nobility",
            "image": "images/Griffen.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Mountains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Strength"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Charisma"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mythical Bird"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ESTP",
                "ISTP"
            ]
        },
        {
            "name": "Rooster",
            "type": "Bird",
            "traits": [
                "Proud",
                "Vocal",
                "Alert"
            ],
            "zodiacMatches": [
                "Leo",
                "Virgo"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Confidence, Vigilance, Hard Work",
            "image": "images/Rooster.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Confidence"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Charisma"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ENTP",
                "ESTP"
            ]
        },
        {
            "name": "Stork",
            "type": "Bird",
            "traits": [
                "Nurturing",
                "Migratory",
                "Hopeful"
            ],
            "zodiacMatches": [
                "Cancer",
                "Libra"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "New Beginnings, Family, Luck",
            "image": "images/Stork.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Nurturing"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Hopeful"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Love"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Falcon",
            "type": "Bird",
            "traits": [
                "Swift",
                "Precise",
                "Independent"
            ],
            "zodiacMatches": [
                "Aries",
                "Sagittarius"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Speed, Focus, Determination",
            "image": "images/Falcon.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Mountains",
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Spring",
                    "Summer"
                ],
                "mainTrait": [
                    "Independence"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Charisma"
                ],
                "seduction": [
                    "Confidence",
                    "Determination"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight",
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ESTP",
                "ISTP"
            ]
        },
        {
            "name": "Vulture",
            "type": "Bird",
            "traits": [
                "Patient",
                "Survivor",
                "Resourceful"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Capricorn"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Transformation, Cleansing, Renewal",
            "image": "images/Vulture.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Desert"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Patience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Resourceful"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        },
        {
            "name": "Woodpecker",
            "type": "Bird",
            "traits": [
                "Persistent",
                "Determined",
                "Rhythmic"
            ],
            "zodiacMatches": [
                "Taurus",
                "Cancer"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Opportunity, Determination, Awareness",
            "image": "images/Woodpecker.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Determination"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Persistent"
                ],
                "seduction": [
                    "Determination"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "INTJ"
            ]
        },
        {
            "name": "Crow",
            "type": "Bird",
            "traits": [
                "Intelligent",
                "Adaptable",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Aquarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Insight, Adaptability, Magic",
            "image": "images/Crow.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze",
                    "Take a break and come back"
                ],
                "timeOfDay": [
                    "Day",
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall",
                    "Winter"
                ],
                "mainTrait": [
                    "Wisdom",
                    "Curiosity"
                ],
                "sense": [
                    "Sixth sense"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting",
                    "Get around the problem"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mind",
                    "Curiosity"
                ],
                "seduction": [
                    "Mystery",
                    "Intelligence"
                ],
                "vacation": [
                    "Relaxing in nature or at home"
                ],
                "personality": [
                    "Creative",
                    "Curious"
                ],
                "objective": [
                    "Knowledge"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Sixth sense",
                    "Flight"
                ],
                "element": [
                    "Air"
                ],
                "conflictHandling": [
                    "Stay silent but hold a grudge"
                ],
                "criticismHandling": [
                    "Reflect and learn from it",
                    "Feel hurt but move on"
                ],
                "freeTime": [
                    "Reading, exploring secrets"
                ],
                "motivationSource": [
                    "The belief that things will get better"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "INFJ"
            ]
        },
        {
            "name": "Flamingo",
            "type": "Bird",
            "traits": [
                "Graceful",
                "Social",
                "Vibrant"
            ],
            "zodiacMatches": [
                "Libra",
                "Leo"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Balance, Community, Beauty",
            "image": "images/Flamingo.webp",
            "attributes": {
                "stressHandling": [
                    "Take a break and come back"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Curiosity"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Get around the problem"
                ],
                "failureReaction": [
                    "Take time to recover"
                ],
                "firstImpression": [
                    "Joyful"
                ],
                "seduction": [
                    "Confidence",
                    "Mystery"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Creative",
                    "Peaceful"
                ],
                "objective": [
                    "Happiness"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Water",
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Feel hurt but move on"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "The belief that things will get better"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENFP"
            ]
        },
        {
            "name": "Dove",
            "type": "Bird",
            "traits": [
                "Peaceful",
                "Loving",
                "Gentle"
            ],
            "zodiacMatches": [
                "Libra",
                "Pisces"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Peace, Love, Harmony",
            "image": "images/Dove.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Peaceful"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Bird"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        }
    ],
    "mammals": [
        {
            "name": "Armadillo",
            "type": "Mammal",
            "traits": [
                "Protective",
                "Resilient",
                "Adaptable"
            ],
            "zodiacMatches": [
                "Taurus",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Defense, Boundaries, Survival",
            "image": "images/Armadillo.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Desert",
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Protective"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        },
        {
            "name": "Bat",
            "type": "Mammal",
            "traits": [
                "Mysterious",
                "Intuitive",
                "Nocturnal"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Rebirth, Illusion, Transition",
            "image": "images/Bat.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Caves"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Intuition"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Exploring new places"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Bear",
            "type": "Mammal",
            "traits": [
                "Strong",
                "Protective",
                "Introspective"
            ],
            "zodiacMatches": [
                "Cancer",
                "Leo"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Strength, Courage, Solitude",
            "image": "images/Bear.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Mountains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Strength"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Bison",
            "type": "Mammal",
            "traits": [
                "Powerful",
                "Grounded",
                "Abundant"
            ],
            "zodiacMatches": [
                "Taurus",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Stability, Prosperity, Resilience",
            "image": "images/Bison.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Grounded"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Powerful"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Boar",
            "type": "Mammal",
            "traits": [
                "Determined",
                "Fierce",
                "Resourceful"
            ],
            "zodiacMatches": [
                "Aries",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Courage, Tenacity, Assertiveness",
            "image": "images/Boar.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Determination"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fierce"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Capybara",
            "type": "Mammal",
            "traits": [
                "Social",
                "Peaceful",
                "Adaptable"
            ],
            "zodiacMatches": [
                "Libra",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Harmony, Community, Relaxation",
            "image": "images/Capybara.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Peaceful"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Cat",
            "type": "Mammal",
            "traits": [
                "Independent",
                "Curious",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Leo",
                "Scorpio"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Mystery, Independence, Intuition",
            "image": "images/Cat.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "City",
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Independence"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Cheetah",
            "type": "Mammal",
            "traits": [
                "Fast",
                "Focused",
                "Ambitious"
            ],
            "zodiacMatches": [
                "Aries",
                "Sagittarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Speed, Agility, Determination",
            "image": "images/Cheetah.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Determination"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Focused"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Deer",
            "type": "Mammal",
            "traits": [
                "Gentle",
                "Sensitive",
                "Graceful"
            ],
            "zodiacMatches": [
                "Cancer",
                "Pisces"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Gentleness, Innocence, Intuition",
            "image": "images/Deer.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Gentleness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Graceful"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Dolphin",
            "type": "Mammal",
            "traits": [
                "Playful",
                "Intelligent",
                "Social"
            ],
            "zodiacMatches": [
                "Gemini",
                "Aquarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Joy, Harmony, Communication",
            "image": "images/Dolphin.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Intelligence"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Playful"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Happiness"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Dog",
            "type": "Mammal",
            "traits": [
                "Loyal",
                "Friendly",
                "Protective"
            ],
            "zodiacMatches": [
                "Cancer",
                "Libra"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Loyalty, Companionship, Trust",
            "image": "images/Dog.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "City",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Loyalty"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Friendly"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Love"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Elephant",
            "type": "Mammal",
            "traits": [
                "Wise",
                "Strong",
                "Loyal"
            ],
            "zodiacMatches": [
                "Cancer",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Wisdom, Strength, Memory",
            "image": "images/Elephant.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Plains",
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Wisdom"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ENTJ"
            ]
        },
        {
            "name": "Fox",
            "type": "Mammal",
            "traits": [
                "Clever",
                "Adaptable",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Gemini",
                "Scorpio"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Cunning, Intelligence, Strategy",
            "image": "images/Fox.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Cleverness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Gorilla",
            "type": "Mammal",
            "traits": [
                "Strong",
                "Gentle",
                "Protective"
            ],
            "zodiacMatches": [
                "Leo",
                "Taurus"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Strength, Leadership, Family",
            "image": "images/Gorilla.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Strength"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ENTJ"
            ]
        },
        {
            "name": "Hedgehog",
            "type": "Mammal",
            "traits": [
                "Defensive",
                "Resourceful",
                "Gentle"
            ],
            "zodiacMatches": [
                "Virgo",
                "Capricorn"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Protection, Resilience, Humility",
            "image": "images/Hedgehog.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        },
        {
            "name": "Horse",
            "type": "Mammal",
            "traits": [
                "Free-spirited",
                "Strong",
                "Energetic"
            ],
            "zodiacMatches": [
                "Sagittarius",
                "Aries"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Freedom, Power, Adventure",
            "image": "images/Horse.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Freedom"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "As soon as possible"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Energetic"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ENTP",
                "ESTP"
            ]
        },
        {
            "name": "Hyena",
            "type": "Mammal",
            "traits": [
                "Resourceful",
                "Adaptable",
                "Mischievous"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Gemini"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Survival, Cunning, Humor",
            "image": "images/Hyena.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Desert",
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resourcefulness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Mischievous"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFP",
                "ENTP"
            ]
        },
        {
            "name": "Jaguar",
            "type": "Mammal",
            "traits": [
                "Powerful",
                "Mysterious",
                "Fearless"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Leo"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Strength, Mystery, Leadership",
            "image": "images/Jaguar.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Power"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Koala",
            "type": "Mammal",
            "traits": [
                "Calm",
                "Gentle",
                "Resilient"
            ],
            "zodiacMatches": [
                "Cancer",
                "Taurus"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Relaxation, Peace, Adaptability",
            "image": "images/Koala.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Calmness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Leopard",
            "type": "Mammal",
            "traits": [
                "Stealthy",
                "Confident",
                "Independent"
            ],
            "zodiacMatches": [
                "Leo",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Agility, Confidence, Mystery",
            "image": "images/Leopard.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Confidence"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Stealthy"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Lion",
            "type": "Mammal",
            "traits": [
                "Courageous",
                "Regal",
                "Leader"
            ],
            "zodiacMatches": [
                "Leo",
                "Aries"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Strength, Leadership, Majesty",
            "image": "images/Lion.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Leadership"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Regal"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ESTP",
                "ESTJ"
            ]
        },
        {
            "name": "Lynx",
            "type": "Mammal",
            "traits": [
                "Mysterious",
                "Intuitive",
                "Independent"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Secrets, Intuition, Perception",
            "image": "images/Lynx.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Intuition"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Meerkat",
            "type": "Mammal",
            "traits": [
                "Social",
                "Alert",
                "Cooperative"
            ],
            "zodiacMatches": [
                "Gemini",
                "Libra"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Community, Vigilance, Teamwork",
            "image": "images/Meerkat.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Desert"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Alertness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Social"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Monkey",
            "type": "Mammal",
            "traits": [
                "Playful",
                "Curious",
                "Intelligent"
            ],
            "zodiacMatches": [
                "Gemini",
                "Aquarius"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Curiosity, Fun, Adaptability",
            "image": "images/Monkey.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Curiosity"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Playful"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Happiness"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFP",
                "ENTP"
            ]
        },
        {
            "name": "Moose",
            "type": "Mammal",
            "traits": [
                "Strong",
                "Majestic",
                "Independent"
            ],
            "zodiacMatches": [
                "Taurus",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Strength, Confidence, Solitude",
            "image": "images/Moose.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Strength"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Majestic"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Mouse",
            "type": "Mammal",
            "traits": [
                "Resourceful",
                "Adaptable",
                "Curious"
            ],
            "zodiacMatches": [
                "Virgo",
                "Cancer"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Resourcefulness, Humility, Attention to Detail",
            "image": "images/Mouse animal.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "City",
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Resourcefulness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Curious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Orca",
            "type": "Mammal",
            "traits": [
                "Powerful",
                "Intelligent",
                "Social"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Strength, Family, Intelligence",
            "image": "images/Orca.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Intelligence"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Powerful"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ENTJ"
            ]
        },
        {
            "name": "Otter",
            "type": "Mammal",
            "traits": [
                "Playful",
                "Social",
                "Curious"
            ],
            "zodiacMatches": [
                "Gemini",
                "Aquarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Joy, Playfulness, Adaptability",
            "image": "images/Otter.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean",
                    "River"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Playfulness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Playful"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Happiness"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Panda",
            "type": "Mammal",
            "traits": [
                "Gentle",
                "Peaceful",
                "Resilient"
            ],
            "zodiacMatches": [
                "Taurus",
                "Cancer"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Peace, Balance, Harmony",
            "image": "images/Panda.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Peaceful"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Panther",
            "type": "Mammal",
            "traits": [
                "Mysterious",
                "Powerful",
                "Elegant"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Leo"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Mystery, Power, Grace",
            "image": "images/Panther.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Power"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Platypus",
            "type": "Mammal",
            "traits": [
                "Unique",
                "Adaptable",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Aquarius",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Uniqueness, Adaptability, Mystery",
            "image": "images/Platypus.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "River"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Uniqueness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Polar Bear",
            "type": "Mammal",
            "traits": [
                "Strong",
                "Resilient",
                "Protective"
            ],
            "zodiacMatches": [
                "Capricorn",
                "Scorpio"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Survival, Strength, Solitude",
            "image": "images/Polar Bear.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Arctic"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Strength"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Porcupine",
            "type": "Mammal",
            "traits": [
                "Defensive",
                "Gentle",
                "Resourceful"
            ],
            "zodiacMatches": [
                "Virgo",
                "Capricorn"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Protection, Boundaries, Resilience",
            "image": "images/Porcupine.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        },
        {
            "name": "Raccoon",
            "type": "Mammal",
            "traits": [
                "Clever",
                "Adaptable",
                "Mischievous"
            ],
            "zodiacMatches": [
                "Gemini",
                "Scorpio"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Curiosity, Resourcefulness, Playfulness",
            "image": "images/Racoon.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "City",
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Cleverness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mischievous"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Rhino",
            "type": "Mammal",
            "traits": [
                "Strong",
                "Grounded",
                "Protective"
            ],
            "zodiacMatches": [
                "Taurus",
                "Leo"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Strength, Stability, Resilience",
            "image": "images/Rhino.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Strength"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Sloth",
            "type": "Mammal",
            "traits": [
                "Relaxed",
                "Patient",
                "Gentle"
            ],
            "zodiacMatches": [
                "Taurus",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Relaxation, Patience, Mindfulness",
            "image": "images/Sloth.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Patience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Squirrel",
            "type": "Mammal",
            "traits": [
                "Resourceful",
                "Energetic",
                "Prepared"
            ],
            "zodiacMatches": [
                "Virgo",
                "Capricorn"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Preparation, Resourcefulness, Adaptability",
            "image": "images/Squirrel.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resourcefulness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Energetic"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Wealth"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Tiger",
            "type": "Mammal",
            "traits": [
                "Powerful",
                "Confident",
                "Fearless"
            ],
            "zodiacMatches": [
                "Leo",
                "Aries"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Strength, Courage, Passion",
            "image": "images/Tiger.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Courage"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Confident"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Unicorn",
            "type": "Mythical Mammal",
            "traits": [
                "Magical",
                "Pure",
                "Unique"
            ],
            "zodiacMatches": [
                "Pisces",
                "Libra"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Magic, Purity, Imagination",
            "image": "images/Unicorn.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Uniqueness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Magical"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Creative"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mythical Mammal"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Whale",
            "type": "Mammal",
            "traits": [
                "Wise",
                "Emotional",
                "Majestic"
            ],
            "zodiacMatches": [
                "Cancer",
                "Pisces"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Wisdom, Depth, Communication",
            "image": "images/Whale.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Wisdom"
                ],
                "sense": [
                    "Hearing"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Majestic"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Wolf",
            "type": "Mammal",
            "traits": [
                "Loyal",
                "Intuitive",
                "Wild"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Aries"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Loyalty, Instinct, Freedom",
            "image": "images/Wolf.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Winter"
                ],
                "mainTrait": [
                    "Loyalty"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Wild"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Wombat",
            "type": "Mammal",
            "traits": [
                "Grounded",
                "Resilient",
                "Protective"
            ],
            "zodiacMatches": [
                "Taurus",
                "Capricorn"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Stability, Endurance, Protection",
            "image": "images/Wombat.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Grounded"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mammal"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        }
    ],
    "reptiles": [
        {
            "name": "Chameleon",
            "type": "Reptile",
            "traits": [
                "Adaptable",
                "Mysterious",
                "Patient"
            ],
            "zodiacMatches": [
                "Gemini",
                "Scorpio"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Adaptability, Transformation, Perception",
            "image": "images/Chameleon.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Adaptability"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Dragon",
            "type": "Mythical Reptile",
            "traits": [
                "Powerful",
                "Majestic",
                "Mystical"
            ],
            "zodiacMatches": [
                "Leo",
                "Sagittarius"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Power, Wisdom, Magic",
            "image": "images/Dragon.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Mountains"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Power"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Majestic"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mythical Reptile"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Gecko",
            "type": "Reptile",
            "traits": [
                "Resilient",
                "Adaptable",
                "Resourceful"
            ],
            "zodiacMatches": [
                "Virgo",
                "Capricorn"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Survival, Adaptability, Regeneration",
            "image": "images/Gecko.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Resourceful"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Black Mamba",
            "type": "Reptile",
            "traits": [
                "Fast",
                "Fierce",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Aries"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Speed, Danger, Transformation",
            "image": "images/Black mamba.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Desert"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Speed"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fierce"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Cobra",
            "type": "Reptile",
            "traits": [
                "Powerful",
                "Intense",
                "Protective"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Leo"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Power, Protection, Rebirth",
            "image": "images/Cobra.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Desert"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Power"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Intense"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Crocodile",
            "type": "Reptile",
            "traits": [
                "Patient",
                "Strong",
                "Survivor"
            ],
            "zodiacMatches": [
                "Taurus",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Patience, Strength, Stealth",
            "image": "images/Crocodile.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "River"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Patience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ESTJ"
            ]
        },
        {
            "name": "Komodo Dragon",
            "type": "Reptile",
            "traits": [
                "Fierce",
                "Dominant",
                "Resilient"
            ],
            "zodiacMatches": [
                "Aries",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Strength, Dominance, Survival",
            "image": "images/Komodo Dragon.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Dominance"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fierce"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Viper",
            "type": "Reptile",
            "traits": [
                "Cunning",
                "Dangerous",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Danger, Transformation, Mystery",
            "image": "images/Viper.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Cunning"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Dangerous"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Tortoise",
            "type": "Reptile",
            "traits": [
                "Wise",
                "Patient",
                "Grounded"
            ],
            "zodiacMatches": [
                "Taurus",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Wisdom, Longevity, Stability",
            "image": "images/Tortoise.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Herbivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Wisdom"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Grounded"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Reptile"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "INTJ"
            ]
        }
    ],
    "fish": [
        {
            "name": "Clownfish",
            "type": "Fish",
            "traits": [
                "Social",
                "Adaptable",
                "Joyful"
            ],
            "zodiacMatches": [
                "Gemini",
                "Libra"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Joy, Adaptability, Teamwork",
            "image": "images/Clownfish.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Joyful"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Social"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Beach parties"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Happiness"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Jellyfish",
            "type": "Fish",
            "traits": [
                "Graceful",
                "Mysterious",
                "Adaptable"
            ],
            "zodiacMatches": [
                "Pisces",
                "Cancer"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Flow, Adaptability, Mystery",
            "image": "images/Jellyfish.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Graceful"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Octopus",
            "type": "Fish",
            "traits": [
                "Intelligent",
                "Creative",
                "Flexible"
            ],
            "zodiacMatches": [
                "Gemini",
                "Scorpio"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Intelligence, Mystery, Regeneration",
            "image": "images/Octopus.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Intelligence"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Creative"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Piranha",
            "type": "Fish",
            "traits": [
                "Fierce",
                "Determined",
                "Opportunistic"
            ],
            "zodiacMatches": [
                "Aries",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Power, Survival, Focus",
            "image": "images/Piranha.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "River"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Determination"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fierce"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ESTP",
                "ESTJ"
            ]
        },
        {
            "name": "Seahorse",
            "type": "Fish",
            "traits": [
                "Gentle",
                "Patient",
                "Unique"
            ],
            "zodiacMatches": [
                "Cancer",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Patience, Fatherhood, Grace",
            "image": "images/Seahorse.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Patience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Shark",
            "type": "Fish",
            "traits": [
                "Powerful",
                "Fearless",
                "Dominant"
            ],
            "zodiacMatches": [
                "Leo",
                "Scorpio"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Strength, Authority, Survival",
            "image": "images/Shark.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Power"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fearless"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Starfish",
            "type": "Fish",
            "traits": [
                "Resilient",
                "Regenerative",
                "Balanced"
            ],
            "zodiacMatches": [
                "Libra",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Healing, Renewal, Harmony",
            "image": "images/Starfish.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Balanced"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Stingray",
            "type": "Fish",
            "traits": [
                "Graceful",
                "Mysterious",
                "Protective"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Grace, Mystery, Defense",
            "image": "images/Stingray.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Graceful"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Swordfish",
            "type": "Fish",
            "traits": [
                "Focused",
                "Ambitious",
                "Powerful"
            ],
            "zodiacMatches": [
                "Aries",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Focus, Strength, Precision",
            "image": "images/Swordfish.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Focus"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Ambitious"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Fish"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Kraken",
            "type": "Mythical Fish",
            "traits": [
                "Powerful",
                "Mysterious",
                "Destructive"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Chaos, Power, Mystery",
            "image": "images/Kraken.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Ocean"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Power"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Mythical Fish"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Crab",
            "type": "Fish",
            "traits": [
                "Resilient",
                "Protective",
                "Adaptable"
            ],
            "zodiacMatches": [
                "Cancer",
                "Scorpio"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Protection, Adaptability, Emotion",
            "image": "images/Crab.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Ocean",
                    "Beach"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Protective"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Crustacean"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "INTJ"
            ]
        }
    ],
    "amphibians": [
        {
            "name": "Axolotl",
            "type": "Amphibian",
            "traits": [
                "Regenerative",
                "Unique",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Regeneration, Adaptability, Mystery",
            "image": "images/Axolotl.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "River"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Regeneration"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Frog",
            "type": "Amphibian",
            "traits": [
                "Transformative",
                "Adaptable",
                "Resilient"
            ],
            "zodiacMatches": [
                "Cancer",
                "Scorpio"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Transformation, Renewal, Cleansing",
            "image": "images/Frog.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Transformation"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Adaptable"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Loch Ness Monster",
            "type": "Mythical Amphibian",
            "traits": [
                "Mysterious",
                "Elusive",
                "Legendary"
            ],
            "zodiacMatches": [
                "Pisces",
                "Scorpio"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Mystery, Legend, Intrigue",
            "image": "images/Loch Ness Monster.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Lake"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Mystery"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Elusive"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Mythical Amphibian"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Salamander",
            "type": "Amphibian",
            "traits": [
                "Resilient",
                "Fiery",
                "Mystical"
            ],
            "zodiacMatches": [
                "Aries",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Transformation, Fire, Rebirth",
            "image": "images/Salamanda.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fiery"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Newt",
            "type": "Amphibian",
            "traits": [
                "Adaptable",
                "Curious",
                "Regenerative"
            ],
            "zodiacMatches": [
                "Pisces",
                "Virgo"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Adaptability, Renewal, Exploration",
            "image": "images/Newt.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest",
                    "Pond"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Adaptability"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Curious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Toad",
            "type": "Amphibian",
            "traits": [
                "Grounded",
                "Patient",
                "Protective"
            ],
            "zodiacMatches": [
                "Taurus",
                "Capricorn"
            ],
            "generations": [
                "Boomers",
                "Gen X"
            ],
            "symbolicMeaning": "Stability, Protection, Transformation",
            "image": "images/Toad.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Patience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Grounded"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        },
        {
            "name": "Caecilian",
            "type": "Amphibian",
            "traits": [
                "Elusive",
                "Mysterious",
                "Resilient"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Mystery, Adaptability, Hidden Strength",
            "image": "images/Caecilian.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Forest",
                    "Underground"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Touch"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Elusive"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        },
        {
            "name": "Siren",
            "type": "Amphibian",
            "traits": [
                "Aquatic",
                "Mystical",
                "Gentle"
            ],
            "zodiacMatches": [
                "Cancer",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Grace, Water, Serenity",
            "image": "images/Siren.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "River",
                    "Lake"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Grace"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Amphibian"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Water"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INFJ",
                "INTJ"
            ]
        }
    ],
    "insects": [
        {
            "name": "Ant",
            "type": "Insect",
            "traits": [
                "Hardworking",
                "Organized",
                "Team Player"
            ],
            "zodiacMatches": [
                "Virgo",
                "Capricorn"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Diligence, Patience, Teamwork",
            "image": "images/Ant.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Hardworking"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Organized"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Bee",
            "type": "Insect",
            "traits": [
                "Industrious",
                "Social",
                "Productive"
            ],
            "zodiacMatches": [
                "Taurus",
                "Virgo"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Community, Hard Work, Sweetness",
            "image": "images/Bee.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Industrious"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Social"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ESTJ",
                "ISTJ"
            ]
        },
        {
            "name": "Butterfly",
            "type": "Insect",
            "traits": [
                "Transformative",
                "Graceful",
                "Free-spirited"
            ],
            "zodiacMatches": [
                "Gemini",
                "Pisces"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Transformation, Beauty, Freedom",
            "image": "images/Butterfly.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Transformation"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Graceful"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Beetle",
            "type": "Insect",
            "traits": [
                "Resilient",
                "Strong",
                "Adaptable"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Taurus"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Strength, Persistence, Renewal",
            "image": "images/Beetle.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Resilience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Strong"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "INTJ"
            ]
        },
        {
            "name": "Wasp",
            "type": "Insect",
            "traits": [
                "Fierce",
                "Protective",
                "Determined"
            ],
            "zodiacMatches": [
                "Aries",
                "Scorpio"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Aggression, Defense, Focus",
            "image": "images/Wasp.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Determination"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Fierce"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Dragonfly",
            "type": "Insect",
            "traits": [
                "Adaptable",
                "Energetic",
                "Visionary"
            ],
            "zodiacMatches": [
                "Gemini",
                "Aquarius"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Change, Clarity, Illusion",
            "image": "images/Dragonfly.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Adaptability"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Energetic"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Firefly",
            "type": "Insect",
            "traits": [
                "Illuminating",
                "Magical",
                "Hopeful"
            ],
            "zodiacMatches": [
                "Leo",
                "Pisces"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Light, Inspiration, Magic",
            "image": "images/Firefly.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Illumination"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Magical"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Flight"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENFJ",
                "ENTJ"
            ]
        },
        {
            "name": "Grasshopper",
            "type": "Insect",
            "traits": [
                "Energetic",
                "Adventurous",
                "Optimistic"
            ],
            "zodiacMatches": [
                "Sagittarius",
                "Gemini"
            ],
            "generations": [
                "Gen Z",
                "Millennials"
            ],
            "symbolicMeaning": "Leaping Forward, Joy, Abundance",
            "image": "images/Grasshopper.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Plains"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Energetic"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Adventurous"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Ladybug",
            "type": "Insect",
            "traits": [
                "Lucky",
                "Gentle",
                "Protective"
            ],
            "zodiacMatches": [
                "Cancer",
                "Libra"
            ],
            "generations": [
                "All"
            ],
            "symbolicMeaning": "Good Fortune, Protection, Kindness",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Surrounded by people"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Luck"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "In a team"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Gentle"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Relax with family"
                ],
                "personality": [
                    "Peaceful"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Enjoy life"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ENTJ",
                "ENFJ"
            ]
        },
        {
            "name": "Moth",
            "type": "Insect",
            "traits": [
                "Mysterious",
                "Intuitive",
                "Resilient"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Pisces"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Intuition, Mystery, Transformation",
            "image": "images/Moth.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Intuitively, gut feeling"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Mystery"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Intuitive"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super speed"
                ],
                "element": [
                    "Wind"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "INTJ",
                "INFJ"
            ]
        },
        {
            "name": "Scorpion",
            "type": "Insect",
            "traits": [
                "Intense",
                "Protective",
                "Mysterious"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Aries"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Power, Defense, Mystery",
            "image": "images/Scorpion.webp",
            "attributes": {
                "stressHandling": [
                    "Act quickly to resolve it"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Ruler"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Desert"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Take charge"
                ],
                "season": [
                    "Summer"
                ],
                "mainTrait": [
                    "Intensity"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "React immediately"
                ],
                "failureReaction": [
                    "Try again immediately"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Confidence"
                ],
                "vacation": [
                    "Exciting adventures and exploring"
                ],
                "personality": [
                    "Courageous"
                ],
                "objective": [
                    "Fame"
                ],
                "ambition": [
                    "Be a leader in major projects"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Fire"
                ],
                "conflictHandling": [
                    "Face it head-on"
                ],
                "criticismHandling": [
                    "Defend yourself and explain"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "The desire to prove yourself"
                ]
            },
            "mbtiMatches": [
                "ISTP",
                "ESTP"
            ]
        },
        {
            "name": "Tarantula",
            "type": "Insect",
            "traits": [
                "Patient",
                "Mysterious",
                "Powerful"
            ],
            "zodiacMatches": [
                "Scorpio",
                "Capricorn"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Patience, Mystery, Strength",
            "image": "images/Tarantula.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Night"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Carnivore"
                ],
                "environment": [
                    "Desert"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Fall"
                ],
                "mainTrait": [
                    "Patience"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Mysterious"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Curious"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Exploring new hobbies"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "INTJ"
            ]
        },
        {
            "name": "Dung Beetle",
            "type": "Insect",
            "traits": [
                "Resourceful",
                "Persistent",
                "Grounded"
            ],
            "zodiacMatches": [
                "Taurus",
                "Virgo"
            ],
            "generations": [
                "Gen X",
                "Millennials"
            ],
            "symbolicMeaning": "Resourcefulness, Persistence, Renewal",
            "image": "images/Dung beetles.webp",
            "attributes": {
                "stressHandling": [
                    "Stay calm and analyze"
                ],
                "timeOfDay": [
                    "Day"
                ],
                "decisionMaking": [
                    "Logically, based on facts"
                ],
                "rulerOrFree": [
                    "Free"
                ],
                "diet": [
                    "Omnivore"
                ],
                "environment": [
                    "Forest"
                ],
                "socialPreference": [
                    "Alone"
                ],
                "leadership": [
                    "Follow others' lead"
                ],
                "season": [
                    "Spring"
                ],
                "mainTrait": [
                    "Resourcefulness"
                ],
                "sense": [
                    "Eyesight"
                ],
                "taskApproach": [
                    "Your way"
                ],
                "unusualSituation": [
                    "Think before acting"
                ],
                "failureReaction": [
                    "Learn from it and move on"
                ],
                "firstImpression": [
                    "Grounded"
                ],
                "seduction": [
                    "Mystery"
                ],
                "vacation": [
                    "Backpacking and sightseeing"
                ],
                "personality": [
                    "Sensible"
                ],
                "objective": [
                    "Peace"
                ],
                "ambition": [
                    "Fulfill dreams"
                ],
                "animalType": [
                    "Insect"
                ],
                "superpower": [
                    "Super strength"
                ],
                "element": [
                    "Earth"
                ],
                "conflictHandling": [
                    "Avoid conflict"
                ],
                "criticismHandling": [
                    "Reflect and learn from it"
                ],
                "freeTime": [
                    "Working on personal projects"
                ],
                "motivationSource": [
                    "Your long-term goals"
                ]
            },
            "mbtiMatches": [
                "ISTJ",
                "ISFJ"
            ]
        }
    ]
}

        function determineSpiritAnimal(userResponses) {
            // Input validation
            if (!userResponses || typeof userResponses !== "object") {
                console.error("Error: Invalid userResponses provided.");
                return {
                    name: "Unknown Spirit Animal",
                    symbolicMeaning: "Unknown",
                    image: "images/unknown.webp"
                };
            }
    
            let animalScores = [];
    
            // Check if animalData exists and has content
            if (!animalData || Object.keys(animalData).length === 0) {
                console.error("Error: animalData is missing.");
                return {
                    name: "Unknown Spirit Animal",
                    symbolicMeaning: "Unknown",
                    image: "images/unknown.webp"
                };
            }
    
            // Combine all animals from different categories
            const allAnimals = Object.values(animalData).flat();
    
            // If no animals are available, return default
            if (!allAnimals || allAnimals.length === 0) {
                console.error("Error: No animals found in animalData.");
                return {
                    name: "Unknown Spirit Animal",
                    symbolicMeaning: "Unknown",
                    image: "images/unknown.webp"
                };
            }
    
            // Narrow to animals matching the person's MBTI type first (real filter, not just a bonus).
            // Start strict (all 4 letters match) and loosen only if that leaves nothing to choose from.
            let candidatePool = allAnimals;
            if (userResponses["mbtiType"]) {
                for (let threshold = 4; threshold >= 0; threshold--) {
                    const filtered = allAnimals.filter(animal => {
                        if (!animal.mbtiMatches || animal.mbtiMatches.length === 0) return false;
                        const bestOverlap = Math.max(...animal.mbtiMatches.map(t => mbtiOverlap(t, userResponses["mbtiType"])));
                        return bestOverlap >= threshold;
                    });
                    if (filtered.length > 0) {
                        candidatePool = filtered;
                        break;
                    }
                }
            }

            // Calculate scores for each animal in the MBTI-filtered pool
            candidatePool.forEach(animal => {
                let score = 0;
    
                // Validate animal structure
                if (!animal || !animal.attributes || !animal.name) {
                    console.warn("Skipping invalid animal entry:", animal);
                    return;
                }
    
                // Score based on user responses
                for (let key in userResponses) {
                    if (key === "birthDate" || key === "zodiac" || key === "generation") continue;
                    if (key.startsWith("mbti_") || key === "mbtiType") continue;
    
                    const userResponse = userResponses[key];
                    const animalAttribute = animal.attributes[key];
    
                    // Skip if userResponse is undefined or null
                    if (userResponse === undefined || userResponse === null) continue;
    
                    if (animalAttribute) {
                        if (Array.isArray(animalAttribute) && animalAttribute.includes(userResponse)) {
                            score += 2;
                        } else if (animalAttribute === userResponse) {
                            score += 2;
                        }
                    }
                }
    
                // Bonus points for zodiac match
                if (userResponses["zodiac"] && animal.zodiacMatches?.includes(userResponses["zodiac"])) {
                    score += 1;
                }
    
                // Bonus points for generation match
                if (userResponses["generation"] && animal.generations?.includes(userResponses["generation"])) {
                    score += 1;
                }

                // Extra bonus for an exact MBTI match (matters when the pool had to be loosened above)
                if (userResponses["mbtiType"] && animal.mbtiMatches?.includes(userResponses["mbtiType"])) {
                    score += 2;
                }
    
                // Only add animals with a positive score
                if (score > 0) {
                    animalScores.push({
                        name: animal.name,
                        score,
                        symbolicMeaning: animal.symbolicMeaning || "Unknown",
                        image: animal.image || "images/unknown.webp"
                    });
                }
            });
    
            // If no animals scored, return default
            if (animalScores.length === 0) {
                console.warn("No matches found! Assigning a default animal.");
                animalScores.push({
                    name: "Unknown Spirit Animal",
                    score: 1,
                    symbolicMeaning: "Unknown",
                    image: "images/unknown.webp"
                });
            }
    
            // Create weighted list for random selection
            let weightedList = [];
            animalScores.forEach(animal => {
                // Ensure score is a positive number
                const scoreCount = Math.max(1, Math.floor(animal.score));
                for (let i = 0; i < scoreCount; i++) {
                    weightedList.push({
                        name: animal.name,
                        symbolicMeaning: animal.symbolicMeaning,
                        image: animal.image
                    });
                }
            });
    
            // Select a random animal from the weighted list
            const selectedAnimal = weightedList.length > 0
                ? weightedList[Math.floor(Math.random() * weightedList.length)]
                : {
                    name: "Unknown Spirit Animal",
                    symbolicMeaning: "Unknown",
                    image: "images/unknown.webp"
                };
    
            return selectedAnimal;
        }
    
        loadQuestion();
    });